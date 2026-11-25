import bundledOffersRaw from '@/data/offers.json';
import type { MutualFundOffer, OfferPayload } from '@/types/offer';

const DRAFT_STORAGE_KEY = 'abc_mf_offers_draft';
const GITHUB_CONFIG_KEY = 'abc_mf_github_publish_cfg';
const OFFERS_FILE_PATH = 'src/data/offers.json';

export interface GitHubPublishConfig {
  ownerRepo: string;
  branch: string;
  token: string;
}

export interface GitHubPublishResult {
  commitUrl: string;
  commitSha: string;
  workflowUrl: string;
}

function sortByCreatedAtDesc(items: MutualFundOffer[]): MutualFundOffer[] {
  return [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getBundledOffers(): MutualFundOffer[] {
  return sortByCreatedAtDesc(bundledOffersRaw as MutualFundOffer[]);
}

export function getActiveBundledOffers(): MutualFundOffer[] {
  return getBundledOffers().filter((item) => item.isActive);
}

export function loadClientOffers(): MutualFundOffer[] {
  if (typeof window === 'undefined') {
    return getBundledOffers();
  }
  try {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return getBundledOffers();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return sortByCreatedAtDesc(parsed as MutualFundOffer[]);
    }
  } catch {
    // Fallback to bundled offers if localStorage is unavailable or corrupt
  }
  return getBundledOffers();
}

export function loadActiveClientOffers(): MutualFundOffer[] {
  return loadClientOffers().filter((item) => item.isActive);
}

export function hasLocalDraftOffers(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.localStorage.getItem(DRAFT_STORAGE_KEY));
}

export function saveDraftOffers(offers: MutualFundOffer[]): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(offers));
}

export function clearDraftOffers(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(DRAFT_STORAGE_KEY);
}

export function buildNewOffer(input: OfferPayload): MutualFundOffer {
  const now = new Date().toISOString();
  const slugBase = input.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  const rand = Math.random().toString(16).slice(2, 8);
  return {
    ...input,
    badgeText: input.badgeText.trim() || 'Client Benefit',
    details: input.details.trim() || input.summary.trim(),
    eligibility: input.eligibility.trim() || 'All eligible mutual fund investors',
    minInvestment: input.minInvestment.trim() || 'As per scheme mandate',
    validUntil: input.validUntil.trim() || 'Ongoing',
    id: `${slugBase || 'offer'}-${rand}`,
    createdAt: now,
    updatedAt: now,
  };
}

export function applyOfferUpdate(
  offers: MutualFundOffer[],
  id: string,
  updates: Partial<OfferPayload>
): MutualFundOffer[] {
  const now = new Date().toISOString();
  return offers.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updates,
          id: item.id,
          createdAt: item.createdAt,
          updatedAt: now,
        }
      : item
  );
}

export function getDefaultGitHubConfig(): GitHubPublishConfig {
  const defaultRepo =
    process.env.NEXT_PUBLIC_GITHUB_REPO || 'krishnamurthy12345/mutual_fund';
  const defaultBranch = process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main';
  if (typeof window === 'undefined') {
    return { ownerRepo: defaultRepo, branch: defaultBranch, token: '' };
  }
  try {
    const raw = window.localStorage.getItem(GITHUB_CONFIG_KEY);
    if (!raw) return { ownerRepo: defaultRepo, branch: defaultBranch, token: '' };
    const parsed = JSON.parse(raw) as Partial<GitHubPublishConfig>;
    return {
      ownerRepo: parsed.ownerRepo?.trim() || defaultRepo,
      branch: parsed.branch?.trim() || defaultBranch,
      token: parsed.token || '',
    };
  } catch {
    return { ownerRepo: defaultRepo, branch: defaultBranch, token: '' };
  }
}

export function saveGitHubConfig(config: GitHubPublishConfig): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(GITHUB_CONFIG_KEY, JSON.stringify(config));
}

function encodeUtf8Base64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export async function publishOffersToGitHub(params: {
  ownerRepo: string;
  branch: string;
  token: string;
  offers: MutualFundOffer[];
  commitMessage?: string;
}): Promise<GitHubPublishResult> {
  const cleanRepo = params.ownerRepo.trim().replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '');
  const cleanBranch = params.branch.trim() || 'main';
  const cleanToken = params.token.trim();

  if (!/^[^/\s]+\/[^/\s]+$/.test(cleanRepo)) {
    throw new Error('Repository must be in "owner/repo" format.');
  }
  if (!cleanToken) {
    throw new Error('GitHub Personal Access Token (Contents: Read & Write) is required.');
  }

  const contentsApiUrl = `https://api.github.com/repos/${cleanRepo}/contents/${OFFERS_FILE_PATH}`;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${cleanToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  };

  let existingSha: string | undefined;
  const getRes = await fetch(`${contentsApiUrl}?ref=${encodeURIComponent(cleanBranch)}`, {
    headers,
  });

  if (getRes.ok) {
    const fileInfo = (await getRes.json()) as { sha?: string };
    existingSha = fileInfo.sha;
  } else if (getRes.status !== 404) {
    const errBody = (await getRes.json().catch(() => ({}))) as { message?: string };
    throw new Error(
      errBody.message || `GitHub lookup failed with HTTP ${getRes.status}.`
    );
  }

  const jsonPayload = `${JSON.stringify(sortByCreatedAtDesc(params.offers), null, 2)}\n`;
  const putRes = await fetch(contentsApiUrl, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message:
        params.commitMessage ||
        'chore: update mutual fund offers and advisory policies',
      content: encodeUtf8Base64(jsonPayload),
      branch: cleanBranch,
      ...(existingSha ? { sha: existingSha } : {}),
    }),
  });

  if (!putRes.ok) {
    const errBody = (await putRes.json().catch(() => ({}))) as { message?: string };
    throw new Error(
      errBody.message || `GitHub publish failed with HTTP ${putRes.status}.`
    );
  }

  const result = (await putRes.json()) as {
    commit?: { sha?: string; html_url?: string };
  };

  return {
    commitSha: result.commit?.sha || '',
    commitUrl: result.commit?.html_url || `https://github.com/${cleanRepo}/commits/${cleanBranch}`,
    workflowUrl: `https://github.com/${cleanRepo}/actions`,
  };
}

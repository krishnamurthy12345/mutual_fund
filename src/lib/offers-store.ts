import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { MutualFundOffer, OfferPayload } from '@/types/offer';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'offers.json');

const SEED_OFFERS: MutualFundOffer[] = [
  {
    id: 'step-up-sip-accelerator',
    title: 'Step-Up SIP Accelerator Benefit',
    offerType: 'Benefit',
    fundCategory: 'Equity SIP',
    badgeText: 'Zero Setup Fee',
    summary:
      'Automate annual 10%–15% SIP increments across core Large, Flexi, and Mid-Cap mutual funds with complimentary annual rebalancing.',
    details:
      'Designed for salaried professionals and growing families whose income rises year over year. By pairing automated annual SIP step-ups with disciplined asset-class rebalancing, investors capture higher long-term rupee-cost averaging without timing the market. Includes a structured yearly goal-progress review at no additional advisory setup charge.',
    eligibility: 'New & existing SIP investors committing a minimum 3-year horizon',
    minInvestment: '₹5,000 / month SIP',
    validUntil: 'Ongoing Advisory Benefit',
    highlights: [
      'Automatic 10% or 15% annual SIP top-up configuration',
      'Complimentary yearly portfolio overlap & drift review',
      'Flexible pause or modification option anytime without penalty',
    ],
    featured: true,
    isActive: true,
    createdAt: '2026-10-01T09:00:00.000Z',
    updatedAt: '2026-10-01T09:00:00.000Z',
  },
  {
    id: 'elss-tax-shield-advantage',
    title: 'ELSS Tax-Shield Dual Benefit',
    offerType: 'Offer',
    fundCategory: 'Tax Saving (ELSS)',
    badgeText: 'Save up to ₹46,800/yr',
    summary:
      'Combine Section 80C tax deductions (up to ₹1.5 Lakh) with diversified equity compounding and the shortest 3-year statutory lock-in.',
    details:
      'Equity Linked Savings Schemes (ELSS) offer one of the shortest lock-in periods among Section 80C instruments while maintaining long-term equity growth potential. Our curated ELSS framework filters funds on rolling 5-year consistency, downside capture, and portfolio overlap so your tax-saving allocation strengthens your core equity sleeve.',
    eligibility: 'Resident individuals & HUFs opting for Old Tax Regime deductions',
    minInvestment: '₹500 / month SIP or ₹5,000 Lump Sum',
    validUntil: 'FY 2026–27 Tax Cycle',
    highlights: [
      'Up to ₹1,50,000 deduction eligibility under Section 80C',
      'Shortest 3-year lock-in compared to PPF (15 yrs) or Tax FDs (5 yrs)',
      'Instant digital tax-proof statement for employer payroll filing',
    ],
    featured: true,
    isActive: true,
    createdAt: '2026-10-05T09:00:00.000Z',
    updatedAt: '2026-10-05T09:00:00.000Z',
  },
  {
    id: 'multi-asset-drawdown-policy',
    title: 'Multi-Asset Gold & Debt Cushion Policy',
    offerType: 'Policy',
    fundCategory: 'Multi-Asset & Hedging',
    badgeText: 'Downside Protection',
    summary:
      'Core advisory policy allocating across Indian equities, sovereign debt, and Gold/Silver ETFs to dampen severe market drawdowns.',
    details:
      'Under our institutional multi-asset policy, conservative and milestone-sensitive portfolios are structured with non-correlated hedges across domestic equity, high-grade debt, and precious metal ETFs. Periodic threshold rebalancing trims outperforming assets and redeploys into undervalued sleeves automatically.',
    eligibility: 'Families, retirees & business owners prioritizing capital stability',
    minInvestment: '₹2,50,000 Lump Sum or ₹10,000 / month',
    validUntil: 'Standing Institutional Policy',
    highlights: [
      'Built-in Gold/Silver hedge against inflation & currency volatility',
      'Automatic threshold rebalancing without emotional timing',
      'Lower portfolio volatility across sharp market corrections',
    ],
    featured: true,
    isActive: true,
    createdAt: '2026-10-10T09:00:00.000Z',
    updatedAt: '2026-10-10T09:00:00.000Z',
  },
  {
    id: 'corporate-treasury-liquidity-offer',
    title: 'Corporate Treasury T+1 Liquidity Advantage',
    offerType: 'Offer',
    fundCategory: 'Corporate Treasury',
    badgeText: 'Zero Exit Load > 7 Days',
    summary:
      'Deploy idle business reserves into AAA-rated Liquid, Overnight, and Arbitrage mutual funds with T+1 bank credit and zero lock-in.',
    details:
      'Businesses holding operational surpluses in zero- or low-interest current accounts lose purchasing power daily. Our Treasury Desk structures a tiered liquidity ladder across Overnight, Liquid, and Arbitrage mutual funds—preserving principal safety while improving post-tax treasury yields.',
    eligibility: 'Private limited companies, LLPs, partnerships & family trusts',
    minInvestment: '₹5,00,000 Treasury Allocation',
    validUntil: '31 Mar 2027',
    highlights: [
      'Redemption proceeds credited on T+1 working day',
      'Strict AAA / Sovereign credit-quality screening policy',
      'Arbitrage option for equity-like taxation on >12 month holds',
    ],
    featured: false,
    isActive: true,
    createdAt: '2026-10-15T09:00:00.000Z',
    updatedAt: '2026-10-15T09:00:00.000Z',
  },
  {
    id: 'portfolio-overlap-audit-benefit',
    title: 'Complimentary Portfolio Overlap & Exit-Load Audit',
    offerType: 'Benefit',
    fundCategory: 'Special Policy',
    badgeText: 'Free Advisory Audit',
    summary:
      'Consolidate fragmented 15–25 scheme portfolios into a high-conviction 5–7 fund architecture while minimizing exit-load and STCG drag.',
    details:
      'Many investors accumulate overlapping mutual funds over the years, resulting in index-hugging returns and high expense ratios. Our complimentary audit maps stock-level overlap, exit-load windows, and capital-gains impact to design a phased tax-smart transition plan.',
    eligibility: 'Existing mutual fund investors with portfolios above ₹5 Lakhs',
    minInvestment: 'No New Investment Required',
    validUntil: 'Ongoing Client Benefit',
    highlights: [
      'Stock-level overlap & style-drift diagnostic report',
      'Phased switch schedule to avoid short-term capital gains tax',
      'Clear consolidation blueprint within 5 working days',
    ],
    featured: false,
    isActive: true,
    createdAt: '2026-10-20T09:00:00.000Z',
    updatedAt: '2026-10-20T09:00:00.000Z',
  },
  {
    id: 'tax-smart-swp-income-policy',
    title: 'Tax-Smart Retirement SWP Income Policy',
    offerType: 'Policy',
    fundCategory: 'Retirement & SWP',
    badgeText: 'Monthly Cashflow Plan',
    summary:
      'Generate predictable monthly cashflows via Systematic Withdrawal Plans (SWP) with a 24-month liquid buffer protecting equity principal.',
    details:
      'Traditional fixed deposits tax entire interest earnings at slab rates. Under our Bucket-SWP Policy, 24 months of living expenses sit in ultra-safe liquid/arbitrage funds while the remaining corpus compounds in hybrid and equity funds—taxing only the capital-gains portion of each withdrawal.',
    eligibility: 'Retirees, senior citizens & financially independent households',
    minInvestment: '₹10,00,000 Corpus Recommended',
    validUntil: 'Standing Institutional Policy',
    highlights: [
      'Dedicated 2-year cashflow buffer against bear-market sequence risk',
      'Only gains component taxed on monthly SWP withdrawals',
      'Automated monthly credit directly to primary bank account',
    ],
    featured: false,
    isActive: true,
    createdAt: '2026-10-25T09:00:00.000Z',
    updatedAt: '2026-10-25T09:00:00.000Z',
  },
];

let writeQueue: Promise<void> = Promise.resolve();

async function ensureStoreFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(SEED_OFFERS, null, 2), 'utf-8');
  }
}

async function readOffersFile(): Promise<MutualFundOffer[]> {
  await ensureStoreFile();
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    return SEED_OFFERS;
  }
  return parsed as MutualFundOffer[];
}

async function writeOffersFile(offers: MutualFundOffer[]): Promise<void> {
  const operation = writeQueue.then(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const tempFile = `${DATA_FILE}.${crypto.randomUUID()}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(offers, null, 2), 'utf-8');
    await fs.rename(tempFile, DATA_FILE);
  });
  writeQueue = operation.catch(() => undefined);
  return operation;
}

export async function getAllOffers(): Promise<MutualFundOffer[]> {
  const offers = await readOffersFile();
  return offers.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getActiveOffers(): Promise<MutualFundOffer[]> {
  const offers = await getAllOffers();
  return offers.filter((item) => item.isActive);
}

export async function createOffer(input: OfferPayload): Promise<MutualFundOffer> {
  const offers = await readOffersFile();
  const now = new Date().toISOString();
  const slugBase = input.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  const newOffer: MutualFundOffer = {
    ...input,
    id: `${slugBase || 'offer'}-${crypto.randomBytes(3).toString('hex')}`,
    createdAt: now,
    updatedAt: now,
  };
  const nextOffers = [newOffer, ...offers];
  await writeOffersFile(nextOffers);
  return newOffer;
}

export async function updateOffer(
  id: string,
  updates: Partial<OfferPayload>
): Promise<MutualFundOffer | null> {
  const offers = await readOffersFile();
  const index = offers.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated: MutualFundOffer = {
    ...offers[index],
    ...updates,
    id: offers[index].id,
    createdAt: offers[index].createdAt,
    updatedAt: new Date().toISOString(),
  };

  offers[index] = updated;
  await writeOffersFile(offers);
  return updated;
}

export async function deleteOffer(id: string): Promise<boolean> {
  const offers = await readOffersFile();
  const filtered = offers.filter((item) => item.id !== id);
  if (filtered.length === offers.length) return false;
  await writeOffersFile(filtered);
  return true;
}

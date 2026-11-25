import {
  FUND_CATEGORIES,
  OFFER_TYPES,
  type FundCategory,
  type OfferPayload,
  type OfferType,
} from '@/types/offer';

function isOfferType(value: unknown): value is OfferType {
  return typeof value === 'string' && (OFFER_TYPES as readonly string[]).includes(value);
}

function isFundCategory(value: unknown): value is FundCategory {
  return typeof value === 'string' && (FUND_CATEGORIES as readonly string[]).includes(value);
}

function sanitizeHighlights(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)
    .slice(0, 8);
}

export function validateCreateOfferPayload(
  body: unknown
): { ok: true; data: OfferPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body must be a JSON object.' };
  }

  const record = body as Record<string, unknown>;
  const title = typeof record.title === 'string' ? record.title.trim() : '';
  const badgeText = typeof record.badgeText === 'string' ? record.badgeText.trim() : '';
  const summary = typeof record.summary === 'string' ? record.summary.trim() : '';
  const details = typeof record.details === 'string' ? record.details.trim() : '';
  const eligibility = typeof record.eligibility === 'string' ? record.eligibility.trim() : '';
  const minInvestment =
    typeof record.minInvestment === 'string' ? record.minInvestment.trim() : '';
  const validUntil = typeof record.validUntil === 'string' ? record.validUntil.trim() : '';

  if (title.length < 3) {
    return { ok: false, error: 'Title must be at least 3 characters.' };
  }
  if (!isOfferType(record.offerType)) {
    return { ok: false, error: 'Invalid offer type selected.' };
  }
  if (!isFundCategory(record.fundCategory)) {
    return { ok: false, error: 'Invalid mutual fund category selected.' };
  }
  if (summary.length < 10) {
    return { ok: false, error: 'Summary must be at least 10 characters.' };
  }

  return {
    ok: true,
    data: {
      title,
      offerType: record.offerType,
      fundCategory: record.fundCategory,
      badgeText: badgeText || 'Client Benefit',
      summary,
      details: details || summary,
      eligibility: eligibility || 'All eligible mutual fund investors',
      minInvestment: minInvestment || 'As per scheme mandate',
      validUntil: validUntil || 'Ongoing',
      highlights: sanitizeHighlights(record.highlights),
      featured: Boolean(record.featured),
      isActive: record.isActive === undefined ? true : Boolean(record.isActive),
    },
  };
}

export function validatePatchOfferPayload(
  body: unknown
): { ok: true; data: Partial<OfferPayload> } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body must be a JSON object.' };
  }

  const record = body as Record<string, unknown>;
  const updates: Partial<OfferPayload> = {};

  if (record.title !== undefined) {
    if (typeof record.title !== 'string' || record.title.trim().length < 3) {
      return { ok: false, error: 'Title must be at least 3 characters.' };
    }
    updates.title = record.title.trim();
  }
  if (record.offerType !== undefined) {
    if (!isOfferType(record.offerType)) {
      return { ok: false, error: 'Invalid offer type.' };
    }
    updates.offerType = record.offerType;
  }
  if (record.fundCategory !== undefined) {
    if (!isFundCategory(record.fundCategory)) {
      return { ok: false, error: 'Invalid mutual fund category.' };
    }
    updates.fundCategory = record.fundCategory;
  }
  if (record.badgeText !== undefined && typeof record.badgeText === 'string') {
    updates.badgeText = record.badgeText.trim() || 'Client Benefit';
  }
  if (record.summary !== undefined) {
    if (typeof record.summary !== 'string' || record.summary.trim().length < 10) {
      return { ok: false, error: 'Summary must be at least 10 characters.' };
    }
    updates.summary = record.summary.trim();
  }
  if (record.details !== undefined && typeof record.details === 'string') {
    updates.details = record.details.trim();
  }
  if (record.eligibility !== undefined && typeof record.eligibility === 'string') {
    updates.eligibility = record.eligibility.trim();
  }
  if (record.minInvestment !== undefined && typeof record.minInvestment === 'string') {
    updates.minInvestment = record.minInvestment.trim();
  }
  if (record.validUntil !== undefined && typeof record.validUntil === 'string') {
    updates.validUntil = record.validUntil.trim();
  }
  if (record.highlights !== undefined) {
    updates.highlights = sanitizeHighlights(record.highlights);
  }
  if (record.featured !== undefined) {
    updates.featured = Boolean(record.featured);
  }
  if (record.isActive !== undefined) {
    updates.isActive = Boolean(record.isActive);
  }

  return { ok: true, data: updates };
}

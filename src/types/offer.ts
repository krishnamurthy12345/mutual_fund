export const OFFER_TYPES = ['Offer', 'Benefit', 'Policy'] as const;
export type OfferType = (typeof OFFER_TYPES)[number];

export const FUND_CATEGORIES = [
  'Equity SIP',
  'Tax Saving (ELSS)',
  'Multi-Asset & Hedging',
  'Corporate Treasury',
  'Retirement & SWP',
  'Special Policy',
] as const;
export type FundCategory = (typeof FUND_CATEGORIES)[number];

export interface MutualFundOffer {
  id: string;
  title: string;
  offerType: OfferType;
  fundCategory: FundCategory;
  badgeText: string;
  summary: string;
  details: string;
  eligibility: string;
  minInvestment: string;
  validUntil: string;
  highlights: string[];
  featured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OfferPayload {
  title: string;
  offerType: OfferType;
  fundCategory: FundCategory;
  badgeText: string;
  summary: string;
  details: string;
  eligibility: string;
  minInvestment: string;
  validUntil: string;
  highlights: string[];
  featured: boolean;
  isActive: boolean;
}

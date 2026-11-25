import type { Metadata } from 'next';
import { connection } from 'next/server';
import { getActiveOffers } from '@/lib/offers-store';
import OffersCatalogClient from '@/components/OffersCatalogClient';

export const metadata: Metadata = {
  title: 'Mutual Fund Offers & Benefits | ABC Mutual Fund',
  description:
    'Explore active mutual fund offers, SIP benefits, tax-saving ELSS advantages, and standing advisory policies.',
};

export default async function OffersPage() {
  await connection();
  const offers = await getActiveOffers();
  return <OffersCatalogClient initialOffers={offers} />;
}

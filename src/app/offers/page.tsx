import type { Metadata } from 'next';
import { getActiveBundledOffers } from '@/lib/client-offers';
import OffersCatalogClient from '@/components/OffersCatalogClient';

export const metadata: Metadata = {
  title: 'Mutual Fund Offers & Benefits | ABC Mutual Fund',
  description:
    'Explore active mutual fund offers, SIP benefits, tax-saving ELSS advantages, and standing advisory policies.',
};

export default function OffersPage() {
  const offers = getActiveBundledOffers();
  return <OffersCatalogClient initialOffers={offers} />;
}

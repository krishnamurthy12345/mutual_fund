'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { MutualFundOffer } from '@/types/offer';
import { loadActiveClientOffers } from '@/lib/client-offers';
import OfferCard from '@/components/OfferCard';
import OfferDetailModal from '@/components/OfferDetailModal';

interface OffersBenefitsPreviewProps {
  initialOffers: MutualFundOffer[];
}

export default function OffersBenefitsPreview({
  initialOffers,
}: OffersBenefitsPreviewProps) {
  const [offers, setOffers] = useState<MutualFundOffer[]>(initialOffers);
  const [selectedOffer, setSelectedOffer] = useState<MutualFundOffer | null>(null);

  useEffect(() => {
    setOffers(loadActiveClientOffers());
  }, []);

  const featuredOffers = offers.filter((item) => item.featured);
  const visibleOffers = (featuredOffers.length > 0 ? featuredOffers : offers).slice(0, 3);

  if (visibleOffers.length === 0) {
    return null;
  }

  return (
    <section
      id="offers-benefits"
      className="py-24 md:py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Mutual Fund Offers & Policies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Client benefits and{' '}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                advisory policies.
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Explore active mutual fund offers, tax-efficiency benefits, and standing portfolio policies
              structured for disciplined investors.
            </p>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all self-start md:self-auto shrink-0"
          >
            <span>Explore All Offers & Benefits</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleOffers.map((offer, idx) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              index={idx}
              onSelect={setSelectedOffer}
            />
          ))}
        </div>
      </div>

      <OfferDetailModal
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
      />
    </section>
  );
}

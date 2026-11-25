'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import {
  FUND_CATEGORIES,
  OFFER_TYPES,
  type MutualFundOffer,
} from '@/types/offer';
import { getAssetPath } from '@/lib/utils';
import OfferCard from '@/components/OfferCard';
import OfferDetailModal from '@/components/OfferDetailModal';

interface OffersCatalogClientProps {
  initialOffers: MutualFundOffer[];
}

export default function OffersCatalogClient({
  initialOffers,
}: OffersCatalogClientProps) {
  const [offers, setOffers] = useState<MutualFundOffer[]>(initialOffers);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOffer, setSelectedOffer] = useState<MutualFundOffer | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(getAssetPath('/api/offers'), { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { offers?: MutualFundOffer[] } | null) => {
        if (!cancelled && data?.offers) {
          setOffers(data.offers);
        }
      })
      .catch(() => {
        // Keep initial SSR offers if fetch fails
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredOffers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return offers.filter((offer) => {
      if (selectedType !== 'All' && offer.offerType !== selectedType) {
        return false;
      }
      if (selectedCategory !== 'All' && offer.fundCategory !== selectedCategory) {
        return false;
      }
      if (!query) return true;

      return (
        offer.title.toLowerCase().includes(query) ||
        offer.summary.toLowerCase().includes(query) ||
        offer.badgeText.toLowerCase().includes(query) ||
        offer.fundCategory.toLowerCase().includes(query) ||
        offer.highlights.some((h) => h.toLowerCase().includes(query))
      );
    });
  }, [offers, selectedType, selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedType('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[550px] h-[550px] bg-emerald-300/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Hero Header */}
        <section className="max-w-4xl pt-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Mutual Fund Offers, Benefits & Policies
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06] mb-6">
              Structured benefits for{' '}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                every mutual fund goal.
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              Browse current mutual fund offers, investor benefits, and standing advisory policies.
              Select any card to inspect full eligibility criteria, minimum allocation, and policy terms.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Showing {filteredOffers.length} of {offers.length} active client policies & offers</span>
            </div>
          </motion.div>
        </section>

        {/* Filter & Search Bar */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm mb-10 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by offer, tax benefit, SIP, gold, treasury..."
                aria-label="Search mutual fund offers and policies"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            {/* Type Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Type:
              </span>
              {['All', ...OFFER_TYPES].map((type) => {
                const active = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              Category:
            </span>
            {['All', ...FUND_CATEGORIES].map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950'
                      : 'bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Offers Grid */}
        {filteredOffers.length > 0 ? (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer, idx) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                index={idx}
                onSelect={setSelectedOffer}
              />
            ))}
          </section>
        ) : (
          <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 text-center">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              No matching offers or policies found
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Try clearing your search keyword or switching category filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </section>
        )}
      </div>

      <OfferDetailModal
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
      />
    </main>
  );
}

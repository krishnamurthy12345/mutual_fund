'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
  Gift,
  ShieldCheck,
  FileText,
  Calendar,
} from 'lucide-react';
import type { MutualFundOffer, OfferType } from '@/types/offer';

interface OfferCardProps {
  offer: MutualFundOffer;
  index?: number;
  onSelect: (offer: MutualFundOffer) => void;
}

const OFFER_TYPE_META: Record<
  OfferType,
  { icon: typeof Gift; pillClass: string }
> = {
  Offer: {
    icon: Gift,
    pillClass:
      'bg-emerald-600 text-white border-emerald-600',
  },
  Benefit: {
    icon: ShieldCheck,
    pillClass:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
  },
  Policy: {
    icon: FileText,
    pillClass:
      'bg-slate-900 text-white border-slate-900 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700',
  },
};

export default function OfferCard({ offer, index = 0, onSelect }: OfferCardProps) {
  const meta = OFFER_TYPE_META[offer.offerType] || OFFER_TYPE_META.Benefit;
  const TypeIcon = meta.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.08, 0.32), duration: 0.45 }}
      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
    >
      <div>
        {/* Top Row: Classification + Highlight Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${meta.pillClass}`}
          >
            <TypeIcon className="w-3.5 h-3.5" />
            {offer.offerType}
          </span>

          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
            {offer.badgeText}
          </span>
        </div>

        {/* Fund Category */}
        <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
          {offer.fundCategory}
        </p>

        {/* Title & Summary */}
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
          {offer.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {offer.summary}
        </p>

        {/* Key Highlights */}
        {offer.highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {offer.highlights.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Meta + Details Trigger */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="truncate max-w-[160px]">{offer.validUntil}</span>
        </span>

        <button
          type="button"
          onClick={() => onSelect(offer)}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
}

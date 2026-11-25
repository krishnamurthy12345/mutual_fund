'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  IndianRupee,
  Users,
  Tag,
} from 'lucide-react';
import type { MutualFundOffer } from '@/types/offer';

interface OfferDetailModalProps {
  offer: MutualFundOffer | null;
  onClose: () => void;
}

export default function OfferDetailModal({ offer, onClose }: OfferDetailModalProps) {
  useEffect(() => {
    if (!offer) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [offer, onClose]);

  return (
    <AnimatePresence>
      {offer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close policy details"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                <Tag className="w-3 h-3" />
                {offer.offerType}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                {offer.fundCategory}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {offer.badgeText}
              </span>
            </div>

            <h3
              id="offer-modal-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3"
            >
              {offer.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {offer.details || offer.summary}
            </p>

            {/* Key Parameters Grid */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <Users className="w-3.5 h-3.5" />
                  Eligibility
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {offer.eligibility}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  Min. Allocation
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {offer.minInvestment}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Validity
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {offer.validUntil}
                </p>
              </div>
            </div>

            {offer.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Key Client Benefits
                </h4>
                <ul className="space-y-2.5">
                  {offer.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Mutual Fund investments are subject to market risks. Policy terms and scheme eligibility
                are governed by respective AMC Scheme Information Documents (SID) and SEBI/AMFI guidelines.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

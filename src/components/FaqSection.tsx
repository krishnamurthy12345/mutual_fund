'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who do you typically advise?',
      answer:
        'Families, salaried professionals, business founders, and NRIs facing important capital or investment decisions. Whether constructing a multi-year SIP portfolio or deploying corporate treasury surpluses, we help clients build durable mutual fund balance sheets.',
    },
    {
      question: 'What makes an advisory engagement a good fit?',
      answer:
        'A long-term investment orientation (typically 3 to 10+ years), a meaningful financial question or milestone, and a shared commitment to disciplined asset allocation and transparent, low-cost portfolio architecture.',
    },
    {
      question: 'What areas of mutual fund planning can we discuss?',
      answer:
        'Core equity compounding (SIPs), dynamic multi-asset allocation (equity + gold/silver + fixed income), corporate cash and treasury management (liquid & arbitrage funds), portfolio health checks (reducing 20-fund overlaps), and tax-efficient systematic withdrawal plans (SWP).',
    },
    {
      question: 'How does an initial conversation work?',
      answer:
        'A private, focused 30-minute discussion — in person at Coimbatore or virtually worldwide — to understand the context of your capital, evaluate your objectives, and determine whether there is a meaningful mutual fit. No sales pressure, no account statements required upfront.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT SIDE: PHOTO CARD WITH CREDIBILITY BADGE */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer offset hairline contour matching theme */}
            <div className="absolute inset-0 border border-emerald-300 dark:border-emerald-500/30 rounded-t-[200px] rounded-b-2xl translate-x-3 translate-y-3 pointer-events-none" />

            {/* Arch-topped media frame */}
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-t-[190px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800 bg-slate-900 group">
              <Image
                src={getAssetPath("/images/family-advisory.webp")}
                alt="Indian family and adviser discussing long-term financial goals"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Stat Overlay at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono leading-none">
                  20+
                </span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-snug">
                  Years of perspective across mutual fund cycles and wealth compounding
                </span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: FAQ LIST */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Frequently Asked
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Before we{' '}
                <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                  begin.
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
                Essential clarity on our mutual fund advisory philosophy, investor profiles, and engagement process.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 pt-4"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

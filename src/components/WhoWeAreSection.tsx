'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function WhoWeAreSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================= */}
          {/* LEFT SIDE: 3-IMAGE COMPOSITE COLLAGE (MATCHING IMAGE 1) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Background decorative glow */}
            <div className="absolute -inset-4 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[500px] h-[520px] sm:h-[580px] md:h-[620px] grid grid-cols-2 grid-rows-2 gap-3.5 p-2">
              {/* TOP CIRCLE PHOTO (crop-a): Strategy / advisory meeting */}
              <div className="relative rounded-full overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-slate-900 group">
                <Image
                  src="/images/family-advisory.webp"
                  alt="Business strategy and mutual fund advisory discussion"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* RIGHT VERTICAL PILL (crop-b): Principal Advisor (ABC Founder) */}
              <div className="row-span-2 col-start-2 relative rounded-[140px] sm:rounded-[180px] md:rounded-[200px] overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800 bg-slate-900 group">
                <Image
                  src=""
                  alt="ABC Founder - Principal Mutual Fund Advisor"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Subtle Name Pill on main portrait */}
                <div className="absolute bottom-6 left-4 right-4 text-center">
                  <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-200 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                    ABC Founder
                  </span>
                </div>
              </div>

              {/* BOTTOM CIRCLE PHOTO (crop-c): Client Consultation */}
              <div className="relative rounded-full overflow-hidden shadow-xl border-2 border-white dark:border-slate-800 bg-slate-900 group">
                <Image
                  src="/images/consultation.webp"
                  alt="Private financial consultation session with Indian clients"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* FLOATING SPARK BADGE AT INTERSECTION (✦) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-900 rounded-full shadow-2xl border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 z-10 animate-pulse">
                ✦
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: EDITORIAL CONTENT (MATCHING IMAGE 1) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-7"
          >
            {/* Pill Tag */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-900 text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:border dark:border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Who We Are
              </span>
            </div>

            {/* Display Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Where experience meets{' '}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                strategic clarity.
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              ABC Mutual Fund is a financial advisory practice helping families, salaried professionals,
              and business founders make consequential capital decisions through disciplined mutual fund compounding.
            </p>

            {/* Two Points Cards (01 & 02) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Point 01 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all">
                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 block mb-2">
                  01
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Capital focused
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Clear-eyed thinking across risk, fund pedigree, and long-term downside value.
                </p>
              </div>

              {/* Point 02 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all">
                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 block mb-2">
                  02
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Built to endure
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Governance and systematic execution designed for lasting compounding outcomes.
                </p>
              </div>
            </div>

            {/* Dark Pill Band (✓ Capital discipline ✓ Trusted partnership ✓ Long-term stewardship) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-200 dark:bg-slate-950 dark:border dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-medium shadow-md">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Capital discipline
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Trusted partnership
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Long-term stewardship
              </span>
            </div>

            {/* Explore the focus CTA (Pill with circular arrow) */}
            <div className="pt-2">
              <Link
                href="/focus"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider pl-6 pr-2.5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 group"
              >
                <span>Explore the focus</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-emerald-700 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

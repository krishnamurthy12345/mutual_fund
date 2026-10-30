'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  ShieldCheck,
  Coins,
  RefreshCw,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export default function FocusPage() {
  const frameworks = [
    {
      number: '01',
      title: 'Wealth is a compounding system.',
      desc: 'Begin with financial freedom, family milestones, time horizons, and the lifestyle your money needs to support.',
    },
    {
      number: '02',
      title: 'Clarity beats complexity.',
      desc: 'Good mutual fund advisory is understandable, disciplined, transparent, and actionable — free from jargon and hype.',
    },
    {
      number: '03',
      title: 'Asset allocation drives outcomes.',
      desc: '90% of return stability comes from the right asset mix (Equity + Debt + Gold) rather than guessing tomorrow’s market top.',
    },
    {
      number: '04',
      title: 'Investor behavior compounds.',
      desc: 'Patience and avoiding emotional panics during market downturns matter far more than chasing the latest high-risk trend.',
    },
    {
      number: '05',
      title: 'Build across market cycles.',
      desc: 'Design portfolios that survive black swan corrections, protect capital, and harvest upside during Indian economic expansion.',
    },
  ];

  const focusAreas = [
    {
      number: '01',
      title: 'Core Equity & Systematic SIP Architecture',
      subtitle: 'Disciplined compounding across market cycles',
      desc: 'A coherent long-term equity strategy spanning Large-Cap stability, Flexi-Cap adaptability, and high-conviction Mid/Small-Cap growth engines. Designed for 7 to 15+ year wealth accumulation.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      tags: ['Systematic Investment Plans (SIP)', 'Rolling Return Analysis', 'Downside Capture Ratio', 'Rupee-Cost Averaging'],
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '02',
      title: 'Dynamic Multi-Asset & Hedging Strategies',
      subtitle: 'Drawdown protection through non-correlated assets',
      desc: 'Engineered for investors who want equity participation without violent drawdowns. Blending equity mutual funds with physical gold/silver ETFs, sovereign bonds, and arbitrage funds to cushion volatility.',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      tags: ['Gold & Silver ETFs', 'Arbitrage Allocation', 'Capital Preservation', 'Volatility Dampening'],
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '03',
      title: 'Corporate & Treasury Cash Management',
      subtitle: 'Optimizing corporate surpluses with liquidity',
      desc: 'Professional deployment of business reserves, family liquid assets, and real estate proceeds into overnight, liquid, and ultra-short duration mutual funds. Superior cash yield with instant liquidity.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tags: ['Liquid & Ultra-Short Funds', 'Corporate Surplus', 'T+1 Liquidity', 'Credit Quality Screening'],
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '04',
      title: 'Cycle Rebalancing & Tax Harvesting',
      subtitle: 'Executing systematic transitions and withdrawals',
      desc: 'Disciplined annual rebalancing that trims equity profits during bull run excesses and shifts into fixed income. Structured Systematic Transfer Plans (STP) and tax-efficient Systematic Withdrawal Plans (SWP).',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
      tags: ['Systematic Transfer Plans (STP)', 'Annual Portfolio Realignment', 'Tax-Efficient SWP', 'LTCG Optimization'],
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-24 relative overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND AMBIENT GLOWS (MATCHING CONTACT PAGE) */}
      {/* ========================================================= */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[550px] h-[550px] bg-emerald-300/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* ========================================================= */}
        {/* HERO SECTION: LEFT CONTENT + RIGHT ARCH IMAGE (IMAGE 2) */}
        {/* ========================================================= */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pt-4">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Tag */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 text-white animate-pulse" />
                Strategic Focus
              </span>
            </div>

            {/* Display Heading matching Image 2 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.02]">
              Where We
              <br />
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                focus.
              </span>
            </h1>

            {/* Narrative description matching Image 2 */}
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal max-w-xl">
              Four areas where capital, judgment and execution matter most — and where an independent, disciplined view earns its keep.
            </p>

            {/* Checkmark List */}
            <div className="pt-2 space-y-3 max-w-xl">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Core Equity SIPs for multi-year compounding growth</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Non-correlated Multi-Asset hedging (Gold/Silver ETFs + Fixed Income)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Corporate treasury surplus deployment in liquid and arbitrage funds</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <span>Book Portfolio Discussion</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="#strategic-pillars"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-700 border border-slate-200 dark:border-slate-700 px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Explore 4 Pillars</span>
                <span>↓</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side Arch Portal Media (EXACT IMAGE 2 REPLICATION) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Outer offset hairline contour matching Image 2 */}
            <div className="absolute inset-0 max-w-[480px] mx-auto border border-emerald-300 dark:border-emerald-500/30 rounded-t-[230px] rounded-b-2xl translate-x-3 translate-y-3 pointer-events-none" />

            {/* Arch-topped media frame */}
            <div className="relative w-full max-w-[480px] h-[400px] sm:h-[460px] md:h-[490px] rounded-t-[220px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800 bg-slate-900 group">
              <Image
                src="/images/discussion.webp"
                alt="Strategic financial advisory meeting and portfolio discussion"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              {/* Bottom Label Badge */}
              <div className="absolute bottom-5 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                  Strategic Consultation
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-snug">
                  Structuring goal-aligned mutual fund portfolios and corporate cash allocations.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* FIVE IDEAS WORTH RETURNING TO */}
        {/* ========================================================= */}
        <section className="mb-28 p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-emerald-900/5">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
              Philosophical Anchor
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Five frameworks worth returning to.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
              Practical principles for families, professionals, and business owners building enduring wealth
              through mutual fund discipline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-3 group-hover:text-emerald-700">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Inquire Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 block mb-2">
                  Advisory Alignment
                </span>
                <h3 className="text-lg font-bold mb-2">
                  Have an existing portfolio?
                </h3>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  We review fund overlaps, expense ratios, and historical risk capture to optimize compounding.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:text-white pt-4 transition-colors"
              >
                <span>Request Portfolio Review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FOUR STRATEGIC MUTUAL FUND FOCUS PILLARS WITH IMAGES */}
        {/* ========================================================= */}
        <section id="strategic-pillars" className="mb-28 scroll-mt-28">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
              Advisory Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Perspective for capital at consequential moments.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base mt-4 leading-relaxed">
              Selective, senior-level counsel shaped around your financial context, tax alignment, and durable compounding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Header with Number & Icon */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Number Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shadow-md">
                        {area.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      {area.icon}
                    </div>

                    {/* Subtitle tag on image */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                        {area.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {area.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ASK FIRST: WHAT DOES THIS MONEY NEED TO DO? */}
        {/* ========================================================= */}
        <section className="mb-24 p-8 md:p-16 rounded-3xl bg-emerald-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-3">
              Ask First
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              What does this capital need to do?
            </h2>

            <p className="text-emerald-100/75 text-base md:text-lg leading-relaxed mb-8 font-light">
              The useful question before asking where to invest. Are you protecting corporate liquidity,
              planning a generational milestone, building retirement freedom, or hedging against volatility?
              Framing the context turns raw market risk into manageable strategy.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20"
            >
              <span>Schedule a Considered Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM QUOTE BAND (MATCHING CONTACT PAGE) */}
        {/* ========================================================= */}
        <section className="mt-20 pt-16 border-t border-slate-200 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-700 max-w-3xl mx-auto leading-relaxed">
            "Asset allocation and behavioral discipline compound far more reliably than trying to predict the next market top."
          </blockquote>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
            ABC Mutual Fund • Wealth & Investment Advisory
          </span>
        </section>
      </div>
    </main>
  );
}

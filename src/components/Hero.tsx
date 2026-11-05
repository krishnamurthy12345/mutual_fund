'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, ArrowDownRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-slate-500 text-white flex flex-col justify-between"
    >
      {/* Background Video */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={getAssetPath("/videos/overlay.mp4")} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark / Gradient Overlays */}
      <div className="absolute inset-0 bg-slate-950/65 z-[1] pointer-events-none" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/95" />

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 sm:pt-36 md:pt-40 pb-16 flex flex-col justify-center flex-grow"
      >
        <div className="max-w-4xl">
          {/* Ticker / Kicker Ribbon matching vinumammen.com style */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>● OPPORTUNITY &nbsp; ● RISK &nbsp; ● COMPOUNDING</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.02] mb-6">
            See the Opportunity.
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent font-serif italic font-normal">
              Build the Advantage.
            </span>
          </h1>

          {/* Subtitle Dash Line */}
          <p className="text-emerald-300 text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase mb-6">
            — Systematic Equity — Multi-Asset — Treasury — Generational Growth —
          </p>

          {/* Narrative Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
            Ideas and disciplined frameworks on spotting mutual fund opportunities, managing volatility,
            and building portfolios that compound across market cycles.
          </p>

          {/* Action Links (Matching vinumammen.com arrows) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <Link
              href="/focus"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-7 py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/25"
            >
              <span>See the Strategic Focus</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-xl backdrop-blur-md transition-all"
            >
              <span>Build the Advantage</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quantitative Proof Points Bar (Bottom Ribbon) */}
      <div className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
              20+
            </span>
            <span className="leading-snug text-slate-300">
              Years in financial services & market perspective
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
              04
            </span>
            <span className="leading-snug text-slate-300">
              Strategic mutual fund allocation disciplines
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <span className="leading-snug text-slate-300">
              100% AMFI & SEBI-Aligned Advisory Framework
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

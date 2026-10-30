'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, ShieldCheck, Coins, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function StrategicFocusPreview() {
  const pillars = [
    {
      number: '01',
      title: 'Core Equity & Systematic SIP',
      subtitle: 'Disciplined compounding over 7–15 years',
      desc: 'Systematic investment strategies across Large, Mid, and Flexi-Cap mutual funds designed for long-term purchasing power expansion.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      tags: ['Goal-Based SIPs', 'Rolling Alpha', 'Rupee-Cost Averaging'],
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '02',
      title: 'Dynamic Multi-Asset & Hedging',
      subtitle: 'Drawdown cushion through non-correlated assets',
      desc: 'Portfolio architecture combining equity funds with physical gold/silver ETFs and debt to protect against market corrections.',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      tags: ['Gold/Silver ETFs', 'Drawdown Cushion', 'Hybrid Allocation'],
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '03',
      title: 'Corporate & Treasury Liquidity',
      subtitle: 'Preserving business surplus with tax efficiency',
      desc: 'Deploying operational surplus and reserves into liquid, ultra-short, and arbitrage mutual funds for T+1 cash access.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tags: ['Corporate Reserves', 'Liquid Funds', 'Arbitrage Spread'],
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '04',
      title: 'Cycle Rebalancing & Tax Harvesting',
      subtitle: 'Systematic transfer and structured withdrawals',
      desc: 'Periodic reviews, Systematic Transfer Plans (STP), and tax-efficient Systematic Withdrawal Plans (SWP) across life milestones.',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
      tags: ['Annual Rebalancing', 'STP Execution', 'Tax-Smart SWP'],
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Strategic Focus
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Perspective for capital at{' '}
              <span className="font-serif italic font-normal text-emerald-600">
                consequential moments.
              </span>
            </h2>
          </div>

          <Link
            href="/focus"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-700 border-b border-emerald-400 pb-1 transition-colors self-start md:self-auto"
          >
            <span>View All Focus Areas</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image Header with Number Badge & Icon */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Number Badge Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-emerald-700 shadow-md">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Icon Top Right */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-emerald-600 shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {pillar.icon}
                  </div>

                  {/* Title overlay at bottom of image */}
                  <div className="absolute bottom-3 left-5 right-5">
                    <p className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200"
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
      </div>
    </section>
  );
}

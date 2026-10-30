'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function SelectedThinkingPreview() {
  const thoughts = [
    {
      category: 'THE COMPOUNDING LENS',
      title: 'The Real Cost of Missing the 10 Best Market Days in a Decade',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'Market timing is the most expensive mistake in mutual funds. Historical NSE data demonstrates why staying invested in SIPs through downturns beats trying to jump in and out.',
    },
    {
      category: 'MULTI-ASSET & DOWNSIDE PROTECTION',
      title: 'Why Multi-Asset Funds Outperformed Pure Equity During Volatility',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'Holding pure equity leaves portfolios vulnerable to 20%+ cyclical pullbacks. How adding physical Gold and Fixed Income creates asymmetric return stability.',
    },
    {
      category: 'CORPORATE TREASURY & LIQUIDITY',
      title: 'Corporate Surpluses in Liquid Funds vs. Traditional Bank FDs',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'Leaving business working capital in current accounts drains purchasing power against inflation. Why modern enterprises use liquid and arbitrage funds for T+1 cash access.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Selected Thinking
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ideas for the{' '}
              <span className="font-serif italic font-normal text-emerald-600">
                long view.
              </span>
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Concise perspectives on decisions that shape mutual fund compounding, asset allocation, and capital preservation.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-700 border-b border-emerald-400 pb-1 transition-colors self-start md:self-auto"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {thoughts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image Header with Zoom Effect */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md border border-slate-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Read Time Top Right */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] text-white/90 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1 font-medium shadow-sm">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors"
                  >
                    <span>Read perspective</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

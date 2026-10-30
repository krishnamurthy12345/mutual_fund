'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowUpRight, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [investmentPeriod, setInvestmentPeriod] = useState(12); // years
  const [expectedRate, setExpectedRate] = useState(13); // %

  const calculateSip = () => {
    const monthlyRate = expectedRate / 12 / 100;
    const months = investmentPeriod * 12;
    const totalInvested = monthlyInvestment * months;

    // SIP Formula: P * [((1 + i)^n - 1) / i] * (1 + i)
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      futureValue: Math.round(futureValue),
    };
  };

  const results = calculateSip();

  return (
    <section className="py-28 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Compounding Growth Visualizer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Systematic Investment Plan{' '}
            <span className="font-serif italic font-normal text-emerald-600">
              (SIP) Calculator
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            Estimate how consistent monthly mutual fund investments turn rupee-cost averaging and compounding
            into generational wealth over long horizons.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-emerald-900/5">
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Monthly SIP Amount */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                  <span>Monthly SIP Amount</span>
                </label>
                <span className="text-base sm:text-lg font-bold text-emerald-700 bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  ₹{monthlyInvestment.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={250000}
                step={1000}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>₹1,000</span>
                <span>₹1,00,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            {/* Time Horizon */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                  Time Horizon (Years)
                </label>
                <span className="text-base sm:text-lg font-bold text-emerald-700 bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  {investmentPeriod} Years
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Expected Return Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                  Expected Return (CAGR)
                </label>
                <span className="text-base sm:text-lg font-bold text-emerald-700 bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  {expectedRate}%
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={20}
                step={0.5}
                value={expectedRate}
                onChange={(e) => setExpectedRate(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>6% (Conservative)</span>
                <span>12% (Balanced)</span>
                <span>20% (Aggressive)</span>
              </div>
            </div>

            {/* Credibility note */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Based on historical compound interest modeling. Actual mutual fund returns depend on asset class allocation and market cycles.
              </span>
            </div>
          </div>

          {/* Results Display (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="border-b border-emerald-800/60 pb-4">
                <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">
                  Total Invested Capital
                </span>
                <p className="text-2xl font-bold text-white mt-1">
                  ₹{results.totalInvested.toLocaleString('en-IN')}
                </p>
              </div>

              <div className="border-b border-emerald-800/60 pb-4">
                <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">
                  Estimated Compounding Gains
                </span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">
                  +₹{results.estimatedReturns.toLocaleString('en-IN')}
                </p>
              </div>

              <div>
                <span className="text-xs text-emerald-300 uppercase tracking-widest font-bold block mb-1">
                  Expected Future Corpus
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  ₹{results.futureValue.toLocaleString('en-IN')}
                </p>
                <span className="inline-block mt-2 text-[11px] text-emerald-200/70">
                  {investmentPeriod} Years of Systematic Execution
                </span>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <Link
                href="/contact"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Structure This SIP Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

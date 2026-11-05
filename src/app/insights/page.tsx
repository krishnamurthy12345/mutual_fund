'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  X,
  CheckCircle2,
} from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  readTime: string;
  image: string;
  summary: string;
  fullContent: string[];
}

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: '1',
      category: 'THE COMPOUNDING LENS',
      title: 'The Real Cost of Missing the 10 Best Market Days in a Decade',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      summary:
        'Market timing is the most expensive hobby in finance. Historical NSE data confirms that investors who try to jump in and out of equity mutual funds consistently destroy compounding returns compared to disciplined SIP holders.',
      fullContent: [
        'Over any 10-year rolling period in Indian capital markets, the vast majority of cumulative gains are concentrated in a handful of trading sessions — often fewer than 10 to 15 days.',
        'Investors who pull out during market drawdowns almost invariably miss the swift, explosive initial recovery days. For example, staying invested in an index or diversified mutual fund over a decade delivered double-digit annual returns; missing merely the 10 best days cut that return in half.',
        'Systematic Investment Plans (SIP) solve this psychological trap. By mechanically acquiring more mutual fund units when valuations are depressed, SIPs turn market corrections into future compounding engines.',
        'The takeaway: Time in the market always compounds more reliably than timing the market. Stick to your allocation framework regardless of short-term noise.',
      ],
    },
    {
      id: '2',
      category: 'MULTI-ASSET & DOWNSIDE PROTECTION',
      title: 'Why Multi-Asset Funds Outperformed Pure Equity During Global Volatility',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      summary:
        'When global rate cycles and geopolitical tensions spike, holding only pure equity leaves portfolios vulnerable to steep drawdowns. How multi-asset mutual funds combine Gold, Debt, and Equities to dampen portfolio variance.',
      fullContent: [
        'Equity is an unmatched wealth accumulator over 10 to 15 years, but the path is rarely smooth. Drawdowns of 15% to 25% happen periodically, often triggering panic selling among retail and HNI investors alike.',
        'Multi-asset allocation funds address this through non-correlated asset classes. When equity markets experience sharp corrections, sovereign fixed income provides predictable yield, while physical gold and silver frequently act as flight-to-safety hedges.',
        'Dynamic fund managers rebalance automatically under internal mandate rules: trimming equity when price-to-earnings multiples enter euphoric territory and deploying capital into undervalued debt or precious metals.',
        'For conservative HNIs, corporate treasuries, and investors nearing life milestones, multi-asset frameworks provide superior sleep-adjusted compounding.',
      ],
    },
    {
      id: '3',
      category: 'CORPORATE TREASURY & LIQUIDITY',
      title: 'Corporate Surpluses in Liquid & Arbitrage Funds vs. Traditional Bank FDs',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      summary:
        'Idle cash sitting in traditional current accounts or fixed deposits suffers from taxation inefficiency and lock-in penalties. Why modern CFOs and business owners utilize liquid and arbitrage mutual funds for working capital.',
      fullContent: [
        'Businesses frequently hold substantial liquidity reserves for operational contingencies, advance tax payments, GST obligations, and capital expenditures. Leaving this liquidity in low-yielding current accounts erodes purchasing power against inflation.',
        'Liquid mutual funds invest strictly in short-term sovereign and AAA commercial paper with residual maturities up to 91 days. This virtually eliminates interest rate duration risk while maintaining seamless T+1 redemption liquidity.',
        'Furthermore, for individuals and private business treasuries, equity arbitrage funds offer equity taxation benefits with low volatility similar to liquid funds, as their returns are derived from the cash-futures spread without naked market directional risk.',
        'Disciplined treasury management transforms idle cash into an active, low-risk balance sheet contributor.',
      ],
    },
    {
      id: '4',
      category: 'SIP PSYCHOLOGY & CORRECTIONS',
      title: 'The Psychology of Bear Markets: Why Increasing SIPs During Dips Creates Generational Alpha',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      summary:
        'When market sentiment turns pessimistic, human instinct screams to pause investments. The mathematical reality is that bear markets are mutual fund accumulation sales.',
      fullContent: [
        'Behavioral finance reveals that the pain of a 10% loss feels twice as intense as the joy of a 10% gain. In bear markets, news headlines propagate fear, prompting inexperienced investors to stop or cancel their SIP mandates.',
        'In reality, when Net Asset Values (NAV) fall, each monthly SIP installment purchases significantly more units. When the market eventually rotates into a bull phase, those accumulated low-cost units create exponential compounding velocity.',
        'Sophisticated investors even execute "Top-Up SIPs" or systematic transfer tranches during severe market corrections, deliberately acquiring equities at favorable risk-reward multiples.',
        'Your mutual fund distributor should serve as an emotional shock absorber, ensuring you execute the plan when emotions urge you to abandon it.',
      ],
    },
    {
      id: '5',
      category: 'TAXATION & HARVESTING',
      title: 'Navigating New Mutual Fund Tax Rules: How to Structure Long-Term Growth',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      summary:
        'Recent Indian budget amendments have changed the taxation framework for equity, debt, and hybrid mutual funds. How strategic holding periods and SWPs optimize post-tax returns.',
      fullContent: [
        'Understanding taxation is not about dodging obligations; it is about structuring holding periods and redemption mechanisms to retain maximum compounding velocity.',
        'For equity mutual funds held longer than 12 months, long-term capital gains (LTCG) above the statutory threshold are taxed at favorable rates compared to ordinary business income brackets. Annual tax-gain harvesting can also be systematically evaluated.',
        'For investors requiring periodic cash flows (such as retirees or family trusts), Systematic Withdrawal Plans (SWP) are far more tax-efficient than traditional dividend payouts, because each SWP withdrawal consists of both principal and gain portions rather than 100% taxable dividend income.',
        'A comprehensive mutual fund plan must always integrate taxation architecture from day one.',
      ],
    },
    {
      id: '6',
      category: 'PORTFOLIO ARCHITECTURE',
      title: 'How Many Mutual Funds Are Too Many? Solving the 20-Fund Overlap Dilemma',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      summary:
        'Many investors accumulate 15 to 25 mutual funds across various apps and recommendations, creating an unwieldy, closet-indexed portfolio. Why 4 to 6 focused funds consistently beat over-diversification.',
      fullContent: [
        'When an investor owns 20 different equity mutual funds, an analysis of underlying portfolios almost always reveals massive stock overlap. Five different funds may all hold 8% in the same top banking, IT, and conglomerate stocks.',
        'Excessive diversification eliminates alpha while multiplying tracking errors and expense ratios. You end up owning the entire index at higher active management fees.',
        'An institutional mutual fund portfolio requires crisp allocation buckets: One core Large/Flexi-Cap fund, one disciplined Mid-Cap engine, one tactical Multi-Asset or Thematic fund, and a dedicated Debt/Arbitrage reserve.',
        'Periodic portfolio pruning and consolidation restores clarity, accountability, and performance tracking.',
      ],
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
                src="/images/insight-family.webp"
                alt="Generational wealth planning and mutual fund insights"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              {/* Bottom Label Badge */}
              <div className="absolute bottom-5 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                  Thought Leadership
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-snug">
                  Clarity over noise — disciplined observations on market cycles, compounding, and capital allocation.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Right Side Arch Portal Media (IMAGE 2 STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Tag */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Insights · The Long View
              </span>
            </div>

            {/* Display Heading matching Image 2 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02]">
              No Noise.
              <br />
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                One useful idea at a time.
              </span>
            </h1>

            {/* Narrative description */}
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal max-w-xl">
              Indian-first perspectives from a SEBI-aligned mutual fund practice that has observed capital decisions
              and market cycles play out across two decades. No hot tips. No manufactured urgency.
            </p>

            {/* Checkmark List */}
            <div className="pt-2 space-y-3 max-w-xl">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Mathematical proof on why market timing destroys compounding returns</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Multi-asset allocation frameworks for sleep-adjusted portfolio growth</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Taxation architecture and portfolio pruning to eliminate fund overlap</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <a
                href="#articles-grid"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <span>Explore 6 Perspectives</span>
                <span>↓</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-700 border border-slate-200 dark:border-slate-700 px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Discuss With ABC founder</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* EDITORIAL ARTICLES GRID WITH IMAGES */}
        {/* ========================================================= */}
        <section id="articles-grid" className="scroll-mt-28 mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
              Curated Analyses
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Selected thinking for mutual fund investors.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
              Explore in-depth articles on SIP discipline, dynamic asset hedging, treasury liquidity, and tax optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Article Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md border border-slate-200 shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Read Time */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[11px] text-white/90 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1 font-medium shadow-sm">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Action Link Footer */}
                <div className="p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(item)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 py-1 transition-colors cursor-pointer"
                    >
                      <span>Read Perspective</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM CONSIDERED CONVERSATION BANNER */}
        {/* ========================================================= */}
        <section className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Next Step
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Have a mutual fund decision in front of you?
            </h3>
            <p className="text-emerald-100/75 text-sm leading-relaxed font-light">
              Bring your questions to a private, focused discussion to understand whether our disciplined
              asset allocation approach aligns with your long-term goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20"
          >
            <span>Request a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM QUOTE BAND (MATCHING CONTACT PAGE) */}
        {/* ========================================================= */}
        <section className="mt-20 pt-16 border-t border-slate-200 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-700 max-w-3xl mx-auto leading-relaxed">
            "Clarity over noise — disciplined observations on market cycles, compounding, and capital allocation."
          </blockquote>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
            ABC Mutual Fund • Wealth & Investment Advisory
          </span>
        </section>
      </div>

      {/* ========================================================= */}
      {/* ARTICLE DETAIL MODAL WITH IMAGE */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl relative overflow-hidden"
            >
              {/* Modal Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Close Button Top Right */}
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close modal"
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-emerald-600 flex items-center justify-center border border-white/20 transition-colors shadow-lg z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Title & Category over image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300 block mb-1.5">
                    {selectedArticle.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                  <span>{selectedArticle.readTime} • ABC Mutual Fund Perspectives</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Mutual Fund Advisory</span>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  {selectedArticle.fullContent.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Want to apply this strategy to your portfolio?
                  </span>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <span>Discuss With ABC founder</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

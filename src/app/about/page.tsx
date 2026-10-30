'use client';

import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import {
  TrendingUp,
  ShieldCheck,
  Globe,
  Users,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const offeringsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: offeringsProgress } = useScroll({
    target: offeringsRef,
    offset: ['start 80%', 'end 80%'],
  });

  const [activeTab, setActiveTab] = useState<'serve' | 'network'>('serve');

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20 relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOWS
      ====================================================== */}

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-emerald-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* ===
            HERO / FOUNDER SECTION
        ====================================================== */}

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 mt-8">

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[32rem]">

              {/* Emerald Offset Border */}
              <div
                className="
                  absolute inset-0
                  border border-emerald-300
                  rounded-t-[190px] rounded-b-2xl
                  translate-x-4 translate-y-4
                  md:translate-x-6 md:translate-y-6
                "
              />

              {/* Image Container */}
              <div
                className="
                  absolute inset-0
                  rounded-t-[180px] rounded-b-2xl
                  overflow-hidden
                  border border-slate-200
                  bg-white
                  shadow-2xl
                  shadow-emerald-900/10
                  group
                "
              >
                <Image
                  src=""
                  alt="ABC Founder"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Light image fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-70" />
              </div>

              {/* Credibility Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="
                  absolute
                  -bottom-6 -left-6
                  md:-bottom-8 md:-left-8
                  bg-white/95
                  backdrop-blur-md
                  p-4 md:p-5
                  rounded-2xl
                  border border-emerald-200
                  shadow-2xl
                  shadow-emerald-900/10
                  flex flex-col
                  items-center
                  justify-center
                  min-w-[150px]
                "
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-emerald-600" />

                  <span className="text-xs font-bold text-slate-900 tracking-wide">
                    SEBI Registered
                  </span>
                </div>

                <div className="w-full h-[1px] bg-slate-200 my-1.5" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-600 font-bold text-center">
                  Mutual Fund & PMS Advisor
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              w-full lg:w-1/2
              flex flex-col
              items-center lg:items-start
              text-center lg:text-left
            "
          >

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-1.5
                rounded-full
                text-xs
                font-semibold
                uppercase
                tracking-widest
                bg-emerald-50
                border border-emerald-200
                text-emerald-700
                mb-6
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              Founder • ABC Mutual Fund
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl md:text-7xl
                font-extrabold
                tracking-tight
                text-slate-900
                mb-6
                leading-tight
              "
            >
              ABC
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-700
                  via-emerald-500
                  to-emerald-400
                  bg-clip-text
                  text-transparent
                  italic
                  font-serif
                "
              >
                Founder.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-xl mb-8">
              Architecting generational wealth from Coimbatore. Specializing
              in high-yield Mutual Funds, Portfolio Management Services (PMS),
              AIF, and disciplined Equity Trading Strategies for business
              owners and high-net-worth individuals.
            </p>

            {/* BNI Leadership */}
            <div
              className="
                mb-8
                p-4
                rounded-xl
                bg-white
                border border-slate-200
                text-xs
                text-slate-600
                flex items-center gap-3
                shadow-sm
              "
            >
              <div
                className="
                  w-8 h-8
                  rounded-lg
                  bg-emerald-50
                  border border-emerald-200
                  flex items-center
                  justify-center
                  text-emerald-700
                  font-bold
                  shrink-0
                "
              >
                BNI
              </div>

              <p className="text-left">
                <strong className="text-slate-900">
                  Secretary / Treasurer
                </strong>{' '}
                at BNI Greater Coimbatore (Phoenix Chapter) & Director at JCI
                Coimbatore Metropolis.
              </p>
            </div>

            {/* Social + CTA */}
            <div className="flex items-center gap-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@belliscapital"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-xl
                  bg-white
                  border border-slate-200
                  flex items-center
                  justify-center
                  text-slate-500
                  hover:text-emerald-600
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  transition-all
                  duration-300
                  shadow-sm
                "
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raja-sekar-8a3a78113"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-xl
                  bg-white
                  border border-slate-200
                  flex items-center
                  justify-center
                  text-slate-500
                  hover:text-emerald-600
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  transition-all
                  duration-300
                  shadow-sm
                "
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="
                  group
                  flex items-center gap-2
                  bg-emerald-600
                  hover:bg-emerald-700
                  text-white
                  font-bold
                  px-6 py-3
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-emerald-600/20
                  hover:shadow-emerald-600/30
                  hover:-translate-y-0.5
                  text-sm
                  ml-2
                "
              >
                Book Consultation

                <ArrowUpRight
                  className="
                    w-4 h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ===
            CORE SERVICES / TIMELINE
        ====================================================== */}

        <div
          ref={offeringsRef}
          className="mb-36 relative max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">

            <span className="text-emerald-600 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
              Core Services
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Investment Vehicles
            </h2>

            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-5" />
          </div>

          <div className="relative max-w-3xl mx-auto py-6">

            {/* Background Line */}
            <div
              className="
                absolute
                left-[28px]
                md:left-1/2
                top-0
                bottom-0
                w-[1px]
                bg-slate-200
                md:-translate-x-1/2
              "
            />

            {/* Animated Green Line */}
            <motion.div
              style={{ scaleY: offeringsProgress }}
              className="
                absolute
                left-[28px]
                md:left-1/2
                top-0
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-emerald-600
                via-emerald-400
                to-emerald-600
                md:-translate-x-1/2
                origin-top
                shadow-[0_0_15px_rgba(16,185,129,0.35)]
              "
            />

            <div className="space-y-16 relative">

              {[
                {
                  title: 'Mutual Funds',
                  desc: 'Systematic compounding strategies aligned with retirement and goal-based milestones.',
                  icon: (
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  ),
                },
                {
                  title: 'PMS Strategies',
                  desc: 'Customized discretionary portfolio management engineered for HNIs and business profits.',
                  icon: (
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  ),
                },
                {
                  title: 'Demat & Equity Trading',
                  desc: 'Direct market execution, disciplined risk management, and stock advisory.',
                  icon: (
                    <Globe className="w-5 h-5 text-emerald-600" />
                  ),
                },
                {
                  title: 'AIF & Private Wealth',
                  desc: 'Category I & II Alternative Investment Funds for institutional investment strategies.',
                  icon: (
                    <Users className="w-5 h-5 text-emerald-600" />
                  ),
                },
              ].map((service, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex items-center md:justify-between group"
                  >

                    {/* Timeline Node */}
                    <div
                      className="
                        absolute
                        left-[28px]
                        md:left-1/2
                        w-4 h-4
                        rounded-full
                        bg-emerald-500
                        md:-translate-x-1/2
                        z-10
                        shadow-[0_0_12px_rgba(16,185,129,0.45)]
                        border-4
                        border-slate-50
                      "
                    />

                    <div
                      className={`
                        ml-16
                        md:ml-0
                        md:w-[45%]
                        ${isEven
                          ? 'md:text-right md:pr-10'
                          : 'md:ml-auto md:pl-10'
                        }
                      `}
                    >
                      <div
                        className="
                          bg-white
                          border border-slate-200
                          p-6
                          rounded-2xl
                          hover:border-emerald-300
                          hover:shadow-xl
                          hover:shadow-emerald-900/5
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                        "
                      >
                        <div
                          className={`
                            w-10 h-10
                            rounded-xl
                            bg-emerald-50
                            border border-emerald-200
                            flex items-center
                            justify-center
                            mb-4
                            ${isEven ? 'md:ml-auto' : ''}
                          `}
                        >
                          {service.icon}
                        </div>

                        <h3 className="text-slate-900 font-semibold text-lg mb-2">
                          {service.title}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===
            CASE STUDIES
        ====================================================== */}

        <div className="mb-36 relative max-w-5xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-emerald-600 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
              Performance
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Client Case Studies
            </h2>

            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Case 1 */}
            <div
              className="
                bg-white
                border border-slate-200
                p-8
                rounded-3xl
                relative
                overflow-hidden
                shadow-sm
                hover:border-emerald-300
                hover:shadow-xl
                hover:shadow-emerald-900/5
                transition-all
                duration-300
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl" />

              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Case Study 01
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                High-Yield Income + Capital Growth
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Structured a ₹2 Crore overall allocation: ₹1 Crore in Mutual
                Funds alongside ₹1 Crore in Motilal AIF Fund while preserving
                liquidity for ongoing construction.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                    Monthly Return
                  </span>

                  <span className="text-xl font-bold text-emerald-600">
                    ₹1.5 Lakhs
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                    AIF Yield
                  </span>

                  <span className="text-xl font-bold text-emerald-700">
                    ₹45 Lakhs
                  </span>
                </div>

              </div>
            </div>

            {/* Case 2 */}
            <div
              className="
                bg-white
                border border-slate-200
                p-8
                rounded-3xl
                relative
                overflow-hidden
                shadow-sm
                hover:border-emerald-300
                hover:shadow-xl
                hover:shadow-emerald-900/5
                transition-all
                duration-300
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl" />

              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Case Study 02
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Aggressive Capital Multiplication
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Disciplined management of a ₹17 Lakhs investment initiated in
                2020. Market timing and asset rotation delivered exponential
                capital compounding.
              </p>

              <div className="pt-4 border-t border-slate-200">

                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                  Total Portfolio Value
                </span>

                <span className="text-2xl font-extrabold text-emerald-600">
                  ₹55 Lakhs
                </span>

                <p className="text-xs text-slate-500 mt-1">
                  Fully funded client home construction in Avinashi.
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* ===
            INTERACTIVE TABS
        ====================================================== */}

        <div
          className="
            max-w-4xl
            mx-auto
            bg-white
            border border-slate-200
            p-8
            rounded-3xl
            shadow-xl
            shadow-emerald-900/5
            mb-20
          "
        >

          {/* Tabs */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              border-b border-slate-200
              pb-6
              mb-8
              gap-3
            "
          >

            <button
              onClick={() => setActiveTab('serve')}
              className={`
                px-6 py-2.5
                rounded-xl
                text-sm
                font-semibold
                transition-all
                ${activeTab === 'serve'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50'
                }
              `}
            >
              01. Who We Serve
            </button>

            <button
              onClick={() => setActiveTab('network')}
              className={`
                px-6 py-2.5
                rounded-xl
                text-sm
                font-semibold
                transition-all
                ${activeTab === 'network'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50'
                }
              `}
            >
              02. Global & Local Leadership
            </button>

          </div>

          {/* Serve Tab */}
          {activeTab === 'serve' ? (

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Targeted Wealth Strategies
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                We craft tailored investment portfolios for{' '}
                <strong className="text-slate-900">
                  Salaried Professionals
                </strong>
                ,{' '}
                <strong className="text-slate-900">
                  Business Owners
                </strong>
                , and{' '}
                <strong className="text-slate-900">
                  NRIs
                </strong>{' '}
                aiming for long-term financial independence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">

                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Goal-Based SIP Allocations
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  High Net Worth Tax Planning
                </div>

              </div>
            </motion.div>

          ) : (

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Network & Credentials
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                Active leader in local and international business chapters
                including{' '}
                <strong className="text-slate-900">
                  BNI Phoenix Chapter
                </strong>{' '}
                (Coimbatore) and{' '}
                <strong className="text-slate-900">
                  JCI Coimbatore Metropolis
                </strong>
                .
              </p>

              <div
                className="
                  p-4
                  rounded-xl
                  bg-emerald-50
                  border border-emerald-200
                  text-xs
                  text-emerald-700
                  font-medium
                "
              >
                Managing international inquiries in collaboration with
                global partners including Enclave Capital (US).
              </div>
            </motion.div>
          )}

        </div>
      </div>

      </main>
  );
}
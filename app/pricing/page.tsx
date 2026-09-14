'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-6xl mx-auto text-studio-text"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            TRANSPARENT ENGAGEMENT TIERS
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Studio Pricing & Rates
          </h1>
          <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
            Predictable, milestone-based pricing for international enterprises
            and Indian regional clients. Zero hidden overhead.
          </p>
        </div>

        {/* Currency Toggle Switch */}
        <div className="border-2 border-studio-text p-1 bg-studio-box flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1.5 transition-colors uppercase ${currency === 'USD' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1.5 transition-colors uppercase ${currency === 'INR' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
          >
            INR (₹)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-8 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              AUDIT & SPRINT
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Architecture Sprint
            </h3>
            <div className="text-3xl font-black mb-4 text-green-brand">
              {currency === 'USD' ? '$2,500' : '₹95,000'}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Ideal for legacy refactoring, performance audits, and Next.js 16
              migration analysis.
            </p>
            <ul className="space-y-3 font-mono text-xs border-t border-studio-text/20 pt-4 mb-8 opacity-90">
              <li>✓ Full Lighthouse & Core Web Vitals audit</li>
              <li>✓ Tailwind v4 & token optimization</li>
              <li>✓ 1-Week delivery turnaround</li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="brutal-button block text-center py-3 text-xs uppercase bg-primary-brand text-white"
          >
            Book Sprint ➔
          </Link>
        </motion.div>

        {/* Tier 2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-8 flex flex-col justify-between border-2 border-primary-brand shadow-[6px_6px_0px_var(--color-brand-primary)]"
        >
          <div>
            <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              MVP Product Build
            </h3>
            <div className="text-3xl font-black mb-4 text-primary-brand">
              {currency === 'USD' ? '$8,500+' : '₹3,50,000+'}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Full-stack application development from architecture to production
              release on Vercel/Cloudflare.
            </p>
            <ul className="space-y-3 font-mono text-xs border-t border-studio-text/20 pt-4 mb-8 opacity-90">
              <li>✓ Next.js 16 App Router & TypeScript</li>
              <li>✓ Custom brutalist UI/UX design system</li>
              <li>✓ E-commerce or mobile bridge integration</li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-black font-bold"
          >
            Initialize Build ➔
          </Link>
        </motion.div>

        {/* Tier 3 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-8 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              ENTERPRISE RETAINER
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Design System Retainer
            </h3>
            <div className="text-3xl font-black mb-4 text-red-brand">
              {currency === 'USD' ? '$5,000' : '₹1,80,000'}{' '}
              <span className="text-xs font-mono opacity-60 font-normal">
                /mo
              </span>
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Dedicated frontend architect capacity for ongoing feature
              development and scaling systems.
            </p>
            <ul className="space-y-3 font-mono text-xs border-t border-studio-text/20 pt-4 mb-8 opacity-90">
              <li>✓ Dedicated senior frontend architect</li>
              <li>✓ Priority bug fixes and speed tuning</li>
              <li>✓ Unlimited component additions</li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="brutal-button block text-center py-3 text-xs uppercase bg-studio-text text-studio-bg"
          >
            Secure Retainer ➔
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

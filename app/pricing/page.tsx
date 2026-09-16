'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [billingType, setBillingType] = useState<'project' | 'retainer'>(
    'project',
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-7xl mx-auto text-studio-text p-6 md:p-12"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            TRANSPARENT ENGAGEMENT TIERS // STACKNOTHING LLC
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Studio Pricing & Rates
          </h1>
          <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
            Tailored engineering tiers scaled for solo creators, growing small
            businesses, and high-concurrency enterprise corporations.
          </p>
        </div>

        {/* Toggles Container */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Billing Type Toggle */}
          <div className="border-2 border-studio-text p-1 bg-studio-box flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setBillingType('project')}
              className={`px-3 py-1.5 transition-colors uppercase ${billingType === 'project' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingType('retainer')}
              className={`px-3 py-1.5 transition-colors uppercase ${billingType === 'retainer' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Monthly Retainer
            </button>
          </div>

          {/* Currency Toggle Switch */}
          <div className="border-2 border-studio-text p-1 bg-studio-box flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 transition-colors uppercase ${currency === 'USD' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 transition-colors uppercase ${currency === 'INR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tier 1: Solopreneurs / Creators */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              SOLOPRENEUR / CREATOR
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              Landing Page & Audit
            </h3>
            <div className="text-2xl font-black mb-4 text-green-brand">
              {currency === 'USD' ? '$1,200' : '₹45,000'}
              {billingType === 'retainer' && (
                <span className="text-xs font-mono opacity-60 font-normal">
                  /mo
                </span>
              )}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              High-impact single-page presence or portfolio overhaul with
              brutalist aesthetics.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Next.js 16 static landing page</li>
              <li>✓ Custom Tailwind v4 styling</li>
              <li>✓ 3-day rapid deployment</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=landing-page&type=${billingType}&currency=${currency}&price=${encodeURIComponent(currency === 'USD' ? '$1,200' : '₹45,000')}`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-studio-bg font-bold"
          >
            Launch Creator ➔
          </Link>
        </motion.div>

        {/* Tier 2: Small Business / E-commerce */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              SMALL BUSINESS
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              Architecture Sprint
            </h3>
            <div className="text-2xl font-black mb-4 text-green-brand">
              {currency === 'USD' ? '$2,500' : '₹95,000'}
              {billingType === 'retainer' && (
                <span className="text-xs font-mono opacity-60 font-normal">
                  /mo
                </span>
              )}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Ideal for legacy refactoring, WooCommerce cache diagnostics, and
              performance audits.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Full Lighthouse & Core Web Vitals audit</li>
              <li>✓ Drupal / WordPress optimization</li>
              <li>✓ 1-Week delivery turnaround</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=architecture-sprint&type=${billingType}&currency=${currency}&price=${encodeURIComponent(currency === 'USD' ? '$2,500' : '₹95,000')}`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-primary-brand text-white font-bold"
          >
            Book Sprint ➔
          </Link>
        </motion.div>

        {/* Tier 3: Growing Startups (MVP) - Highlighted */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-primary-brand shadow-[6px_6px_0px_var(--color-brand-primary)]"
        >
          <div>
            <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
              MOST POPULAR // STARTUPS
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              MVP Product Build
            </h3>
            <div className="text-2xl font-black mb-4 text-primary-brand">
              {currency === 'USD' ? '$8,500+' : '₹3,50,000+'}
              {billingType === 'retainer' && (
                <span className="text-xs font-mono opacity-60 font-normal">
                  /mo
                </span>
              )}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Full-stack application development from architecture to production
              release on Vercel/Cloudflare.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Next.js 16 App Router & TypeScript</li>
              <li>✓ Custom brutalist UI/UX design system</li>
              <li>✓ Headless e-commerce or mobile bridge</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=mvp-build&type=${billingType}&currency=${currency}&price=${encodeURIComponent(currency === 'USD' ? '$8,500+' : '₹3,50,000+')}`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-black font-bold"
          >
            Initialize Build ➔
          </Link>
        </motion.div>

        {/* Tier 4: Enterprise & Corporates */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              ENTERPRISE & CORP
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              Design Retainer
            </h3>
            <div className="text-2xl font-black mb-4 text-red-brand">
              {currency === 'USD' ? '$5,000' : '₹1,80,000'}{' '}
              <span className="text-xs font-mono opacity-60 font-normal">
                /mo
              </span>
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Dedicated senior frontend architect capacity for ongoing
              enterprise scaling and security.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Dedicated senior frontend architect</li>
              <li>✓ Priority bug fixes & speed tuning</li>
              <li>✓ Unlimited component additions</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=design-retainer&type=retainer&currency=${currency}&price=${encodeURIComponent(currency === 'USD' ? '$5,000' : '₹1,80,000')}`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-red-brand text-studio-bg font-bold"
          >
            Secure Retainer ➔
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

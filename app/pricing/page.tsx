'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PricingCalculator } from '../components/pricing-calculator';

type Currency = 'USD' | 'EUR' | 'INR';
type BillingType = 'project' | 'retainer';

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingType, setBillingType] = useState<BillingType>('project');

  // General, value-based pricing matrix (applicable across any tech stack)
  const prices = {
    landingPage: {
      USD: billingType === 'retainer' ? '$1,000/mo' : '$1,200',
      EUR: billingType === 'retainer' ? '€900/mo' : '€1,100',
      INR: billingType === 'retainer' ? '₹50,000/mo' : '₹60,000',
    },
    mvpBuild: {
      USD: billingType === 'retainer' ? '$2,500/mo' : '$3,500',
      EUR: billingType === 'retainer' ? '€2,300/mo' : '€3,200',
      INR: billingType === 'retainer' ? '₹1,50,000/mo' : '₹2,20,000',
    },
    enterprise: {
      USD: billingType === 'retainer' ? '$3,500/mo' : '$5,000',
      EUR: billingType === 'retainer' ? '€3,200/mo' : '€4,600',
      INR: billingType === 'retainer' ? '₹2,20,000/mo' : '₹3,50,000',
    },
    retainer: {
      USD: '$3,000/mo',
      EUR: '€2,800/mo',
      INR: '₹2,00,000/mo',
    },
  };

  const getPrice = (tier: keyof typeof prices) => {
    return prices[tier][currency];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-7xl mx-auto text-studio-text p-6 md:p-12"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            PROFESSIONAL ENGAGEMENT TIERS // STACKNOTHING LLC
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Studio Pricing & Rates
          </h1>
          <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
            Tailored engineering tiers scaled for impact. We match the ideal
            tech stack (WordPress, React.js, Next.js, Drupal) dynamically to
            your specific project needs.
          </p>
        </div>

        {/* Toggles Container */}
        <div className="flex flex-wrap md:justify-end items-center gap-4">
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
              className={`px-3.5 py-1.5 transition-colors uppercase ${currency === 'USD' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3.5 py-1.5 transition-colors uppercase ${currency === 'EUR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3.5 py-1.5 transition-colors uppercase ${currency === 'INR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tier 1: Landing Page & Audit */}
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
              {getPrice('landingPage')}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              High-impact presence or speed audit built with the optimal stack
              for your goals.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Custom UI & performance setup</li>
              <li>✓ Core Web Vitals optimization</li>
              <li>✓ Rapid deployment turnaround</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=landing-page&type=${billingType}&currency=${currency}&price=${encodeURIComponent(getPrice('landingPage'))}&color=green`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-black font-bold"
          >
            Select Tier ➔
          </Link>
        </motion.div>

        {/* Tier 2: MVP Product Build */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              GROWING STARTUPS
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              MVP Product Build
            </h3>
            <div className="text-2xl font-black mb-4 text-primary-brand">
              {getPrice('mvpBuild')}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Full-stack application development from architecture to production
              release.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Modern frontend & backend logic</li>
              <li>✓ Custom design system integration</li>
              <li>✓ API connections & database setup</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=mvp-build&type=${billingType}&currency=${currency}&price=${encodeURIComponent(getPrice('mvpBuild'))}&color=primary`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-primary-brand text-white font-bold"
          >
            Select Tier ➔
          </Link>
        </motion.div>

        {/* Tier 3: Enterprise Scale - Highlighted */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-primary-brand shadow-[6px_6px_0px_var(--color-brand-primary)]"
        >
          <div>
            <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
              ENTERPRISE & CORP
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              Complex Architecture
            </h3>
            <div className="text-2xl font-black mb-4 text-primary-brand">
              {getPrice('enterprise')}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Robust enterprise-grade migration, heavy content workflows, or
              high-concurrency scaling.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Advanced structural engineering</li>
              <li>✓ High-traffic caching strategies</li>
              <li>✓ Enterprise security hardening</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=complex-architecture&type=${billingType}&currency=${currency}&price=${encodeURIComponent(getPrice('enterprise'))}&color=primary`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-black font-bold"
          >
            Select Tier ➔
          </Link>
        </motion.div>

        {/* Tier 4: Senior Retainer Capacity */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
        >
          <div>
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              DEDICATED CAPACITY
            </div>
            <h3 className="text-xl font-black uppercase mb-2">
              Monthly Retainer
            </h3>
            <div className="text-2xl font-black mb-4 text-red-brand">
              {prices.retainer[currency]}
            </div>
            <p className="text-xs mb-6 leading-relaxed opacity-80">
              Dedicated senior architectural capacity for ongoing scaling,
              feature rollout, and security.
            </p>
            <ul className="space-y-2 font-mono text-xs border-t border-studio-text/20 pt-4 mb-6 opacity-90">
              <li>✓ Dedicated senior engineering hours</li>
              <li>✓ Priority bug fixes & speed tuning</li>
              <li>✓ Continuous stack maintenance</li>
            </ul>
          </div>
          <Link
            href={`/contact-pricing?plan=monthly-retainer&type=retainer&currency=${currency}&price=${encodeURIComponent(prices.retainer[currency])}&color=red`}
            className="brutal-button block text-center py-3 text-xs uppercase bg-red-brand text-white font-bold"
          >
            Select Tier ➔
          </Link>
        </motion.div>
      </div>

      {/* Tiny Note Disclaimer */}
      <div className="border-2 border-studio-text bg-studio-box p-4 font-mono text-xs opacity-75">
        <span className="font-bold uppercase text-red-brand">Note:</span> These
        pricing tiers are for general indication only and are not final
        quotations. Following our scoping discussion meeting, exact quotes and
        formal contract terms will be finalized.
      </div>
      <PricingCalculator />
    </motion.div>
  );
}

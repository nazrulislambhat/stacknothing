'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function PricingCalculator() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'INR'>('USD');
  const [billingType, setBillingType] = useState<'project' | 'retainer'>(
    'project',
  );
  const [pageCount, setPageCount] = useState<number>(5);
  const [includeEcommerce, setIncludeEcommerce] = useState<boolean>(false);
  const [includeMobile, setIncludeMobile] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  // Base pricing conversions
  const baseUSD = 250;
  const baseEUR = 230;
  const baseINR = 10000;

  const ecomUSD = 2500;
  const ecomEUR = 2300;
  const ecomINR = 95000;

  const mobileUSD = 4000;
  const mobileEUR = 3700;
  const mobileINR = 150000;

  const rawUSD =
    pageCount * baseUSD +
    (includeEcommerce ? ecomUSD : 0) +
    (includeMobile ? mobileUSD : 0);
  const rawEUR =
    pageCount * baseEUR +
    (includeEcommerce ? ecomEUR : 0) +
    (includeMobile ? mobileEUR : 0);
  const rawINR =
    pageCount * baseINR +
    (includeEcommerce ? ecomINR : 0) +
    (includeMobile ? mobileINR : 0);

  const finalUSD = Math.round(rawUSD * speedMultiplier);
  const finalEUR = Math.round(rawEUR * speedMultiplier);
  const finalINR = Math.round(rawINR * speedMultiplier);

  const formatPrice = (usd: number, eur: number, inr: number) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`;
    if (currency === 'EUR') return `€${eur.toLocaleString()}`;
    return `₹${inr.toLocaleString()}`;
  };

  return (
    <div className="brutal-box p-8 border-2 border-studio-text space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-studio-text/20 pb-6">
        <div>
          <div className="text-[10px] text-green-brand font-bold uppercase font-mono tracking-widest">
            INTERACTIVE ESTIMATOR
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight">
            Scope-Based Project Estimator
          </h3>
        </div>

        {/* Currency & Billing Toggles */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-2 border-studio-text p-1 bg-studio-box flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setBillingType('project')}
              className={`px-3 py-1.5 transition-colors uppercase ${billingType === 'project' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Project
            </button>
            <button
              onClick={() => setBillingType('retainer')}
              className={`px-3 py-1.5 transition-colors uppercase ${billingType === 'retainer' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Retainer
            </button>
          </div>

          <div className="border-2 border-studio-text p-1 bg-studio-box flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1.5 transition-colors uppercase ${currency === 'USD' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-2.5 py-1.5 transition-colors uppercase ${currency === 'EUR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2.5 py-1.5 transition-colors uppercase ${currency === 'INR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls Column */}
        <div className="space-y-6 font-mono text-xs">
          <div className="space-y-2 border-2 border-studio-text p-4 bg-studio-box">
            <div className="flex justify-between font-bold">
              <span>TARGET PAGE / ROUTE COUNT:</span>
              <span className="text-primary-brand text-sm">
                {pageCount} PAGES
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={pageCount}
              onChange={(e) => setPageCount(Number(e.target.value))}
              className="w-full accent-[#1f01b9] cursor-pointer py-2"
            />
          </div>

          <div className="space-y-3 border-2 border-studio-text p-4 bg-studio-box">
            <div className="font-bold pb-2 border-b border-studio-text/20">
              ARCHITECTURAL MODULES
            </div>
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeEcommerce}
                onChange={(e) => setIncludeEcommerce(e.target.checked)}
                className="w-4 h-4 accent-[#1f01b9]"
              />
              <span className="font-bold">
                Headless E-commerce / Stripe Checkout Pipeline
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeMobile}
                onChange={(e) => setIncludeMobile(e.target.checked)}
                className="w-4 h-4 accent-[#1f01b9]"
              />
              <span className="font-bold">
                Cross-Platform Mobile Bridge (React Native/Expo)
              </span>
            </label>
          </div>

          <div className="space-y-2 border-2 border-studio-text p-4 bg-studio-box">
            <div className="font-bold pb-2 border-b border-studio-text/20">
              EXECUTION TIMELINE
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setSpeedMultiplier(1)}
                className={`p-3 border-2 cursor-pointer border-studio-text text-center uppercase font-bold transition-all ${speedMultiplier === 1 ? 'bg-primary-brand text-white' : 'bg-[var(--bg-primary)]'}`}
              >
                Standard Sprint (3-4 wks)
              </button>
              <button
                onClick={() => setSpeedMultiplier(1.3)}
                className={`p-3 border-2 cursor-pointer border-studio-text text-center uppercase font-bold transition-all ${speedMultiplier === 1.3 ? 'bg-green-brand text-black' : 'bg-[var(--bg-primary)]'}`}
              >
                Accelerated (1-2 wks)
              </button>
            </div>
          </div>
        </div>

        {/* Output Summary Card */}
        <div className="brutal-box p-8 space-y-6 bg-studio-box flex flex-col justify-between h-full border-2 border-studio-text">
          <div className="space-y-4">
            <div className="text-[10px] text-green-brand font-bold uppercase tracking-widest">
              ESTIMATED PROJECTION
            </div>
            <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary-brand">
              {formatPrice(finalUSD, finalEUR, finalINR)}
            </div>
            <p className="text-xs leading-relaxed opacity-80 font-mono">
              Calculated based on Next.js 16 App Router architecture, TypeScript
              strict type-safety, and brutalist Tailwind v4 design token
              mapping.
            </p>
          </div>

          <div className="border-t border-studio-text/20 pt-6 space-y-4">
            <ul className="space-y-2 font-mono text-[11px] opacity-90">
              <li>✓ {pageCount} Fully Responsive Routes</li>
              {includeEcommerce && <li>✓ Headless E-commerce Pipeline</li>}
              {includeMobile && <li>✓ React Native Mobile Bridge</li>}
              <li>✓ Vercel & Cloudflare Edge Deployment</li>
            </ul>

            <Link
              href={`/contact?estimate=${formatPrice(finalUSD, finalEUR, finalINR)}&pages=${pageCount}`}
              className="brutal-button block text-center py-4 text-xs uppercase bg-green-brand text-black font-bold"
            >
              LOCK IN ESTIMATE & INITIATE ➔
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

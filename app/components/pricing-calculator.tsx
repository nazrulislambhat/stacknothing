'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

type ProjectType = 'landing' | 'wordpress' | 'drupal' | 'nextjs' | 'custom';

export function PricingCalculator() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'INR'>('USD');
  const [billingType, setBillingType] = useState<'project' | 'retainer'>(
    'project',
  );
  const [projectType, setProjectType] = useState<ProjectType>('nextjs');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  // Simplified and lowered base rates
  const basePrices: Record<
    ProjectType,
    { USD: number; EUR: number; INR: number }
  > = {
    landing: { USD: 750, EUR: 700, INR: 35000 },
    wordpress: { USD: 1200, EUR: 1100, INR: 55000 },
    drupal: { USD: 1800, EUR: 1650, INR: 85000 },
    nextjs: { USD: 2200, EUR: 2000, INR: 99000 },
    custom: { USD: 1500, EUR: 1350, INR: 65000 },
  };

  const currentBase = basePrices[projectType];
  const retainerMultiplier = billingType === 'retainer' ? 0.8 : 1; // Retainer discount or monthly scaling

  const finalUSD = Math.round(
    currentBase.USD * speedMultiplier * retainerMultiplier,
  );
  const finalEUR = Math.round(
    currentBase.EUR * speedMultiplier * retainerMultiplier,
  );
  const finalINR = Math.round(
    currentBase.INR * speedMultiplier * retainerMultiplier,
  );

  const formatPrice = (usd: number, eur: number, inr: number) => {
    const suffix = billingType === 'retainer' ? '/mo' : '';
    if (currency === 'USD') return `$${usd.toLocaleString()}${suffix}`;
    if (currency === 'EUR') return `€${eur.toLocaleString()}${suffix}`;
    return `₹${inr.toLocaleString()}${suffix}`;
  };

  const projectTitles: Record<ProjectType, string> = {
    landing: 'High-Conversion Landing Page',
    wordpress: 'WooCommerce / WordPress Storefront',
    drupal: 'Drupal Enterprise & Headless',
    nextjs: 'React & Next.js 16 Web Application',
    custom: 'Custom Engineering Solution',
  };

  return (
    <div className="brutal-box p-8 border-2 border-studio-text space-y-8 bg-studio-box">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-studio-text/20 pb-6">
        <div>
          <div className="text-[10px] text-green-brand font-bold uppercase font-mono tracking-widest">
            SIMPLIFIED ESTIMATOR
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight">
            Select Your Project Scope
          </h3>
        </div>

        {/* Currency & Billing Toggles */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-2 border-studio-text p-1 bg-[var(--bg-primary)] flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setBillingType('project')}
              className={`px-3 py-1.5 transition-colors uppercase cursor-pointer ${billingType === 'project' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Project
            </button>
            <button
              onClick={() => setBillingType('retainer')}
              className={`px-3 py-1.5 transition-colors uppercase cursor-pointer ${billingType === 'retainer' ? 'bg-primary-brand text-white' : 'hover:opacity-75'}`}
            >
              Retainer
            </button>
          </div>

          <div className="border-2 border-studio-text p-1 bg-[var(--bg-primary)] flex items-center gap-1 font-mono text-xs font-bold shadow-[2px_2px_0px_var(--text-primary)]">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1.5 transition-colors uppercase cursor-pointer ${currency === 'USD' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-2.5 py-1.5 transition-colors uppercase cursor-pointer ${currency === 'EUR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2.5 py-1.5 transition-colors uppercase cursor-pointer ${currency === 'INR' ? 'bg-green-brand text-black' : 'hover:opacity-75'}`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls Column */}
        <div className="space-y-6 font-mono text-xs">
          <div className="space-y-3 border-2 border-studio-text p-4 bg-[var(--bg-primary)]">
            <div className="font-bold pb-2 border-b border-studio-text/20">
              CHOOSE TECH STACK / PROJECT TYPE
            </div>
            <div className="space-y-2">
              {(
                [
                  { key: 'landing', label: 'High-Conversion Landing Page' },
                  { key: 'wordpress', label: 'WordPress / WooCommerce Store' },
                  { key: 'drupal', label: 'Drupal CMS & Headless' },
                  { key: 'nextjs', label: 'React & Next.js 16 Web App' },
                  { key: 'custom', label: 'Custom Engineering / Other' },
                ] as const
              ).map((item) => (
                <label
                  key={item.key}
                  className={`flex items-center gap-3 p-3 border-2 cursor-pointer transition-all ${projectType === item.key ? 'border-primary-brand bg-primary-brand/5 font-bold' : 'border-studio-text/40'}`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    checked={projectType === item.key}
                    onChange={() => setProjectType(item.key)}
                    className="accent-[#1f01b9]"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-2 border-studio-text p-4 bg-[var(--bg-primary)]">
            <div className="font-bold pb-2 border-b border-studio-text/20">
              EXECUTION TIMELINE
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setSpeedMultiplier(1)}
                className={`p-3 border-2 cursor-pointer border-studio-text text-center uppercase font-bold transition-all ${speedMultiplier === 1 ? 'bg-primary-brand text-white' : 'bg-studio-box'}`}
              >
                Standard Sprint (3-4 wks)
              </button>
              <button
                onClick={() => setSpeedMultiplier(1.3)}
                className={`p-3 border-2 cursor-pointer border-studio-text text-center uppercase font-bold transition-all ${speedMultiplier === 1.3 ? 'bg-green-brand text-black' : 'bg-studio-box'}`}
              >
                Accelerated (1-2 wks)
              </button>
            </div>
          </div>
        </div>

        {/* Output Summary Card */}
        <div className="brutal-box p-8 space-y-6 bg-[var(--bg-primary)] flex flex-col justify-between h-full border-2 border-studio-text">
          <div className="space-y-4">
            <div className="text-[10px] text-green-brand font-bold uppercase tracking-widest">
              ESTIMATED INVESTMENT
            </div>
            <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary-brand">
              {formatPrice(finalUSD, finalEUR, finalINR)}
            </div>
            <p className="text-xs leading-relaxed opacity-80 font-mono">
              Selected Scope:{' '}
              <span className="font-bold text-studio-text">
                {projectTitles[projectType]}
              </span>
              . Engineered with clean standards and robust performance.
            </p>
          </div>

          <div className="border-t border-studio-text/20 pt-6 space-y-4">
            <ul className="space-y-2 font-mono text-[11px] opacity-90">
              <li>✓ Full Source Code Ownership</li>
              <li>✓ Responsive Brutalist UI & Design Tokens</li>
              <li>✓ Vercel or Cloudflare Edge Deployment</li>
              <li>✓ Direct Developer Communication via Slack/Email</li>
            </ul>

            <Link
              href={`/contact-pricing?plan=${projectType}&type=${billingType}&currency=${currency}&price=${formatPrice(finalUSD, finalEUR, finalINR)}`}
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

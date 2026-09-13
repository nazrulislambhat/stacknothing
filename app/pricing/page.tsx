'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [region, setRegion] = useState<'US' | 'IN'>('US');

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="border-l-4 border-[#00E5FF] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            REGIONAL ENGAGEMENTS
          </div>
          <h1 className="text-4xl font-black uppercase">
            Studio Pricing & Tiers
          </h1>
        </div>

        {/* Regional Market Switcher */}
        <div className="flex items-center gap-2 border-2 border-[var(--text-primary)] p-1">
          <button
            onClick={() => setRegion('US')}
            className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
              region === 'US'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                : 'text-zinc-500'
            }`}
          >
            US / GLOBAL ($)
          </button>
          <button
            onClick={() => setRegion('IN')}
            className={`px-3 py-1 cursor-pointer text-xs font-bold uppercase transition-colors ${
              region === 'IN'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                : 'text-zinc-500'
            }`}
          >
            INDIA (₹) [REGIONAL]
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1: Sprint Audit */}
        <div className="brutal-box p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs bg-zinc-200 dark:bg-zinc-800 text-[var(--text-primary)] border border-[var(--text-primary)] px-2.5 py-1 inline-block mb-4">
              SPRINT AUDIT
            </div>
            <div className="text-4xl font-black mb-4">
              {region === 'US' ? '$2,500' : '₹95,000'}
              <span className="text-xs text-zinc-500 font-normal">
                {' '}
                / project
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6 leading-relaxed">
              Targeted architecture teardown, Next.js 16 PPR speed
              optimizations, and performance diagnostics.
            </p>
            <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-8 border-t border-b border-[var(--text-primary)]/20 py-4">
              <li>✓ Full Codebase Teardown</li>
              <li>✓ Turbopack & Cache Fixes</li>
              <li>✓ Core Web Vitals Audit</li>
              <li>✓ Delivered in 5 Days</li>
            </ul>
          </div>
          <Link
            href={`/contact?tier=audit&region=${region}`}
            className="brutal-button text-center py-3 text-xs uppercase"
          >
            Book Audit ➔
          </Link>
        </div>

        {/* Tier 2: MVP Product Build (Featured) */}
        <div className="brutal-box p-8 flex flex-col justify-between border-2 border-[#FF007F] shadow-[6px_6px_0px_#FF007F]">
          <div>
            <div className="text-xs bg-[#FF007F] text-white font-bold px-2.5 py-1 inline-block mb-4">
              MOST POPULAR
            </div>
            <div className="text-4xl font-black mb-4">
              {region === 'US' ? '$8,500+' : '₹3,50,000+'}
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                {' '}
                base
              </span>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs mb-6 leading-relaxed">
              End-to-end product architecture, UI/UX system design, and
              production build using modern stacks.
            </p>
            <ul className="space-y-2 text-xs text-[var(--text-primary)] mb-8 border-t border-b border-[#FF007F] py-4">
              <li>✓ Custom UI Architecture</li>
              <li>✓ Full Stack Implementation</li>
              <li>✓ Auth & Payments Setup</li>
              <li>✓ Production Deployment</li>
            </ul>
          </div>
          <Link
            href={`/contact?tier=mvp&region=${region}`}
            className="brutal-button text-center py-3 text-xs uppercase bg-[#FF007F] text-white shadow-[4px_4px_0px_currentColor]"
          >
            Build Product ➔
          </Link>
        </div>

        {/* Tier 3: Retainer */}
        <div className="brutal-box p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs bg-zinc-200 dark:bg-zinc-800 text-[var(--text-primary)] border border-[var(--text-primary)] px-2.5 py-1 inline-block mb-4">
              RETAINER
            </div>
            <div className="text-4xl font-black mb-4">
              {region === 'US' ? '$5,000' : '₹1,80,000'}
              <span className="text-xs text-zinc-500 font-normal">
                {' '}
                / month
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6 leading-relaxed">
              Dedicated fractional frontend architect support, component
              registry development, and iterative feature shipping.
            </p>
            <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-8 border-t border-b border-[var(--text-primary)]/20 py-4">
              <li>✓ Dedicated Architect</li>
              <li>✓ Custom UI Registry</li>
              <li>✓ Priority Code Review</li>
              <li>✓ Flexible Scope Rollout</li>
            </ul>
          </div>
          <Link
            href={`/contact?tier=retainer&region=${region}`}
            className="brutal-button text-center py-3 text-xs uppercase"
          >
            Secure Retainer ➔
          </Link>
        </div>
      </div>
    </div>
  );
}

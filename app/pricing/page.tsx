import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <div>
        <div className="border-l-4 border-[#00E5FF] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          TRANSPARENT CONTRACTS
        </div>
        <h1 className="text-4xl font-black uppercase">
          Studio Pricing & Tiers
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="brutal-box p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs bg-zinc-800 text-white border border-white px-2.5 py-1 inline-block mb-4">
              SPRINT AUDIT
            </div>
            <div className="text-4xl font-black mb-4">
              $2,500{' '}
              <span className="text-xs text-zinc-500 font-normal">USD</span>
            </div>
            <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
              Targeted architecture teardown, Next.js 16 PPR speed
              optimizations, and performance diagnostics.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 mb-8 border-t border-b border-white/20 py-4">
              <li>✓ Full Codebase Teardown</li>
              <li>✓ Turbopack & Cache Fixes</li>
              <li>✓ Core Web Vitals Audit</li>
              <li>✓ Delivered in 5 Days</li>
            </ul>
          </div>
          <Link
            href="/contact?tier=audit"
            className="brutal-button text-center py-3 text-xs uppercase"
          >
            Book Audit ➔
          </Link>
        </div>

        {/* Tier 2 - Featured */}
        <div className="brutal-box p-8 flex flex-col justify-between border-2 border-[#FF007F] shadow-[6px_6px_0px_#FF007F]">
          <div>
            <div className="text-xs bg-[#FF007F] text-black font-bold px-2.5 py-1 inline-block mb-4">
              MOST POPULAR
            </div>
            <div className="text-4xl font-black mb-4">
              $8,500+{' '}
              <span className="text-xs text-zinc-400 font-normal">USD</span>
            </div>
            <p className="text-zinc-300 text-xs mb-6 leading-relaxed">
              End-to-end product architecture, UI/UX system design, and
              production build using modern stacks.
            </p>
            <ul className="space-y-2 text-xs text-white mb-8 border-t border-b border-[#FF007F] py-4">
              <li>✓ Custom UI Architecture</li>
              <li>✓ Full Stack Implementation</li>
              <li>✓ Auth & Payments Setup</li>
              <li>✓ Production Deployment</li>
            </ul>
          </div>
          <Link
            href="/contact?tier=mvp"
            className="brutal-button text-center py-3 text-xs uppercase bg-[#FF007F] text-white shadow-[4px_4px_0px_#FFFFFF]"
          >
            Build Product ➔
          </Link>
        </div>

        {/* Tier 3 */}
        <div className="brutal-box p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs bg-zinc-800 text-white border border-white px-2.5 py-1 inline-block mb-4">
              RETAINER
            </div>
            <div className="text-4xl font-black mb-4">
              $5,000{' '}
              <span className="text-xs text-zinc-500 font-normal">/mo</span>
            </div>
            <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
              Dedicated fractional frontend architect support, component
              registry development, and iterative feature shipping.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 mb-8 border-t border-b border-white/20 py-4">
              <li>✓ Dedicated Architect</li>
              <li>✓ Custom UI Registry</li>
              <li>✓ Priority Code Review</li>
              <li>✓ Flexible Scope Rollout</li>
            </ul>
          </div>
          <Link
            href="/contact?tier=retainer"
            className="brutal-button text-center py-3 text-xs uppercase"
          >
            Secure Retainer ➔
          </Link>
        </div>
      </div>
    </div>
  );
}

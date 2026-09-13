import Link from 'next/link';

export default function WebDevService() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 01
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Custom Web & App Development
        </h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
        <p>
          We engineer custom web applications from scratch, discarding bloated
          legacy frameworks in favor of bleeding-edge **Next.js 16**
          architectures, TypeScript, and high-performance server components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/20">
          <div>
            <h3 className="text-white font-black uppercase mb-2">
              What We Deliver
            </h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Sub-second page loads via Turbopack</li>
              <li>✓ SEO-optimized server-side rendering</li>
              <li>✓ Fully scalable modular code structure</li>
              <li>✓ Zero corporate middleware bloat</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase mb-2">Ideal For</h3>
            <ul className="space-y-2 font-mono">
              <li>✓ High-concurrency SaaS products</li>
              <li>✓ Enterprise web portals</li>
              <li>✓ Custom digital utility dashboards</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-[#00FF66] text-black font-bold"
        >
          Book Web Sprint ➔
        </Link>
        <Link
          href="/pricing"
          className="border-2 border-white px-6 py-3 text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors"
        >
          View Tiers
        </Link>
      </div>
    </div>
  );
}

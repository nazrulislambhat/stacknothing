import Link from 'next/link';

export default function RoadmapPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          STRATEGIC HORIZON // 2026–2027
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Product Roadmap
        </h1>
      </div>

      <div className="space-y-8">
        {/* Milestone 1 */}
        <div className="brutal-box p-8 relative border-2 border-[#00FF66]">
          <div className="absolute top-4 right-4 text-[10px] bg-[#00FF66] text-black font-bold px-2.5 py-1 uppercase">
            IN PROGRESS (Q3 2026)
          </div>
          <div className="text-xs text-[#00FF66] font-bold mb-1">PHASE 01</div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Stack UI Component Registry
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-4 leading-relaxed">
            Opening access to our internal design tokens, primitive blocks, and
            unstyled copy-paste components built explicitly for Next.js 16.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-black/20 dark:border-white/20 pt-4">
            <li>✓ Tailwind v4 token mapping</li>
            <li>✓ Accessible keyboard-navigable primitives</li>
            <li>⏳ Public registry documentation portal</li>
          </ul>
        </div>

        {/* Milestone 2 */}
        <div className="brutal-box p-8 relative border-2 border-[#00E5FF]">
          <div className="absolute top-4 right-4 text-[10px] bg-[#00E5FF] text-black font-bold px-2.5 py-1 uppercase">
            PLANNED (Q4 2026)
          </div>
          <div className="text-xs text-[#00E5FF] font-bold mb-1">PHASE 02</div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Blog & Editorial Launch
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-4 leading-relaxed">
            Deploying{' '}
            <code className="text-[var(--text-primary)] font-bold">
              blog.stacknothing.com
            </code>{' '}
            to publish deep-dive case studies on headless e-commerce
            optimization, caching mechanics, and modern frontend architecture.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-black/20 dark:border-white/20 pt-4">
            <li>⏳ MDX-powered documentation pipelines</li>
            <li>⏳ Architecture breakdown writeups</li>
          </ul>
        </div>

        {/* Milestone 3 */}
        <div className="brutal-box p-8 relative border-2 border-[#FF007F]">
          <div className="absolute top-4 right-4 text-[10px] bg-[#FF007F] text-white font-bold px-2.5 py-1 uppercase">
            FUTURE SCOPE (2027)
          </div>
          <div className="text-xs text-[#FF007F] font-bold mb-1">PHASE 03</div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Autonomous AI Utilities & n8n Agents
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-4 leading-relaxed">
            Expanding our ecosystem of micro-SaaS applications and workflow
            agents driven by automated serverless execution layers.
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase"
        >
          Propose Partnership ➔
        </Link>
      </div>
    </div>
  );
}

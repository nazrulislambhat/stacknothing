'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function RoadmapPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 max-w-4xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          STRATEGIC HORIZON // 2026–2027
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Product Roadmap
        </h1>
      </div>

      <div className="space-y-8">
        {/* Milestone 1 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 relative border-2 border-studio-text"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-green-brand text-black font-bold px-2.5 py-1 uppercase">
            IN PROGRESS (Q3 2026)
          </div>
          <div className="text-xs text-green-brand font-bold mb-1">
            PHASE 01
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Stack UI Component Registry
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Opening access to our internal design tokens, primitive blocks, and
            unstyled copy-paste components built explicitly for Next.js 16.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>✓ Tailwind v4 token mapping</li>
            <li>✓ Accessible keyboard-navigable primitives</li>
            <li>⏳ Public registry documentation portal</li>
          </ul>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 relative border-2 border-studio-text"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-primary-brand text-white font-bold px-2.5 py-1 uppercase">
            PLANNED (Q4 2026)
          </div>
          <div className="text-xs text-primary-brand font-bold mb-1">
            PHASE 02
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Blog & Editorial Launch
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Deploying{' '}
            <code className="text-studio-text font-bold">
              blog.stacknothing.com
            </code>{' '}
            to publish deep-dive case studies on headless e-commerce
            optimization, caching mechanics, and modern frontend architecture.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>⏳ MDX-powered documentation pipelines</li>
            <li>⏳ Architecture breakdown writeups</li>
          </ul>
        </motion.div>

        {/* Milestone 3 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 relative border-2 border-studio-text"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-red-brand text-white font-bold px-2.5 py-1 uppercase">
            FUTURE SCOPE (2027)
          </div>
          <div className="text-xs text-red-brand font-bold mb-1">PHASE 03</div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Autonomous AI Utilities & n8n Agents
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Expanding our ecosystem of micro-SaaS applications and workflow
            agents driven by automated serverless execution layers.
          </p>
        </motion.div>
      </div>

      <div className="flex gap-4 pt-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white"
        >
          Propose Partnership ➔
        </Link>
      </div>
    </motion.div>
  );
}

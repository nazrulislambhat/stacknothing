'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function RoadmapPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 mx-auto text-studio-text md:py-12"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          STRATEGIC HORIZON // 2026–2027 ECOSYSTEM EXPANSION
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Master Product Roadmap
        </h1>
        <p className="text-xs md:text-sm mt-3 max-w-3xl leading-relaxed opacity-80 font-mono">
          An overarching engineering layout tracking the active deployment of
          hard-edged components, open-source utilities, developer blogs, and
          autonomous AI infrastructure.
        </p>
      </div>

      <div className="space-y-8">
        {/* Milestone 1 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box px-8 py-12 relative border-2 border-studio-text bg-studio-box"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-green-brand text-black font-bold px-2.5 py-1 uppercase">
            IN PROGRESS (Q3 2026)
          </div>
          <div className="text-xs text-green-brand font-bold mb-1 font-mono">
            PHASE 01 // CORE INFRASTRUCTURE
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Stack UI Component Registry & Brand Portals
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Opening public access to internal design tokens, primitive blocks,
            and unstyled copy-paste components built explicitly for Next.js 16
            and Tailwind v4, alongside dedicated brand asset repositories.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>✓ Tailwind v4 token mapping & brutalist themes</li>
            <li>✓ Accessible keyboard-navigable UI primitives</li>
            <li>
              ⏳ Public component documentation portal (`ui.stacknothing.com`)
            </li>
            <li>✓ Public brand asset repository (`brand.stacknothing.com`)</li>
          </ul>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box px-8 py-12 relative border-2 border-studio-text bg-studio-box"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-primary-brand text-white font-bold px-2.5 py-1 uppercase">
            PLANNED (Q4 2026)
          </div>
          <div className="text-xs text-primary-brand font-bold mb-1 font-mono">
            PHASE 02 // KNOWLEDGE SHARING
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Editorial & Technical Blog Launch
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Deploying{' '}
            <code className="text-studio-text font-bold">
              blog.stacknothing.com
            </code>{' '}
            to publish deep-dive architectural case studies, frontend
            performance audits, and advanced caching mechanics for WordPress,
            Drupal, and Next.js.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>⏳ MDX-powered documentation pipelines</li>
            <li>⏳ WooCommerce & Drupal cache diagnostic breakdowns</li>
            <li>⏳ Frontend architecture scalability writeups</li>
          </ul>
        </motion.div>

        {/* Milestone 3 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box px-8 py-12 relative border-2 border-studio-text bg-studio-box"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-primary-brand text-white font-bold px-2.5 py-1 uppercase">
            PLANNED (Q1 2027)
          </div>
          <div className="text-xs text-primary-brand font-bold mb-1 font-mono">
            PHASE 03 // DEVELOPER UTILITIES
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Standalone Browser Extensions & Micro-SaaS
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Scaling out lightweight productivity utilities and developer
            tools—such as Chrome Focus Guard and health checkers—designed to
            streamline daily engineering workflows and eliminate context
            switching.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>⏳ Chrome Focus Guard public web store release</li>
            <li>⏳ Multi-site UI integrity verification tooling</li>
            <li>⏳ Headless e-commerce health check utilities</li>
          </ul>
        </motion.div>

        {/* Milestone 4 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box px-8 py-12 relative border-2 border-studio-text bg-studio-box"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-red-brand text-white font-bold px-2.5 py-1 uppercase">
            FUTURE HORIZON (Q2-Q3 2027)
          </div>
          <div className="text-xs text-red-brand font-bold mb-1 font-mono">
            PHASE 04 // ENTERPRISE CAPABILITY
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Headless Commerce & Multi-Language CI/CD
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Introducing specialized enterprise integration pipelines capable of
            verifying UI integrity across 60+ multilingual sites simultaneously
            with automated regression testing.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>⏳ Automated multilingual UI validation testing</li>
            <li>⏳ Decoupled Drupal & WordPress API bridges</li>
            <li>⏳ Enterprise security hardening frameworks</li>
          </ul>
        </motion.div>

        {/* Milestone 5 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box px-8 py-12 relative border-2 border-studio-text bg-studio-box"
        >
          <div className="absolute top-4 right-4 text-[10px] bg-red-brand text-white font-bold px-2.5 py-1 uppercase">
            FUTURE HORIZON (Q4 2027 & BEYOND)
          </div>
          <div className="text-xs text-red-brand font-bold mb-1 font-mono">
            PHASE 05 // AUTONOMOUS SYSTEMS
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Autonomous AI Utilities & n8n Workflow Agents
          </h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Expanding our ecosystem into autonomous serverless execution layers,
            workflow automation agents, and self-healing deployment pipelines
            powered by intelligent backend nodes.
          </p>
          <ul className="space-y-2 text-xs font-mono border-t border-studio-text/20 pt-4 opacity-90">
            <li>⏳ Serverless n8n workflow integration templates</li>
            <li>⏳ Automated client onboarding & intake triggers</li>
            <li>⏳ AI-driven performance monitoring agents</li>
          </ul>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white font-bold"
        >
          Propose Partnership ➔
        </Link>
        <Link
          href="/pricing"
          className=" px-6 py-3 hover:text-red-brand hover:border-red-brand text-xs uppercase bg-studio-box text-studio-text border-2 border-studio-text font-bold"
        >
          Explore Tiers ➔
        </Link>
      </div>
    </motion.div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function UiUxService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 04
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          UI/UX & Figma-to-Code
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-3 max-w-2xl leading-relaxed">
          Pixel-perfect design systems translated directly into clean React and
          Tailwind CSS codebases straight from Figma assets with zero design
          drift.
        </p>
      </div>

      {/* Overview Block */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 space-y-6 text-zinc-700 dark:text-zinc-300 text-xs md:text-sm leading-relaxed"
      >
        <h2 className="text-xl font-black uppercase text-[var(--text-primary)]">
          Bridging Design & Code
        </h2>
        <p>
          Too often, stunning Figma mockups suffer from severe design drift
          during developer handoff. We bridge that gap permanently. As frontend
          architects, we design and build component libraries simultaneously,
          ensuring every spacing token, typographic scale, and micro-animation
          matches the specification down to the single pixel.
        </p>
        <p>
          Whether you supply existing Figma wireframes or require our brutalist,
          high-contrast design systems built from scratch, we deliver
          accessible, production-ready React codebases.
        </p>
      </motion.div>

      {/* Detailed Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-yellow-500">
            DESIGN SYSTEM TOKENS
          </div>
          <h3 className="text-2xl font-black uppercase">Figma Mastery</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Design Tokens:</strong> Variables mapped 1:1 with Tailwind
              configuration files
            </li>
            <li>
              <strong>Atomic Components:</strong> Reusable buttons, inputs,
              modals, and navigation primitives
            </li>
            <li>
              <strong>Interactive Prototyping:</strong> High-fidelity state
              transitions and click-through flows
            </li>
            <li>
              <strong>Responsive Layouts:</strong> Auto-layout scaling across
              mobile, tablet, and desktop viewports
            </li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#00FF66]">
            CODE TRANSLATION
          </div>
          <h3 className="text-2xl font-black uppercase">
            Engineering Standards
          </h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Clean React Code:</strong> Semantic JSX with modular
              component architecture
            </li>
            <li>
              <strong>Motion Integration:</strong> Fluid micro-interactions via
              `motion/react`
            </li>
            <li>
              <strong>Accessibility:</strong> Full WAI-ARIA compliance and
              keyboard navigation support
            </li>
            <li>
              <strong>Dark/Light Modes:</strong> Flawless theme variable
              switching without layout flicker
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Workflow Steps */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
           DESIGN & IMPLEMENTATION WORKFLOW
        </div>
        <div className="space-y-4">
          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 01
              </div>
              <h4 className="text-lg font-black uppercase">
                Wireframing & Token Audit
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Establishing color palettes, typography hierarchies, and grid
                constraints.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              DAYS 1-3
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 02
              </div>
              <h4 className="text-lg font-black uppercase">
                Figma Component Library Construction
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Building master components and interactive variants in Figma.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 2
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 03
              </div>
              <h4 className="text-lg font-black uppercase">
                Figma-to-Code Translation
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Converting design systems directly into production React and
                Tailwind primitives.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 3
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="brutal-box p-8 bg-zinc-100 dark:bg-zinc-950 text-center space-y-4">
        <h3 className="text-2xl font-black uppercase">
          Ready to elevate your design system?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto">
          Transform your Figma assets into clean, high-performance React
          codebases with zero design drift.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase bg-yellow-400 text-black font-bold"
          >
            Upgrade Design System ➔
          </Link>
          <Link
            href="/pricing"
            className="border-2 border-[var(--text-primary)] px-6 py-3 text-xs uppercase font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors"
          >
            View Engagement Tiers
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

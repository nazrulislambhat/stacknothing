'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function UiUxServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 05
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          UI/UX & Figma-to-Code Systems
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          Pixel-perfect design tokens translated into clean React and Tailwind
          CSS components with absolute design fidelity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-primary-brand font-bold">
            DESIGN FIDELITY
          </div>
          <h3 className="text-2xl font-black uppercase">
            Figma-to-Code Precision
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Eliminating design drift by converting Figma wireframes and design
            systems directly into production-grade React components.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Strict Tailwind CSS v4 token mapping</li>
            <li>✓ Reusable component architecture</li>
            <li>✓ Motion animation integration (Motion/React)</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            BRUTALIST AESTHETICS
          </div>
          <h3 className="text-2xl font-black uppercase">
            High-Contrast Layouts
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Specializing in bold minimalism, brutalist geometries, and
            high-impact visual hierarchies that captivate audiences.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Custom typography and grid alignment</li>
            <li>✓ Dark and light mode token consistency</li>
            <li>✓ Micro-interaction polish</li>
          </ul>
        </div>
      </div>

      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to elevate your interface?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Bridge the gap between design and high-performance frontend code.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white"
        >
          Start Design Sprint ➔
        </Link>
      </div>
    </motion.div>
  );
}

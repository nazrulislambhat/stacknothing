'use client';

import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div>
        <div className="border-l-4 border-white pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL FRAMEWORK
        </div>
        <h1 className="text-4xl font-black uppercase">Terms & Conditions</h1>
        <p className="text-xs text-zinc-500 mt-2 font-mono">
          Effective Date: January 1, 2026 • StackNothing Studio
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 space-y-6 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed"
      >
        <section>
          <h2 className="text-[var(--text-primary)] font-bold uppercase mb-2">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing stacknothing.com or utilizing our digital apps
            (including dhikrly.com), you agree to these legal conditions.
          </p>
        </section>
        <section>
          <h2 className="text-[var(--text-primary)] font-bold uppercase mb-2">
            2. Intellectual Property
          </h2>
          <p>
            All framework codebases, UI primitives, and branding remain property
            of StackNothing LLC until custom contracts assign full ownership
            upon project sign-off.
          </p>
        </section>
        <section>
          <h2 className="text-[var(--text-primary)] font-bold uppercase mb-2">
            3. Governing Billing (USD / INR)
          </h2>
          <p>
            All transactions are executed according to confirmed regional
            currency tiers, with mandatory mobilization deposits preceding
            custom technical sprints.
          </p>
        </section>
      </motion.div>
    </motion.div>
  );
}

'use client';

import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div>
        <div className="border-l-4 border-white pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DATA INTEGRITY
        </div>
        <h1 className="text-4xl font-black uppercase">Privacy Policy</h1>
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
            1. Minimal Data Collection
          </h2>
          <p>
            We only collect data explicitly entered into our contact routing
            fields, career application portals, or submitted via direct email.
          </p>
        </section>
        <section>
          <h2 className="text-[var(--text-primary)] font-bold uppercase mb-2">
            2. Local Storage First
          </h2>
          <p>
            Ecosystem utilities like dhikrly.com store preference states locally
            in your browser storage engine to maintain user privacy.
          </p>
        </section>
      </motion.div>
    </motion.div>
  );
}

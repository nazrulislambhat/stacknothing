'use client';

import { motion } from 'motion/react';

export default function RefundPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 max-w-4xl mx-auto text-xs md:text-sm leading-relaxed text-studio-text"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL & COMPLIANCE DIRECTORY // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl font-black uppercase">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs opacity-60 mt-1 font-mono">
          Last updated: September 2026
        </p>
      </div>

      <div className="brutal-box p-8 space-y-6">
        <h2 className="text-xl font-black uppercase">
          01. Milestone-Based Engagements
        </h2>
        <p className="opacity-80">
          Because StackNothing LLC operates on structured, milestone-based
          architecture sprints and MVP builds, payments are tied directly to
          deliverable sign-offs.
        </p>

        <h2 className="text-xl font-black uppercase">02. Sprint Audits</h2>
        <p className="opacity-80">
          Architecture sprint deposits are non-refundable once initial
          repository access, audit logs, and diagnostic reports have been
          transmitted to the client.
        </p>

        <h2 className="text-xl font-black uppercase">03. Disputes</h2>
        <p className="opacity-80">
          For billing inquiries or agreement adjustments, reach out directly to{' '}
          <strong className="text-studio-text">nazrul@stacknothing.com</strong>.
        </p>
      </div>
    </motion.div>
  );
}

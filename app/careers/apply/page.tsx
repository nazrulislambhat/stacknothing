'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';

function ApplyForm() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role') || 'General StackNothing Application';

  const roleTitle =
    roleParam === 'frontend-architect'
      ? 'Senior Frontend Architect'
      : roleParam === 'fullstack-engineer'
        ? 'Full Stack / Next.js Engineer'
        : 'General Studio Application';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8 text-studio-text"
    >
      <div>
        <Link
          href="/careers"
          className="text-xs font-bold uppercase tracking-wider opacity-60 hover:text-primary-brand mb-4 inline-block transition-colors"
        >
          ← BACK TO CAREERS
        </Link>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          TALENT RECRUITMENT PORTAL // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl font-black uppercase">
          Applying for: <span className="text-primary-brand">{roleTitle}</span>
        </h1>
        <p className="text-xs mt-2 opacity-80">
          Submit your technical stack profile, GitHub/portfolio links, and work
          history.
        </p>
      </div>

      <form className="brutal-box p-8 space-y-6">
        <input type="hidden" name="applied_role" value={roleTitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              FULL NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              GITHUB / PORTFOLIO URL
            </label>
            <input
              type="url"
              required
              placeholder="https://github.com/username"
              className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              PRIMARY TECH STACK
            </label>
            <input
              type="text"
              required
              placeholder="Next.js 16, TypeScript, Tailwind v4, React"
              className="w-full  border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            WHY STACKNOTHING? / EXPERIENCE SUMMARY
          </label>
          <textarea
            rows={5}
            required
            placeholder="Briefly describe your experience with modern React/Next.js architectures..."
            className="w-full  border-2 border-studio-text p-4 text-xs text-studio-text focus:outline-none focus:border-green-brand resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider bg-green-brand text-black font-bold shadow-[4px_4px_0px_var(--text-primary)]"
        >
          TRANSMIT APPLICATION ➔
        </motion.button>
      </form>
    </motion.div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={null}>
      <ApplyForm />
    </Suspense>
  );
}

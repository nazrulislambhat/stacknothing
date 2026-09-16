'use client';

import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 max-w-4xl mx-auto text-xs md:text-sm leading-relaxed text-studio-text p-6 md:p-12"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL & COMPLIANCE DIRECTORY // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs opacity-60 mt-1 font-mono">
          Effective Date: January 1, 2026 • StackNothing LLC
        </p>
      </div>

      <div className="brutal-box p-8 space-y-6 bg-studio-box border-2 border-studio-text">
        <section className="space-y-2">
          <h2 className="text-sm md:text-base font-black uppercase tracking-tight text-primary-brand">
            01. Agreement to Terms
          </h2>
          <p className="opacity-80 font-mono text-xs leading-relaxed">
            By accessing stacknothing.com, our subdomains (such as
            brand.stacknothing.com), or utilizing our digital apps and agency
            services, you agree to these legal conditions and compliance
            frameworks.
          </p>
        </section>

        <section className="space-y-2 border-t border-studio-text/20 pt-6">
          <h2 className="text-sm md:text-base font-black uppercase tracking-tight text-primary-brand">
            02. Intellectual Property & Codebases
          </h2>
          <p className="opacity-80 font-mono text-xs leading-relaxed">
            All framework codebases, UI primitives, branding assets, and design
            systems remain the exclusive property of StackNothing LLC until
            formal custom contracts assign full ownership to the client upon
            final project sign-off and milestone completion.
          </p>
        </section>

        <section className="space-y-2 border-t border-studio-text/20 pt-6">
          <h2 className="text-sm md:text-base font-black uppercase tracking-tight text-primary-brand">
            03. Governing Billing (USD, EUR & INR)
          </h2>
          <p className="opacity-80 font-mono text-xs leading-relaxed">
            All transactions are executed according to confirmed regional
            currency tiers (USD, EUR, or INR) and selected billing models
            (project-based or monthly retainer). Mandatory mobilization deposits
            must precede the initiation of custom technical sprints or design
            retainers.
          </p>
        </section>

        <section className="space-y-2 border-t border-studio-text/20 pt-6">
          <h2 className="text-sm md:text-base font-black uppercase tracking-tight text-primary-brand">
            04. Limitation of Liability
          </h2>
          <p className="opacity-80 font-mono text-xs leading-relaxed">
            StackNothing LLC provides engineering services and digital utilities
            on an &quot;as is&quot; basis during beta and standard deployments.
            We are not liable for indirect, incidental, or consequential damages
            arising from third-party hosting uptime or unapproved code
            modifications.
          </p>
        </section>

        <section className="space-y-2 border-t border-studio-text/20 pt-6">
          <h2 className="text-sm md:text-base font-black uppercase tracking-tight text-primary-brand">
            05. Legal Inquiries & Contact
          </h2>
          <p className="opacity-80 font-mono text-xs leading-relaxed">
            For any legal agreements, compliance clarifications, or custom
            contract requests, reach out directly to{' '}
            <a
              href="mailto:team@stacknothing.com"
              className="font-bold underline text-primary-brand hover:opacity-75"
            >
              team@stacknothing.com
            </a>
            .
          </p>
        </section>
      </div>
    </motion.div>
  );
}

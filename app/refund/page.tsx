'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const policySections: AccordionItem[] = [
  {
    id: '01',
    title: 'Milestone-Based Engagements & Project Deposits',
    content:
      'Because StackNothing LLC operates on structured, milestone-based architecture sprints and MVP builds, payments are tied directly to deliverable sign-offs. Initial project deposits secure dedicated engineering capacity and resource allocation. Once a project phase or milestone is officially initiated or code artifacts are deployed to staging environments, deposits for that active milestone are strictly non-refundable.',
  },
  {
    id: '02',
    title: 'Sprint Audits & Diagnostic Reports',
    content:
      'Architecture sprints, codebase overhauls, and performance diagnostics involve immediate technical asset allocation. Deposits for sprint audits become completely non-refundable once initial repository access has been established, audit logs are generated, or preliminary diagnostic reports have been transmitted to the client.',
  },
  {
    id: '03',
    title: 'Monthly Retainers & Dedicated Capacity',
    content:
      'Monthly engineering and design retainers are billed in advance to reserve dedicated senior architect capacity. Retainer fees are non-refundable for the current active billing cycle. Clients may cancel or pause future recurring retainer cycles by providing written notice at least 14 days prior to the next billing date.',
  },
  {
    id: '04',
    title: 'Cancellations & Scope Terminations',
    content:
      'Clients retain the right to terminate an active engagement at any point by providing written notice. Upon termination, the client is responsible for compensation covering all completed milestones, approved deliverables, and pro-rata engineering hours rendered up to the exact date of termination. Unused advance deposits for incomplete future milestones will be evaluated on a case-by-case basis.',
  },
  {
    id: '05',
    title: 'Disputes, Billing Inquiries & Resolution',
    content:
      'We prioritize transparent collaboration. For any billing discrepancies, invoice inquiries, or formal agreement adjustments, please reach out directly to team@stacknothing.com before initiating chargebacks or external payment disputes. We are committed to resolving financial alignment amicably.',
  },
];

export default function RefundPage() {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 mx-auto text-xs md:text-sm leading-relaxed text-studio-text md:py-12"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL & COMPLIANCE DIRECTORY // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs opacity-60 mt-1 font-mono">
          Last updated: September 2026
        </p>
      </div>

      <div className="space-y-4">
        {policySections.map((section) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              className="brutal-box border-2 border-studio-text bg-studio-box overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-primary-brand bg-studio-text/10 px-2 py-1 border border-studio-text/20">
                    {section.id}
                  </span>
                  <h2 className="text-base md:text-lg font-black uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <span className="font-mono text-base font-bold">
                  {isOpen ? '[-]' : '[+]'}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-studio-text/20 opacity-80 font-mono text-xs leading-relaxed">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct Contact Footer Box */}
      <div className="border-2 border-studio-text bg-studio-box p-6 font-mono text-xs space-y-2">
        <div className="font-bold uppercase text-red-brand">
          Need Further Clarification?
        </div>
        <p className="opacity-80">
          For any custom enterprise contracts or specific compliance inquiries,
          contact{' '}
          <a
            href="mailto:team@stacknothing.com"
            className="font-bold underline text-primary-brand hover:opacity-75"
          >
            team@stacknothing.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const privacySections: AccordionItem[] = [
  {
    id: '01',
    title: 'Information We Collect & Purpose',
    content:
      'StackNothing LLC collects minimal telemetry and direct form submission inputs (such as names, corporate email addresses, and project scope requirements) solely for project scoping, client communication, and technical onboarding during our public beta and active engagements.',
  },
  {
    id: '02',
    title: 'Cookies & Local Storage Usage',
    content:
      'We utilize browser local storage strictly for preserving user interface preferences—such as your dark/light mode state, currency selector preferences (USD, EUR, INR), and billing view configurations. No intrusive third-party behavioral advertising trackers or cross-site profiling cookies are utilized on our domains.',
  },
  {
    id: '03',
    title: 'Data Sharing & Third-Party Services',
    content:
      'We do not sell, trade, or rent your personal data to third parties. Data entered through our intake forms or project configurations is transmitted securely to our internal systems and calendar management tools (such as Cal.com) strictly to coordinate project consultations and milestone execution.',
  },
  {
    id: '04',
    title: 'Data Security & Infrastructure',
    content:
      'We implement hard-edged engineering standards across our infrastructure, utilizing encrypted HTTPS communication channels, secure hosting environments via Vercel and Cloudflare, and strict access controls to safeguard your proprietary project details.',
  },
  {
    id: '05',
    title: 'User Rights, Inquiries & Data Removal',
    content:
      'You retain full control over your personal data. For any data privacy inquiries, export requests, or immediate data removal from our systems, contact our lead engineer directly at team@stacknothing.com.',
  },
];

export default function PrivacyPage() {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8  mx-auto text-xs md:text-sm leading-relaxed text-studio-text md:py-12"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL & COMPLIANCE DIRECTORY // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs opacity-60 mt-1 font-mono">
          Last updated: September 2026
        </p>
      </div>

      <div className="space-y-4">
        {privacySections.map((section) => {
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
        <div className="font-bold uppercase text-primary-brand">
          Privacy Compliance Inquiry?
        </div>
        <p className="opacity-80">
          For any data privacy concerns or removal requests, contact{' '}
          <a
            href="mailto:team@stacknothing.com"
            className="font-bold underline text-primary-brand hover:opacity-75"
          >
            team@stacknothing.com
          </a>{' '}
          directly
        </p>
      </div>
    </motion.div>
  );
}

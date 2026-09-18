'use client';

import { motion } from 'motion/react';

interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    phase: 'PHASE 01',
    title: 'Architecture & Scope',
    duration: 'Days 1 - 3',
    description:
      'Deep dive into technical constraints, database schemas, API routing, and brutalist design system token configuration.',
  },
  {
    phase: 'PHASE 02',
    title: 'Design & Prototyping',
    duration: 'Days 4 - 10',
    description:
      'Translating product specifications into high-contrast Figma wireframes, reusable UI components, and motion primitives.',
  },
  {
    phase: 'PHASE 03',
    title: 'Core Development',
    duration: 'Days 11 - 21',
    description:
      'Rigorous Next.js 16 and TypeScript implementation with zero any declarations, server actions, and Resend pipeline wiring.',
  },
  {
    phase: 'PHASE 04',
    title: 'Testing & Vercel Edge Launch',
    duration: 'Days 22 - 28',
    description:
      'Core Web Vitals auditing, security hardening, automated Lighthouse checks, and zero-downtime production deployment.',
  },
];

export function PricingTimeline() {
  return (
    <div className="space-y-6 my-12">
      <div className="border-l-4 border-primary-brand pl-4">
        <div className="text-[10px] font-mono uppercase tracking-wider opacity-60">
          EXECUTION LIFECYCLE
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight">
          How We Build Your Project
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.phase}
            whileHover={{ y: -4 }}
            className="brutal-box p-6 border-2 border-studio-text bg-studio-box space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase">
                  {step.phase}
                </span>
                <span className="text-[10px] font-mono opacity-70 font-bold">
                  {step.duration}
                </span>
              </div>
              <h4 className="text-lg font-black uppercase tracking-tight pt-1">
                {step.title}
              </h4>
              <p className="text-xs font-mono opacity-80 leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="pt-4 border-t border-studio-text/20 text-[10px] font-mono opacity-50">
              STEP 0{index + 1} OF 04
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

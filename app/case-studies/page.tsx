'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  metric: string;
  description: string;
  stack: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '01',
    client: 'Global Healthcare Enterprise',
    industry: 'Enterprise Healthcare / Clinical Operations',
    metric: 'Sub-Second LCP & 75% Latency Drop',
    description:
      'Engineered high-performance web applications and global enterprise software modules on a mission-critical healthcare platform, streamlining clinical data flows for international stakeholders.',
    stack: 'React / TypeScript / Redux / Next.js',
  },
  {
    id: '02',
    client: 'Axelerant Digital Solutions',
    industry: 'Enterprise Web Engineering',
    metric: '99.9% Uptime & Modular Scalability',
    description:
      'Spearheaded frontend software engineering initiatives, migrating monolithic architectures into robust, component-driven interfaces using modern JavaScript frameworks and Acquia Site Studio integrations.',
    stack: 'Drupal / Acquia Site Studio / JavaScript / SASS',
  },
  {
    id: '03',
    client: 'Mehandi By Sana Ecosystem',
    industry: 'E-Commerce & Digital Branding',
    metric: 'Optimized Order Management & Conversion',
    description:
      'Architected and managed an automated e-commerce web ecosystem, streamlining catalog management, customer checkout pipelines, and digital storefront reliability.',
    stack: 'WordPress / PHP / Custom CSS / Vercel Edge',
  },
];

export default function CaseStudiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-5xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING ARCHIVE // REAL-WORLD DEPLOYMENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Client & Enterprise Case Studies
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          Documented architectural transformations, global healthcare platforms,
          and high-concurrency web systems engineered by StackNothing LLC
          leadership.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="brutal-box p-8 border-2 border-studio-text space-y-6 bg-studio-box"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-studio-text/20 pb-4">
              <div>
                <span className="text-xs font-mono opacity-60">
                  CASE STUDY // {study.id}
                </span>
                <h3 className="text-2xl font-black uppercase mt-1">
                  {study.client}
                </h3>
              </div>
              <div className="px-3 py-1 bg-green-brand text-black text-xs font-mono font-bold uppercase">
                {study.metric}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <div className="text-[10px] font-mono text-primary-brand font-bold uppercase">
                  DOMAIN: {study.industry}
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  {study.description}
                </p>
              </div>

              <div className="border-l-2 border-studio-text/20 pl-4 space-y-1 font-mono text-[11px] opacity-90">
                <div className="opacity-60 text-[10px]">TECH STACK:</div>
                <div className="font-bold">{study.stack}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Box */}
      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to achieve similar production standards?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Book an architecture sprint and let our engineering team audit your
          infrastructure.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white hover:bg-primary-brand/90 transition-colors"
        >
          Initialize Project Sprint ➔
        </Link>
      </div>
    </motion.div>
  );
}

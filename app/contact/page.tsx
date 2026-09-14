'use client';

import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8 text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DIRECT LINE & INQUIRIES
        </div>
        <h1 className="text-4xl font-black uppercase">Initiate Dialogue</h1>
        <p className="text-xs mt-2 opacity-80">
          Reach out directly via email at{' '}
          <a
            href="mailto:nazrul@stacknothing.com"
            className="text-studio-text underline font-bold"
          >
            nazrul@stacknothing.com
          </a>{' '}
          or transmit your project parameters below.
        </p>
      </div>

      {/* Beta Email Status Notice */}
      <div className="brutal-box p-4 border-2 border-red-brand bg-red-brand/5 text-xs font-mono">
        <span className="text-red-brand font-bold uppercase">
          ⚠️ BETA NOTICE:
        </span>{' '}
        Form email routing is currently in staging. If you experience any
        transmission issues, please email{' '}
        <a
          href="mailto:nazrul@stacknothing.com"
          className="underline font-bold text-studio-text"
        >
          nazrul@stacknothing.com
        </a>{' '}
        directly.
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-6 bg-studio-box flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <div className="text-[10px] opacity-60 uppercase font-bold">
            PRIMARY DIRECT EMAIL
          </div>
          <div className="text-lg text-primary-brand  uppercase">
            nazrul@stacknothing.com
          </div>
        </div>
        <a
          href="mailto:nazrul@stacknothing.com"
          className="brutal-button px-4 py-2 text-xs uppercase bg-primary-brand text-white"
        >
          Send Email ↗
        </a>
      </motion.div>

      <form className="brutal-box p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              YOUR NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              className="w-full  border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full  border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            ENGAGEMENT TIER
          </label>
          <select className="w-full  border-2 border-studio-text px-4 py-3 text-xs text-studio-text focus:outline-none focus:border-green-brand">
            <option>Sprint Audit ($2,500 / ₹95,000)</option>
            <option>MVP Product Build ($8,500+ / ₹3,50,000+)</option>
            <option>Design System Retainer ($5,000/mo / ₹1,80,000/mo)</option>
            <option>Ecosystem Partnership / General</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            PROJECT SCOPE SPECIFICATION
          </label>
          <textarea
            rows={5}
            required
            placeholder="Define technical constraints, goals, and delivery timelines..."
            className="w-full  border-2 border-studio-text p-4 text-xs text-studio-text focus:outline-none focus:border-green-brand resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider bg-green-brand text-black font-bold"
        >
          TRANSMIT MESSAGE ➔
        </motion.button>
      </form>
    </motion.div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 max-w-xl mx-auto text-studio-text px-4"
    >
      <div className="border-2 border-red-brand p-2 bg-red-brand/10 text-red-brand font-mono text-xs uppercase font-bold">
        [ERROR 404: ROUTE NOT FOUND]
      </div>

      <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">
        LOST IN THE EDGE.
      </h1>

      <p className="text-xs md:text-sm opacity-80 leading-relaxed font-mono">
        The requested system path or document index does not exist in the
        StackNothing LLC ecosystem registry.
      </p>

      <div className="pt-4">
        <Link
          href="/"
          className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white inline-block font-bold"
        >
          ← RETURN TO HOME TERMINAL
        </Link>
      </div>
    </motion.div>
  );
}

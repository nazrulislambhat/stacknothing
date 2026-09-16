'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Studio Route Error:', error);
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 max-w-xl mx-auto text-studio-text px-4 font-mono"
    >
      <div className="border-2 border-red-brand p-2 bg-red-brand/10 text-red-brand text-xs uppercase font-bold">
        [CRITICAL FAULT: RUNTIME EXCEPTION]
      </div>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
        SYSTEM EXCEPTION DETECTED.
      </h1>

      <p className="text-xs opacity-80 max-w-md mx-auto leading-relaxed">
        {error.message ||
          'An unexpected error occurred while executing server components or edge rendering pipelines.'}
      </p>

      <div className="flex gap-4 pt-4">
        <button
          onClick={() => reset()}
          className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white font-bold"
        >
          ATTEMPT RECOVERY ↻
        </button>
        <Link
          href="/"
          className="border-2 border-studio-text px-6 py-3 text-xs uppercase font-bold hover:bg-studio-text hover:text-studio-bg transition-colors"
        >
          HOME TERMINAL
        </Link>
      </div>
    </motion.div>
  );
}

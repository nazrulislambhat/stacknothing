'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';

export default function AuditPage() {
  const [url, setUrl] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analyzed, setAnalyzed] = useState<boolean>(false);

  const handleAudit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setAnalyzed(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-12 text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DIAGNOSTIC DIVISION // CORE WEB VITALS
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tight">
          Live Performance Audit
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-xl leading-relaxed opacity-80">
          Input your current production URL to simulate latency bottlenecks and
          calculate your performance acceleration score.
        </p>
      </div>

      <form
        onSubmit={handleAudit}
        className="brutal-box p-8 space-y-6 bg-studio-box"
      >
        <div>
          <label className="block text-xs font-mono uppercase font-bold mb-2 opacity-80">
            Target Production URL *
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              required
              value={url}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              placeholder="https://yourcompany.com"
              className="flex-1 p-4 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none focus:border-green-brand"
            />
            <button
              type="submit"
              disabled={isAnalyzing}
              className="brutal-button px-6 py-4 text-xs uppercase bg-primary-brand text-white font-bold tracking-wider cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isAnalyzing ? 'RUNNING DIAGNOSTIC...' : 'Run Audit ➔'}
            </button>
          </div>
        </div>
      </form>

      {analyzed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="brutal-box p-8 border-2 border-green-brand bg-green-brand/5 space-y-6"
        >
          <div className="flex justify-between items-center border-b border-studio-text/20 pb-4">
            <div>
              <span className="text-[10px] font-mono text-green-brand font-bold uppercase">
                AUDIT RESULTS FOR: {url}
              </span>
              <h3 className="text-2xl font-black uppercase mt-1">
                Performance Deficit Detected
              </h3>
            </div>
            <div className="px-3 py-1 bg-red-brand text-white text-xs font-mono font-bold uppercase">
              Score: 48 / 100 (Needs Optimization)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-4 border-2 border-studio-text bg-studio-box space-y-1">
              <div className="opacity-60 text-[10px]">
                LCP (Largest Contentful Paint)
              </div>
              <div className="text-lg font-black text-red-brand">3.8s</div>
              <div className="text-[10px] text-green-brand font-bold">
                Target: &lt; 1.2s
              </div>
            </div>
            <div className="p-4 border-2 border-studio-text bg-studio-box space-y-1">
              <div className="opacity-60 text-[10px]">
                FID (First Input Delay)
              </div>
              <div className="text-lg font-black text-red-brand">240ms</div>
              <div className="text-[10px] text-green-brand font-bold">
                Target: &lt; 50ms
              </div>
            </div>
            <div className="p-4 border-2 border-studio-text bg-studio-box space-y-1">
              <div className="opacity-60 text-[10px]">
                CLS (Cumulative Layout Shift)
              </div>
              <div className="text-lg font-black text-green-brand">0.02</div>
              <div className="text-[10px] text-green-brand font-bold">
                Optimal
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-studio-text/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono opacity-80">
              A StackNothing Next.js 16 refactor will eliminate render-blocking
              scripts and guarantee 90+ Core Web Vitals.
            </p>
            <a
              href="/contact"
              className="brutal-button px-6 py-3 text-xs uppercase bg-black text-white font-bold whitespace-nowrap"
            >
              Request Refactor Sprint ➔
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

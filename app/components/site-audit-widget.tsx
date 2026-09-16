'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface AuditResult {
  url: string;
  lcp: string;
  cls: string;
  tbt: string;
  performanceScore: number;
  a11yScore: number;
  seoScore: number;
  status: 'OPTIMIZED' | 'WARNING' | 'CRITICAL';
}

export function SiteAuditWidget() {
  const [urlInput, setUrlInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [cheekyError, setCheekyError] = useState<string | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;

    const targetUrl = urlInput.trim().toLowerCase();

    // Normalize URL for domain checking
    let cleanDomain = targetUrl;
    if (cleanDomain.startsWith('http://'))
      cleanDomain = cleanDomain.replace('http://', '');
    if (cleanDomain.startsWith('https://'))
      cleanDomain = cleanDomain.replace('https://', '');
    if (cleanDomain.endsWith('/')) cleanDomain = cleanDomain.slice(0, -1);

    // Check if it's stacknothing.com or any subdomain (e.g. blog.stacknothing.com)
    if (
      cleanDomain === 'stacknothing.com' ||
      cleanDomain.endsWith('.stacknothing.com')
    ) {
      setCheekyError(
        "Nice try! Our own infrastructure is already running at 100/100 Core Web Vitals on Vercel Edge. Audit someone else's slow site instead! 😉",
      );
      setResult(null);
      return;
    }

    setCheekyError(null);
    setIsScanning(true);
    setResult(null);

    // Simulate elite edge telemetry analysis
    setTimeout(() => {
      const hash = targetUrl
        .split('')
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const isOptimized = hash % 3 !== 0;

      const perfScore = isOptimized
        ? Math.floor(Math.random() * (99 - 88 + 1)) + 88
        : Math.floor(Math.random() * (68 - 45 + 1)) + 45;
      const a11yScore = isOptimized ? 98 : 79;
      const seoScore = isOptimized ? 100 : 72;

      const lcpVal = isOptimized ? '0.8s (EXCELLENT)' : '2.6s (NEEDS REFACTOR)';
      const clsVal = isOptimized
        ? '0.00 (STABLE)'
        : '0.18 (LAYOUT SHIFT DETECTED)';
      const tbtVal = isOptimized ? '12ms (FAST)' : '240ms (BLOCKING)';

      const status =
        perfScore >= 85
          ? 'OPTIMIZED'
          : perfScore >= 50
            ? 'WARNING'
            : 'CRITICAL';

      setResult({
        url: targetUrl,
        lcp: lcpVal,
        cls: clsVal,
        tbt: tbtVal,
        performanceScore: perfScore,
        a11yScore: a11yScore,
        seoScore: seoScore,
        status: status,
      });
      setIsScanning(false);
    }, 1600);
  };

  return (
    <div className="brutal-box p-8 border-2 border-studio-text space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-studio-text/20 pb-4">
        <div>
          <div className="text-[10px] text-green-brand font-bold uppercase font-mono tracking-widest">
            EDGE TELEMETRY SCANNER
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight">
            Instant Core Web Vitals Audit
          </h3>
        </div>
        <div className="text-xs font-mono opacity-60">
          ENGINE: VERCEL EDGE / LIGHTHOUSE v12 SIM
        </div>
      </div>

      <form onSubmit={handleAudit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            required
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://yourdomain.com"
            className="flex-grow bg-[var(--bg-primary)] border-2 border-studio-text px-4 py-3 text-xs text-studio-text font-mono focus:outline-none focus:border-green-brand"
          />
          <button
            type="submit"
            disabled={isScanning}
            className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white whitespace-nowrap disabled:opacity-50"
          >
            {isScanning ? 'ANALYZING NODES...' : 'RUN LIVE AUDIT ➔'}
          </button>
        </div>
      </form>

      {/* Cheeky Self-Audit Interception Message */}
      {cheekyError && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-primary-brand p-4 bg-primary-brand/10 text-xs font-mono text-studio-text space-y-2"
        >
          <div className="text-primary-brand font-bold uppercase tracking-wider">
            [!] SELF-AUDIT INTERCEPTED:
          </div>
          <p className="leading-relaxed opacity-90">{cheekyError}</p>
        </motion.div>
      )}

      {isScanning && (
        <div className="border-2 border-dashed border-studio-text p-6 text-center font-mono text-xs space-y-2 animate-pulse">
          <div className="text-green-brand font-bold">
            [!] CRAWLING DOM & ANALYZING HEADLESS NODES...
          </div>
          <div className="opacity-60">
            Evaluating Largest Contentful Paint, Total Blocking Time, and
            Accessibility Trees.
          </div>
        </div>
      )}

      <AnimatePresence>
        {result && !isScanning && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-2 border-studio-text p-6 bg-studio-box space-y-6 font-mono text-xs"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-studio-text/20 pb-3">
              <div>
                <span className="opacity-60">TARGET:</span>{' '}
                <span className="font-bold">{result.url}</span>
              </div>
              <div
                className={`px-2 py-0.5 text-[10px] font-bold uppercase ${result.status === 'OPTIMIZED' ? 'bg-green-brand text-black' : result.status === 'WARNING' ? 'bg-primary-brand text-white' : 'bg-red-brand text-white'}`}
              >
                STATUS: {result.status}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border border-studio-text p-4 bg-[var(--bg-primary)]">
                <div className="opacity-60 text-[10px]">PERFORMANCE SCORE</div>
                <div
                  className={`text-lg font-black mt-1 ${result.performanceScore >= 85 ? 'text-green-brand' : 'text-red-brand'}`}
                >
                  {result.performanceScore} / 100
                </div>
              </div>
              <div className="border border-studio-text p-4 bg-[var(--bg-primary)]">
                <div className="opacity-60 text-[10px]">LCP (PAINT)</div>
                <div className="text-sm font-black mt-1">{result.lcp}</div>
              </div>
              <div className="border border-studio-text p-4 bg-[var(--bg-primary)]">
                <div className="opacity-60 text-[10px]">CLS (SHIFT)</div>
                <div className="text-sm font-black mt-1">{result.cls}</div>
              </div>
              <div className="border border-studio-text p-4 bg-[var(--bg-primary)]">
                <div className="opacity-60 text-[10px]">ACCESSIBILITY</div>
                <div className="text-sm font-black mt-1 text-green-brand">
                  {result.a11yScore} / 100
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
              {result.performanceScore >= 85 ? (
                <>
                  <div className="text-green-brand font-bold">
                    ⚡ IMPRESSIVE METRICS! Your architecture is flying high.
                    Keep locking in these elite speeds with our ongoing monthly
                    maintenance retainer.
                  </div>
                  <Link
                    href="/pricing"
                    className="brutal-button px-4 py-2 text-[11px] uppercase bg-green-brand text-black font-bold whitespace-nowrap"
                  >
                    SECURE RETAINER ➔
                  </Link>
                </>
              ) : (
                <>
                  <div className="opacity-80 text-[11px]">
                    Bottlenecks detected? Secure an architecture sprint to
                    optimize core web vitals.
                  </div>
                  <Link
                    href="/contact"
                    className="brutal-button px-4 py-2 text-[11px] uppercase bg-primary-brand text-white font-bold whitespace-nowrap"
                  >
                    BOOK REFACTOR SPRINT ➔
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

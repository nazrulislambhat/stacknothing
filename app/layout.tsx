'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <title>STACKNOTHING.LLC // Agency &amp; Product Ecosystem</title>
        <meta
          name="description"
          content="Hard-edged engineering, standalone digital utilities, and high-performance agency architecture built with Next.js 16 by Stacknothing LLC."
        />
        <meta
          name="keywords"
          content="frontend architecture, nextjs agency, react development, wordpress, drupal, brutalist design, stacknothing"
        />
        <meta name="author" content="StackNothing LLC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://stacknothing.com" />
        {/* Brand Icons, Favicons & Web App Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/assets/brand/favicon/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/brand/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/brand/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/brand/app-icons/apple-touch-icon-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/assets/brand/app-icons/apple-touch-icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/brand/app-icons/apple-touch-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/brand/app-icons/apple-touch-icon-120.png"
        />
        <link
          rel="mask-icon"
          href="/assets/brand/favicon/safari-pinned-tab.svg"
          color="#1F01B9"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#FFFFFF"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000000"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="StackNothing" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0A" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stacknothing.com" />
        <meta
          property="og:title"
          content="STACKNOTHING.LLC // Agency & Product Ecosystem"
        />
        <meta
          property="og:description"
          content="Hard-edged engineering, standalone digital utilities, and high-performance agency architecture built with Next.js 16."
        />
        <meta
          property="og:image"
          content="https://stacknothing.com/assets/brand/social/headers/og-preview-dark-1200x630.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Stacknothing LLC" />
        <meta property="og:site_name" content="Stacknothing LLC" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="STACKNOTHING.LLC // Agency & Product Ecosystem"
        />
        <meta
          name="twitter:description"
          content="Hard-edged engineering, standalone digital utilities, and high-performance agency architecture built with Next.js 16."
        />
        <meta
          name="twitter:image"
          content="https://stacknothing.com/assets/brand/social/headers/og-preview-dark-1200x630.png"
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-mono min-h-screen flex flex-col justify-between brutal-grid bg-studio-bg text-studio-text"
      >
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-2 border-studio-text bg-studio-bg">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="border-2 border-primary-brand text-primary-brand  px-4 py-2 font-bold tracking-tighter uppercase text-sm]"
            >
              [STACKNOTHING]
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest relative">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-green-brand transition-colors py-2">
                  [ SERVICES ▾ ]
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 border-2 border-studio-text bg-studio-bg p-3 space-y-2 shadow-[4px_4px_0px_var(--text-primary)] z-50">
                    <Link
                      href="/services/web-dev"
                      className="block p-2 hover:bg-primary-brand hover:text-white text-[11px]"
                    >
                      🔧 Custom Web & App Dev
                    </Link>
                    <Link
                      href="/services/ecommerce"
                      className="block p-2 hover:bg-primary-brand hover:text-white text-[11px]"
                    >
                      🛒 E-commerce Platforms
                    </Link>
                    <Link
                      href="/services/mobile"
                      className="block p-2 hover:bg-primary-brand hover:text-white text-[11px]"
                    >
                      📱 Cross-Platform Apps
                    </Link>
                    <Link
                      href="/services/ui-ux"
                      className="block p-2 hover:bg-primary-brand hover:text-white text-[11px]"
                    >
                      🎨 UI/UX & Figma-to-Code
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="hover:text-red-brand transition-colors"
              >
                [ PORTFOLIO ]
              </Link>

              <Link
                href="/#ecosystem"
                className="hover:text-primary-brand transition-colors"
              >
                [ ECOSYSTEM ]
              </Link>
              <Link
                href="/pricing"
                className="hover:text-red-brand transition-colors"
              >
                [ PRICING ]
              </Link>

              <Link
                href="/careers"
                className="hover:text-red-brand transition-colors"
              >
                [ CAREERS ]
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="border-2 cursor-pointer border-studio-text px-3 py-2 text-xs uppercase font-bold shadow-[2px_2px_0px_var(--text-primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all bg-studio-bg text-studio-text"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              <Link
                href="/contact"
                className="brutal-button px-4 py-2 text-xs uppercase tracking-wider hidden sm:inline-block bg-red-brand text-white"
              >
                INITIALIZE ↗
              </Link>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden border-2 border-studio-text p-2 bg-studio-bg text-studio-text font-bold text-xs"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? '✕ CLOSE' : '☰ MENU'}
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Menu Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t-2 border-studio-text bg-studio-bg p-6 space-y-4 font-bold uppercase text-xs"
              >
                <div className="text-zinc-500 text-[10px]">
                  NAVIGATION DIRECTORY
                </div>

                <div className="space-y-2 border-b border-studio-text/20 pb-4">
                  <div className="text-primary-brand">Services:</div>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/web-dev"
                    className="block pl-4 py-1"
                  >
                    🔧 Custom Web & App Dev
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/ecommerce"
                    className="block pl-4 py-1"
                  >
                    🛒 E-commerce Platforms
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/mobile"
                    className="block pl-4 py-1"
                  >
                    📱 Cross-Platform Apps
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/ui-ux"
                    className="block pl-4 py-1"
                  >
                    🎨 UI/UX & Figma-to-Code
                  </Link>
                </div>

                <div className="flex flex-col space-y-3 pt-2">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/portfolio"
                    className="hover:text-red-brand"
                  >
                    [ PORTFOLIO ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/roadmap"
                    className="hover:text-green-brand"
                  >
                    [ ROADMAP ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/#ecosystem"
                    className="hover:text-primary-brand"
                  >
                    [ ECOSYSTEM ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/pricing"
                    className="hover:text-red-brand"
                  >
                    [ PRICING ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/partners"
                    className="hover:text-green-brand"
                  >
                    [ PARTNERS ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/careers"
                    className="hover:text-red-brand"
                  >
                    [ CAREERS ]
                  </Link>
                </div>

                <div className="pt-4 border-t border-studio-text/20">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/contact"
                    className="brutal-button block text-center py-3 bg-primary-brand text-white"
                  >
                    INITIALIZE PROJECT ↗
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow py-12 max-w-7xl mx-auto w-full px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-studio-text bg-studio-bg py-8 text-xs font-mono">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Status & Copyright */}
            <div className="space-y-2">
              <div className="border-2 border-studio-text px-3 py-1 bg-studio-box text-green-brand font-bold inline-block">
                STATUS: ALL SYSTEMS OPERATIONAL [BETA]
              </div>
              <div className="text-zinc-500 text-[10px]">
                © 2026 STACKNOTHING LLC. ALL RIGHTS RESERVED.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://x.com/stacknothing"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="border-2 border-studio-text p-2 bg-studio-box hover:bg-primary-brand hover:text-white transition-colors flex items-center justify-center shadow-[2px_2px_0px_var(--text-primary)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/stacknothing"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="border-2 border-studio-text p-2 bg-studio-box hover:bg-red-brand hover:text-white transition-colors flex items-center justify-center shadow-[2px_2px_0px_var(--text-primary)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/company/stacknothing"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="border-2 border-studio-text p-2 bg-studio-box hover:bg-primary-brand hover:text-white transition-colors flex items-center justify-center shadow-[2px_2px_0px_var(--text-primary)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://github.com/stacknothing"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="border-2 border-studio-text p-2 bg-studio-box hover:bg-green-brand hover:text-black transition-colors flex items-center justify-center shadow-[2px_2px_0px_var(--text-primary)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            {/* Legal & Navigation Links */}
            <div className="flex flex-wrap gap-4 uppercase font-bold opacity-80">
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <span>/</span>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <span>/</span>
              <Link href="/refund" className="hover:underline">
                Refunds
              </Link>
              <span>/</span>
              <Link href="/partners" className="hover:underline">
                Partners
              </Link>
              <span>/</span>
              <Link href="/roadmap" className="hover:underline">
                Roadmap
              </Link>
              <span>/</span>
              <Link href="/brand" className="hover:underline">
                Brand
              </Link>
              <span>/</span>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

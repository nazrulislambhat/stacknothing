'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface SiteHeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function SiteHeader({ theme, toggleTheme }: SiteHeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-studio-text bg-studio-bg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="border-2 border-studio-text bg-studio-box px-3 py-2 flex items-center gap-2 shadow-[4px_4px_0px_var(--text-primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all font-bold tracking-tighter uppercase text-xs text-studio-text"
          >
            [STACKNOTHING]
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-widest relative">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-green-brand transition-colors py-2 cursor-pointer">
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
                  <Link
                    href="/services/refactoring"
                    className="block p-2 hover:bg-primary-brand hover:text-white text-[11px]"
                  >
                    ⚡ Legacy Refactoring
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
              href="/audit"
              className="hover:text-green-brand transition-colors"
            >
              [ AUDIT ]
            </Link>
            <Link
              href="/tokens"
              className="hover:text-primary-brand transition-colors"
            >
              [ TOKENS ]
            </Link>
            <Link
              href="/pricing"
              className="hover:text-green-brand transition-colors"
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
            {/* Direct Cal.com URL Button (Desktop) */}
            <a
              href="https://cal.com/stacknothing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block border-2 border-studio-text px-3 py-2 text-[10px] uppercase font-bold font-mono bg-red-brand text-white shadow-[2px_2px_0px_var(--text-primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              Book Call ↗
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="border-2 border-studio-text px-3 py-2 text-xs uppercase font-bold shadow-[2px_2px_0px_var(--text-primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all bg-studio-bg text-studio-text cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden border-2 cursor-pointer border-studio-text p-2 bg-studio-bg text-studio-text font-bold text-xs"
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
              <div className="opacity-60 text-[10px]">NAVIGATION DIRECTORY</div>

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
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/services/refactoring"
                  className="block pl-4 py-1"
                >
                  ⚡ Legacy Refactoring
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
                  href="/audit"
                  className="hover:text-green-brand"
                >
                  [ AUDIT ]
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/tokens"
                  className="hover:text-primary-brand"
                >
                  [ TOKENS ]
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
                  href="/careers"
                  className="hover:text-red-brand"
                >
                  [ CAREERS ]
                </Link>
              </div>

              <div className="pt-4 border-t border-studio-text/20 space-y-2">
                <a
                  href="https://cal.com/stacknothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-button block w-full cursor-pointer text-center py-3 bg-red-brand text-white font-bold uppercase"
                >
                  Book Cal.com Call ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

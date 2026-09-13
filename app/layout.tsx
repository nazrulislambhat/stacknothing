'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import './globals.css';

// Runs synchronously in <head>, before React hydrates, so there's no flash of the wrong theme.
const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('stacknothing_theme');
      var isDark = stored ? stored === 'dark' : true;
      document.documentElement.classList.toggle('dark', isDark);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('stacknothing_theme') as
      | 'dark'
      | 'light'
      | null;
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('stacknothing_theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <title>STACKNOTHING LLC // Agency & Product Ecosystem</title>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="font-mono min-h-screen flex flex-col justify-between brutal-grid bg-studio-bg text-studio-text"
        suppressHydrationWarning
      >
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-2 border-studio-text bg-studio-bg">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="border-2 border-studio-text bg-studio-text text-studio-bg px-4 py-2 font-bold tracking-tighter uppercase text-sm shadow-[4px_4px_0px_#00FF66]"
            >
              [STACKNOTHING.]
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest relative">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#FF007F] transition-colors py-2">
                  [ SERVICES ▾ ]
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 border-2 border-studio-text bg-studio-bg p-3 space-y-2 shadow-[4px_4px_0px_var(--text-primary)] z-50">
                    <Link
                      href="/services/web-dev"
                      className="block p-2 hover:bg-studio-text hover:text-studio-bg text-[11px]"
                    >
                      🔧 Custom Web & App Dev
                    </Link>
                    <Link
                      href="/services/ecommerce"
                      className="block p-2 hover:bg-studio-text hover:text-studio-bg text-[11px]"
                    >
                      🛒 E-commerce Platforms
                    </Link>
                    <Link
                      href="/services/mobile"
                      className="block p-2 hover:bg-studio-text hover:text-studio-bg text-[11px]"
                    >
                      📱 Cross-Platform Apps
                    </Link>
                    <Link
                      href="/services/ui-ux"
                      className="block p-2 hover:bg-studio-text hover:text-studio-bg text-[11px]"
                    >
                      🎨 UI/UX & Figma-to-Code
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="hover:text-[#FF007F] transition-colors"
              >
                [ PORTFOLIO ]
              </Link>

              <Link
                href="/#ecosystem"
                className="hover:text-[#00FF66] transition-colors"
              >
                [ ECOSYSTEM ]
              </Link>
              <Link
                href="/pricing"
                className="hover:text-[#00E5FF] transition-colors"
              >
                [ PRICING ]
              </Link>

              <Link
                href="/careers"
                className="hover:text-[#FF007F] transition-colors"
              >
                [ CAREERS ]
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="border-2 border-studio-text px-3 py-2 text-xs uppercase font-bold shadow-[2px_2px_0px_var(--text-primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all bg-studio-bg text-studio-text"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              <Link
                href="/contact"
                className="brutal-button px-4 py-2 text-xs uppercase tracking-wider hidden sm:inline-block"
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
                  <div className="text-[#FF007F]">Services:</div>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/web-dev"
                    className="block  py-1"
                  >
                    🔧 Custom Web & App Dev
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/ecommerce"
                    className="block  py-1"
                  >
                    🛒 E-commerce Platforms
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/mobile"
                    className="block  py-1"
                  >
                    📱 Cross-Platform Apps
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/services/ui-ux"
                    className="block  py-1"
                  >
                    🎨 UI/UX & Figma-to-Code
                  </Link>
                </div>

                <div className="flex flex-col space-y-3 pt-2">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/portfolio"
                    className="hover:text-[#FF007F]"
                  >
                    [ PORTFOLIO ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/roadmap"
                    className="hover:text-yellow-400"
                  >
                    [ ROADMAP ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/#ecosystem"
                    className="hover:text-[#00FF66]"
                  >
                    [ ECOSYSTEM ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/pricing"
                    className="hover:text-[#00E5FF]"
                  >
                    [ PRICING ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/partners"
                    className="hover:text-yellow-400"
                  >
                    [ PARTNERS ]
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/careers"
                    className="hover:text-[#FF007F]"
                  >
                    [ CAREERS ]
                  </Link>
                </div>

                <div className="pt-4 border-t border-studio-text/20">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/contact"
                    className="brutal-button block text-center py-3 bg-[#00FF66] text-black"
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
            <div className="border-2 border-studio-text px-3 py-1 bg-studio-box text-emerald-500 font-bold">
              STATUS: ALL SYSTEMS OPERATIONAL [BETA]
            </div>
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

'use client';

import { useState } from 'react';
import Link from 'next/link';

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-white bg-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="border-2 border-white bg-white text-black px-4 py-2 font-bold tracking-tighter uppercase text-sm shadow-[4px_4px_0px_#00FF66]"
        >
          [STACKNOTHING.]
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest relative">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#FF007F] transition-colors py-2">
              [ SERVICES ▾ ]
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 border-2 border-black dark:border-white bg-white dark:bg-black p-3 space-y-2 shadow-[4px_4px_0px_currentColor]">
                <Link
                  href="/services/web-dev"
                  className="block p-2 hover:bg-black hover:text-white dark:hover:bg-white text-black text-[11px]"
                >
                  🔧 Custom Web & App Dev
                </Link>
                <Link
                  href="/services/ecommerce"
                  className="block p-2 hover:bg-black hover:text-white dark:hover:bg-white text-black text-[11px]"
                >
                  🛒 E-commerce Platforms
                </Link>
                <Link
                  href="/services/mobile"
                  className="block p-2 hover:bg-black hover:text-white dark:hover:bg-white text-black text-[11px]"
                >
                  📱 Cross-Platform Apps
                </Link>
                <Link
                  href="/services/ui-ux"
                  className="block p-2 hover:bg-black hover:text-white dark:hover:bg-white text-black text-[11px]"
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
            href="/roadmap"
            className="hover:text-yellow-400 transition-colors"
          >
            [ ROADMAP ]
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
            href="/partners"
            className="hover:text-yellow-400 transition-colors"
          >
            [ PARTNERS ]
          </Link>
          <Link
            href="/careers"
            className="hover:text-[#FF007F] transition-colors"
          >
            [ CAREERS ]
          </Link>
        </nav>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <title>STACKNOTHING LLC // Agency &amp; Product Ecosystem</title>
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
          content="STACKNOTHING LLC // Agency & Product Ecosystem"
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
          content="STACKNOTHING LLC // Agency & Product Ecosystem"
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
        <SiteHeader theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow py-12 max-w-7xl mx-auto w-full px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

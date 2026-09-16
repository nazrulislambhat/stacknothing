'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const BRAND = '/assets/brand';

type AssetCategory = 'logos' | 'icons' | 'social' | 'wallpapers';
type Filter = 'all' | AssetCategory;

interface Download {
  /** Shown on the button. Says what you get, not "download". */
  label: string;
  href: string;
  /** Flagged on the primary/recommended file in a set. */
  primary?: boolean;
}

interface BrandAsset {
  id: string;
  title: string;
  category: AssetCategory;
  /** Plain-language note on when to reach for this. */
  note: string;
  specs: string;
  /** Preview pair — the light one shows on light theme, dark on dark. */
  previewLight: string;
  previewDark: string;
  /** Preview intrinsic size, so Next/Image can reserve space and avoid CLS. */
  previewW: number;
  previewH: number;
  downloads: Download[];
  bundle?: string;
}

const CATEGORY_LABELS: Record<Filter, string> = {
  all: 'Everything',
  logos: 'Logos',
  icons: 'Icons & favicons',
  social: 'Social',
  wallpapers: 'Wallpapers',
};

const assets: BrandAsset[] = [
  {
    id: 'logo-horizontal',
    title: 'Primary logo',
    category: 'logos',
    note: 'The default lockup. Use this unless the space is square.',
    specs: 'SVG vector · 6577 × 1003 PNG',
    previewLight: `${BRAND}/previews/logo-horizontal-light.webp`,
    previewDark: `${BRAND}/previews/logo-horizontal-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'SVG for light backgrounds',
        href: `${BRAND}/logo/logo-horizontal-light.svg`,
        primary: true,
      },
      {
        label: 'SVG for dark backgrounds',
        href: `${BRAND}/logo/logo-horizontal-dark.svg`,
      },
      {
        label: 'PNG 4K, light backgrounds',
        href: `${BRAND}/logo/logo-horizontal-light-4k.png`,
      },
      {
        label: 'PNG 4K, dark backgrounds',
        href: `${BRAND}/logo/logo-horizontal-dark-4k.png`,
      },
    ],
    bundle: `${BRAND}/bundles/stacknothing-logo.zip`,
  },
  {
    id: 'logo-stacked',
    title: 'Stacked logo',
    category: 'logos',
    note: 'Icon above the wordmark, for square and narrow placements.',
    specs: '3381 × 2010 PNG',
    previewLight: `${BRAND}/previews/logo-stacked-light.webp`,
    previewDark: `${BRAND}/previews/logo-stacked-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'PNG for light backgrounds',
        href: `${BRAND}/logo/logo-stacked-light-4k.png`,
        primary: true,
      },
      {
        label: 'PNG for dark backgrounds',
        href: `${BRAND}/logo/logo-stacked-dark-4k.png`,
      },
    ],
  },
  {
    id: 'icon-mark',
    title: 'Icon mark',
    category: 'logos',
    note: 'The orbit mark on its own, with a transparent background.',
    specs: 'SVG vector · 4096 × 4096 PNG',
    previewLight: `${BRAND}/previews/icon-mark-light.webp`,
    previewDark: `${BRAND}/previews/icon-mark-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'SVG, blue',
        href: `${BRAND}/logo/icon-mark-blue.svg`,
        primary: true,
      },
      { label: 'SVG, white', href: `${BRAND}/logo/icon-mark-white.svg` },
      {
        label: 'PNG 4096, blue',
        href: `${BRAND}/logo/icon-mark-blue-4096.png`,
      },
      {
        label: 'PNG 4096, white',
        href: `${BRAND}/logo/icon-mark-white-4096.png`,
      },
    ],
  },
  {
    id: 'favicons',
    title: 'Favicons',
    category: 'icons',
    note: 'A simplified mark — the fine detail cannot resolve at tab size.',
    specs: '16, 32, 48 px · ICO · SVG',
    previewLight: `${BRAND}/previews/favicon-light.webp`,
    previewDark: `${BRAND}/previews/favicon-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'Full favicon set',
        href: `${BRAND}/bundles/stacknothing-favicon.zip`,
        primary: true,
      },
      { label: 'favicon.svg', href: `${BRAND}/favicon/favicon.svg` },
      { label: 'favicon.ico', href: `${BRAND}/favicon/favicon.ico` },
      {
        label: 'Safari pinned tab',
        href: `${BRAND}/favicon/safari-pinned-tab.svg`,
      },
    ],
  },
  {
    id: 'app-icons',
    title: 'App icons',
    category: 'icons',
    note: 'Apple touch, Android and PWA sizes, including maskable variants.',
    specs: '120–4096 px · includes web manifest',
    previewLight: `${BRAND}/previews/app-icons-light.webp`,
    previewDark: `${BRAND}/previews/app-icons-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'Full app icon set',
        href: `${BRAND}/bundles/stacknothing-app-icons.zip`,
        primary: true,
      },
      {
        label: 'Apple touch icon, 180 px',
        href: `${BRAND}/app-icons/apple-touch-icon-180.png`,
      },
      {
        label: 'Store master, 1024 px',
        href: `${BRAND}/app-icons/app-icon-1024-dark-bg.png`,
      },
    ],
  },
  {
    id: 'profile',
    title: 'Profile pictures',
    category: 'social',
    note: 'Padded for the circular crop every platform applies.',
    specs: '1024 px upload-ready · 4096 px master',
    previewLight: `${BRAND}/previews/profile-light.webp`,
    previewDark: `${BRAND}/previews/profile-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'Blue background, 1024 px',
        href: `${BRAND}/social/profile/profile-picture-blue-bg-1024.png`,
        primary: true,
      },
      {
        label: 'White background, 1024 px',
        href: `${BRAND}/social/profile/profile-picture-white-bg-1024.png`,
      },
      {
        label: 'Blue background, 4096 px',
        href: `${BRAND}/social/profile/profile-picture-blue-bg-4096.png`,
      },
    ],
  },
  {
    id: 'headers',
    title: 'Social headers',
    category: 'social',
    note: 'X, LinkedIn, Facebook and YouTube, each sized to spec and kept clear of avatar overlap.',
    specs: 'Platform sizes plus 2× versions',
    previewLight: `${BRAND}/previews/headers-light.webp`,
    previewDark: `${BRAND}/previews/headers-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'All headers and profile pictures',
        href: `${BRAND}/bundles/stacknothing-social.zip`,
        primary: true,
      },
      {
        label: 'X header, 1500 × 500',
        href: `${BRAND}/social/headers/x-twitter-header-dark-1500x500.png`,
      },
      {
        label: 'LinkedIn banner, 1584 × 396',
        href: `${BRAND}/social/headers/linkedin-personal-banner-dark-1584x396.png`,
      },
      {
        label: 'YouTube art, 4K',
        href: `${BRAND}/social/headers/youtube-channel-art-dark-3840x2160-4k.png`,
      },
    ],
  },
  {
    id: 'og-card',
    title: 'Link preview card',
    category: 'social',
    note: 'The Open Graph image that shows when the site is shared.',
    specs: '1200 × 630 · 2400 × 1260 at 2×',
    previewLight: `${BRAND}/previews/og-light.webp`,
    previewDark: `${BRAND}/previews/og-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: 'Dark card, 1200 × 630',
        href: `${BRAND}/social/headers/og-preview-dark-1200x630.png`,
        primary: true,
      },
      {
        label: 'Light card, 1200 × 630',
        href: `${BRAND}/social/headers/og-preview-light-1200x630.png`,
      },
    ],
  },
  {
    id: 'wallpaper',
    title: 'Wallpaper',
    category: 'wallpapers',
    note: 'Left side kept quiet so desktop icons stay readable.',
    specs: '1920 × 1080 · 3840 × 2160',
    previewLight: `${BRAND}/previews/wallpaper-light.webp`,
    previewDark: `${BRAND}/previews/wallpaper-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: '4K, dark',
        href: `${BRAND}/wallpapers/wallpaper-dark-3840x2160-4k.png`,
        primary: true,
      },
      {
        label: '4K, light',
        href: `${BRAND}/wallpapers/wallpaper-light-3840x2160-4k.png`,
      },
      {
        label: 'Full HD, dark',
        href: `${BRAND}/wallpapers/wallpaper-dark-1920x1080-fullhd.png`,
      },
      {
        label: 'Full HD, light',
        href: `${BRAND}/wallpapers/wallpaper-light-1920x1080-fullhd.png`,
      },
    ],
    bundle: `${BRAND}/bundles/stacknothing-wallpapers.zip`,
  },
  {
    id: 'wallpaper-mark',
    title: 'Wallpaper, mark only',
    category: 'wallpapers',
    note: 'Same layout without the wordmark.',
    specs: '1920 × 1080 · 3840 × 2160',
    previewLight: `${BRAND}/previews/wallpaper-mark-light.webp`,
    previewDark: `${BRAND}/previews/wallpaper-mark-dark.webp`,
    previewW: 900,
    previewH: 500,
    downloads: [
      {
        label: '4K, dark',
        href: `${BRAND}/wallpapers/wallpaper-mark-only-dark-3840x2160-4k.png`,
        primary: true,
      },
      {
        label: '4K, light',
        href: `${BRAND}/wallpapers/wallpaper-mark-only-light-3840x2160-4k.png`,
      },
    ],
  },
];

const PALETTE = [
  { name: 'Primary', hex: '#1F01B9', token: '--color-primary-brand' },
  { name: 'Red', hex: '#DB4A2B', token: '--color-brand-red' },
  { name: 'Green', hex: '#B2D12E', token: '--color-brand-green' },
  { name: 'Third', hex: '#3D155F', token: '--color-brand-third' },
];

export default function BrandAssetsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredAssets =
    filter === 'all'
      ? assets
      : assets.filter((asset) => asset.category === filter);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 text-studio-text md:p-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-studio-text pb-8">
        <div>
          <p className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            Brand assets
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Logos, icons and graphics
          </h1>
          <p className="text-xs md:text-sm mt-3 max-w-[60ch] leading-relaxed opacity-80">
            Approved files for press, collaborators and partner integrations.
            Every logo ships as vector where possible, and raster files are
            rendered at full size rather than scaled up.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`${BRAND}/stacknothing-brand-kit-4k.zip`}
            download
            className="brutal-button px-4 py-2.5 text-xs uppercase bg-primary-brand text-white font-mono font-bold"
          >
            Download the whole kit
          </a>
          <Link
            href="/"
            className="brutal-button px-4 py-2.5 text-xs uppercase bg-studio-text text-studio-bg font-mono font-bold"
          >
            Back to studio
          </Link>
        </div>
      </header>

      {/* Palette */}
      <section aria-labelledby="palette-heading" className="space-y-4">
        <h2
          id="palette-heading"
          className="text-sm font-black uppercase tracking-wider"
        >
          Colour
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0">
          {PALETTE.map((swatch) => (
            <li
              key={swatch.hex}
              className="border-2 border-studio-text bg-studio-box"
            >
              <div
                className="h-20 border-b-2 border-studio-text"
                style={{ backgroundColor: swatch.hex }}
              />
              <div className="p-3 font-mono text-[11px] space-y-1">
                <div className="font-bold uppercase">{swatch.name}</div>
                <button
                  type="button"
                  onClick={() => copyHex(swatch.hex)}
                  className="underline decoration-dotted hover:text-primary-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brand"
                >
                  {copied === swatch.hex ? 'Copied' : swatch.hex}
                  <span className="sr-only"> — copy {swatch.name} hex</span>
                </button>
                <div className="opacity-60 break-all">{swatch.token}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Filters */}
      <section aria-labelledby="files-heading" className="space-y-6">
        <h2
          id="files-heading"
          className="text-sm font-black uppercase tracking-wider"
        >
          Files
        </h2>

        <div
          role="group"
          aria-label="Filter assets by category"
          className="flex flex-wrap gap-2 font-mono text-xs font-bold"
        >
          {(Object.keys(CATEGORY_LABELS) as Filter[]).map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`px-4 py-2 uppercase border-2 border-studio-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brand ${
                  isActive
                    ? 'bg-primary-brand text-white shadow-[2px_2px_0px_var(--text-primary)]'
                    : 'bg-studio-box hover:opacity-75'
                }`}
              >
                {CATEGORY_LABELS[category]}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
          {filteredAssets.map((asset) => (
            <motion.li
              key={asset.id}
              layout
              className="brutal-box p-6 flex flex-col gap-6 border-2 border-studio-text bg-studio-box"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase">
                    {CATEGORY_LABELS[asset.category]}
                  </span>
                  <span className="text-[11px] font-mono opacity-60 text-right">
                    {asset.specs}
                  </span>
                </div>

                {/* Preview — light file on light theme, dark file on dark */}
                <div className="w-full border-2 border-studio-text bg-studio-bg overflow-hidden">
                  <Image
                    src={asset.previewLight}
                    alt={`${asset.title} shown on a light background`}
                    width={asset.previewW}
                    height={asset.previewH}
                    className="w-full h-auto block dark:hidden"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw"
                  />
                  <Image
                    src={asset.previewDark}
                    alt={`${asset.title} shown on a dark background`}
                    width={asset.previewW}
                    height={asset.previewH}
                    className="w-full h-auto hidden dark:block"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase mb-1">
                    {asset.title}
                  </h3>
                  <p className="text-xs font-mono opacity-70 leading-relaxed">
                    {asset.note}
                  </p>
                </div>
              </div>

              <ul className="mt-auto space-y-2 list-none p-0">
                {asset.downloads.map((file) => (
                  <li key={file.href}>
                    <a
                      href={file.href}
                      download
                      className={`block text-center py-2.5 px-3 text-[11px] uppercase font-bold tracking-wide border-2 border-studio-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brand ${
                        file.primary
                          ? 'brutal-button bg-green-brand text-black'
                          : 'bg-studio-bg text-studio-text hover:bg-primary-brand hover:text-white'
                      }`}
                    >
                      {file.label}
                      <span className="sr-only"> — {asset.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Guidelines */}
      <section
        aria-labelledby="usage-heading"
        className="border-2 border-studio-text bg-studio-box p-6 font-mono text-xs space-y-3"
      >
        <h2
          id="usage-heading"
          className="font-bold uppercase text-red-brand text-sm"
        >
          How to use these
        </h2>
        <ul className="opacity-80 leading-relaxed space-y-2 list-disc pl-5">
          <li>
            Reach for the SVG first. It stays sharp at any size and keeps file
            weight down.
          </li>
          <li>
            Keep clear space around the mark roughly equal to the gap between
            the ring and the wordmark.
          </li>
          <li>
            Do not stretch, rotate, recolour or add effects to the logo, and do
            not rebuild the lockup with different spacing.
          </li>
          <li>
            Use the light files on light backgrounds and the dark files on dark
            ones, rather than placing either on a busy photograph.
          </li>
        </ul>
        <p className="opacity-80 leading-relaxed pt-1">
          These files are free to use for media coverage, community projects and
          partner integrations. Anything that implies a partnership or
          endorsement needs written permission first —{' '}
          <Link
            href="/contact"
            className="underline hover:text-primary-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brand"
          >
            get in touch
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

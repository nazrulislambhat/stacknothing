'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

type AssetCategory = 'all' | 'logos' | 'wallpapers' | 'icons' | 'images';

interface BrandAsset {
  title: string;
  category: 'logos' | 'wallpapers' | 'icons' | 'images';
  dimensions: string;
  format: string;
  previewBg?: string;
  downloadUrl: string;
}

const assets: BrandAsset[] = [
  {
    title: 'Studio Primary Logo (SVG)',
    category: 'logos',
    dimensions: 'Vector / Scalable',
    format: 'SVG / PNG',
    downloadUrl: '/assets/brand/stacknothing-logo-primary.svg',
  },
  {
    title: 'Fossnoobs Badge / Icon',
    category: 'logos',
    dimensions: '512 x 512 px',
    format: 'PNG',
    downloadUrl: '/assets/brand/fossnoobs-badge.png',
  },
  {
    title: 'Brutalist Linux Wallpaper (Dark)',
    category: 'wallpapers',
    dimensions: '3840 x 2160 px',
    format: '4K PNG',
    downloadUrl: '/assets/brand/wallpaper-dark-4k.png',
  },
  {
    title: 'Neon Green Minimal Wallpaper',
    category: 'wallpapers',
    dimensions: '3840 x 2160 px',
    format: '4K PNG',
    downloadUrl: '/assets/brand/wallpaper-neon-4k.png',
  },
  {
    title: 'Extension Icon Set (16/48/128)',
    category: 'icons',
    dimensions: 'Multiple Sizes',
    format: 'ZIP / PNG',
    downloadUrl: '/assets/brand/extension-icons-bundle.zip',
  },
  {
    title: 'Studio Device Mockup Image',
    category: 'images',
    dimensions: '1920 x 1080 px',
    format: 'WEBP',
    downloadUrl: '/assets/brand/studio-hero-mockup.webp',
  },
];

export default function BrandAssetsPage() {
  const [filter, setFilter] = useState<AssetCategory>('all');

  const filteredAssets =
    filter === 'all'
      ? assets
      : assets.filter((asset) => asset.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto space-y-12 text-studio-text p-6 md:p-12"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-studio-text pb-8">
        <div>
          <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            PUBLIC ASSET REPOSITORY // BRAND.STACKNOTHING.COM
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Brand Guidelines & Assets
          </h1>
          <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
            Official logos, wallpapers, icons, and graphic resources for press,
            collaborators, and community projects. Download approved assets
            below.
          </p>
        </div>

        <Link
          href="https://stacknothing.com"
          className="brutal-button px-4 py-2.5 text-xs uppercase bg-studio-text text-studio-bg font-mono font-bold"
        >
          ← Back to Main Studio
        </Link>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
        {(
          ['all', 'logos', 'wallpapers', 'icons', 'images'] as AssetCategory[]
        ).map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 uppercase border-2 border-studio-text transition-colors ${
              filter === category
                ? 'bg-primary-brand text-white shadow-[2px_2px_0px_var(--text-primary)]'
                : 'bg-studio-box hover:opacity-75'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text bg-studio-box space-y-6"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase">
                  {asset.category}
                </span>
                <span className="text-xs font-mono opacity-60">
                  {asset.format}
                </span>
              </div>

              {/* Visual Preview Box */}
              <div className="w-full h-40 border-2 border-studio-text bg-studio-bg flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <span className="font-mono text-xs uppercase opacity-75 group-hover:scale-105 transition-transform">
                  [ {asset.category} preview ]
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black uppercase mb-1">
                  {asset.title}
                </h3>
                <p className="text-xs font-mono opacity-70">
                  Specs: {asset.dimensions}
                </p>
              </div>
            </div>

            <a
              href={asset.downloadUrl}
              download
              className="brutal-button block text-center py-3 text-xs uppercase bg-green-brand text-black font-bold tracking-wide"
            >
              Download Asset ➔
            </a>
          </motion.div>
        ))}
      </div>

      {/* Usage Guidelines Note */}
      <div className="border-2 border-studio-text bg-studio-box p-6 font-mono text-xs space-y-2">
        <div className="font-bold uppercase text-red-brand">Usage Policy:</div>
        <p className="opacity-80 leading-relaxed">
          These assets are provided for community use, media features, and
          partner integrations. Please do not alter, distort, or misrepresent
          logos or official branding elements without explicit written
          permission.
        </p>
      </div>
    </motion.div>
  );
}

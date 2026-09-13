import Link from 'next/link';

export default function EcommerceService() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="border-l-4 border-[#00E5FF] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 02
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          E-Commerce Platforms
        </h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
        <p>
          High-conversion digital storefronts built on headless architectures.
          Whether you need a lightning-fast **Headless WooCommerce** setup or a
          custom Shopify integration, we maximize checkout speed and eliminate
          cart abandonment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/20">
          <div>
            <h3 className="text-white font-black uppercase mb-2">Tech Stack</h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Headless WooCommerce & REST/GraphQL API</li>
              <li>✓ Custom Shopify Storefront API integrations</li>
              <li>✓ Secure payment gateway pipelines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase mb-2">
              Performance Focus
            </h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Instant product listing navigation</li>
              <li>✓ Optimized checkout funnels</li>
              <li>✓ Inventory synchronization systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-[#00E5FF] text-black font-bold"
        >
          Launch Storefront ➔
        </Link>
      </div>
    </div>
  );
}

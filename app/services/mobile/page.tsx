import Link from 'next/link';

export default function MobileService() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 03
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Cross-Platform Mobile Apps
        </h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
        <p>
          Deploy native-feeling applications across iOS and Android from a
          single unified codebase utilizing **React Native** and **Capacitor**,
          saving months of redundant engineering overhead.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/20">
          <div>
            <h3 className="text-white font-black uppercase mb-2">Frameworks</h3>
            <ul className="space-y-2 font-mono">
              <li>✓ React Native & Expo workflows</li>
              <li>✓ Ionic Capacitor hybrid bridges</li>
              <li>✓ Offline-first local data storage</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase mb-2">
              Native Capabilities
            </h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Push notification systems</li>
              <li>✓ Camera & biometric hardware hooks</li>
              <li>✓ App store deployment assistance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-[#FF007F] text-white font-bold"
        >
          Build Mobile App ➔
        </Link>
      </div>
    </div>
  );
}

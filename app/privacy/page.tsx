export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <div className="border-l-4 border-white pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DATA INTEGRITY
        </div>
        <h1 className="text-4xl font-black uppercase">Privacy Policy</h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-xs text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            1. Minimal Data Collection
          </h2>
          <p>
            We only collect data explicitly entered into our contact routing
            fields or submitted via project inquiry portals.
          </p>
        </section>
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            2. Local Storage First
          </h2>
          <p>
            Ecosystem utilities like dhikrly.com store preference states locally
            in your browser storage engine to maintain user privacy.
          </p>
        </section>
      </div>
    </div>
  );
}

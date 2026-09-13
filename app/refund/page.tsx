export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <div className="border-l-4 border-white pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          FINANCIAL POLICY
        </div>
        <h1 className="text-4xl font-black uppercase">Refund Policy</h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-xs text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            1. Agency Sprints & Deposits
          </h2>
          <p>
            Initial 50% project mobilization deposits lock in custom engineering
            hours and are non-refundable once development commences.
          </p>
        </section>
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            2. Digital Product Upgrades
          </h2>
          <p>
            Paid upgrades on ecosystem applications are eligible for refund
            requests within 7 days of initial processing.
          </p>
        </section>
      </div>
    </div>
  );
}

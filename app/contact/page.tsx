export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DIRECT LINE
        </div>
        <h1 className="text-4xl font-black uppercase">Initiate Dialogue</h1>
      </div>

      <form className="brutal-box p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-400">
              YOUR NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              className="w-full bg-black border-2 border-white px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-400">
              EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full bg-black border-2 border-white px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-zinc-400">
            ENGAGEMENT TIER
          </label>
          <select className="w-full bg-black border-2 border-white px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00FF66]">
            <option>Sprint Audit ($2,500)</option>
            <option>MVP Product Build ($8,500+)</option>
            <option>Design System Retainer ($5,000/mo)</option>
            <option>Ecosystem Partnership / General</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-zinc-400">
            PROJECT SCOPE SPECIFICATION
          </label>
          <textarea
            rows={5}
            required
            placeholder="Define technical constraints, goals, and delivery timelines..."
            className="w-full bg-black border-2 border-white p-4 text-xs text-white focus:outline-none focus:border-[#00FF66] resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider bg-[#00FF66] text-black font-bold"
        >
          TRANSMIT MESSAGE ➔
        </button>
      </form>
    </div>
  );
}

import { MapPin, ArrowUpRight, Layers } from "lucide-react";

const cities = ["Bangalore", "Kochi", "Chennai", "Hyderabad"];

export default function Cities() {
  return (
    <>
      {/* Our Services — Across the Cities */}
      <section id="services" className="py-4 bg-[#10221e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-300">
                <Layers size={15} />
                Our Services
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
                Branding services
                <span className="block text-teal-300">across the cities.</span>
              </h2>
              <p className="mt-6 text-lg text-white/55 leading-8 max-w-2xl">
                Connected service delivery with the local reach to plan, produce and execute consistently across key markets.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <MapPin size={14} className="text-teal-300" />
              Across the Cities
            </div>
          </div>

          <div id="cities" className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <article key={city} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#18302a] p-7 sm:p-8 min-h-[220px] hover:border-teal-300/35 transition-all duration-300">
                <div className="absolute -right-8 -bottom-8 text-[8rem] font-black tracking-[-0.08em] text-white/[0.03]">
                  0{index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-teal-300 flex items-center justify-center">
                  <MapPin size={21} />
                </div>
                <div className="mt-9 text-[10px] uppercase tracking-[0.2em] font-black text-white/40">City 0{index + 1}</div>
                <h3 className="mt-1 text-3xl font-black">{city}</h3>

              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

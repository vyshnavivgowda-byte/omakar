import { ArrowDown } from "lucide-react";

const processList = [
  {
    title: "UNDERSTANDING THE BRAND",
    desc: "We absorb your brand's identity to drive purposeful decision-making."
  },
  {
    title: "CONCEPT & DESIGN DEVELOPMENT",
    desc: "Ideas evolve through thoughtful design balancing creativity and function."
  },
  {
    title: "MATERIAL & PRODUCTION PLANNING",
    desc: "We choose materials purposefully and plan production with precision."
  },
  {
    title: "IN-HOUSE FABRICATION",
    desc: "Every element is crafted in-house for consistent, durable quality."
  },
  {
    title: "ON-SITE EXECUTION",
    desc: "Our team executes with accuracy, ensuring every detail matches vision."
  },
  {
    title: "REVIEW & ASSURANCE",
    desc: "We review thoroughly to ensure the final outcome aligns perfectly."
  }
];

export default function Process() {
  return (
    <>
      {/* Process */}
      <section id="process" className="py-8 sm:py-12 bg-[#dfebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 self-start">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-700">
                <span className="w-10 h-px bg-teal-600" />
                Methodology
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98] text-[#10221e]">
                From idea
                <span className="block text-teal-700">to impact.</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#53605b]">
                A Clear, Proven Path From Idea To Impactful Execution
              </p>
              <div className="mt-10 flex items-center gap-3 text-sm font-bold text-[#10221e]">
                <div className="w-10 h-10 rounded-full bg-[#10221e] text-white flex items-center justify-center">
                  <ArrowDown size={17} />
                </div>
                Scroll through the process
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-px bg-[#10221e]/10" />
              <div className="space-y-5">
                {processList.map((step, index) => (
                  <article key={index} className="relative pl-16 sm:pl-20">
                    <div className="absolute left-0 top-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#10221e] text-white flex items-center justify-center text-sm font-black border-4 border-[#dfebe5]">
                      0{index + 1}
                    </div>
                    <div className="rounded-3xl bg-white/75 border border-black/5 p-6 sm:p-7 shadow-[0_14px_35px_rgba(16,23,20,0.05)] hover:bg-white transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#10221e]">{step.title}</h3>
                        <span className="text-[10px] uppercase tracking-[0.18em] font-black text-teal-700">Phase 0{index + 1}</span>
                      </div>
                      <p className="mt-3 text-[#69746f] leading-7">{step.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

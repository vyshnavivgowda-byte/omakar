import { ArrowUpRight, Layout, Image as ImageIcon, Briefcase, Layers, PenTool, CheckCircle2, Maximize } from "lucide-react";

const expertiseList = [
  {
    icon: Layout,
    title: "Visual Merchandising Strategy",
    desc: "We craft VM plans that boost visibility, guide shopper flow, and elevate the retail experience."
  },
  {
    icon: ImageIcon,
    title: "Large-Format Printing",
    desc: "High-quality large-format prints delivered with crisp visuals and durable finishes."
  },
  {
    icon: Briefcase,
    title: "Retail Store Concept",
    desc: "Immersive retail concepts shaped to reflect your brand and optimize shopper movement."
  },
  {
    icon: Layers,
    title: "Complete Signage Solutions",
    desc: "We provide end-to-end signage design and fabrication offering accuracy, visibility, and long-lasting performance."
  },
  {
    icon: PenTool,
    title: "Store Facade Branding",
    desc: "Striking facades that strengthen brand identity and draw customers in."
  },
  {
    icon: CheckCircle2,
    title: "Turnkey VM Solutions",
    desc: "We manage complete VM rollouts with precise planning, smooth production, and flawless installation."
  },
  {
    icon: Maximize,
    title: "Window & Focal Point",
    desc: "We design high-impact windows and focal points that stop shoppers and spark conversions."
  }
];

export default function Expertise() {
  return (
    <>
      {/* Expertise */}
      <section id="expertise" className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-600">
              <span className="w-10 h-px bg-teal-500" />
              Core Expertise
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
              What we do,
              <span className="block text-teal-600">end to end.</span>
            </h2>
            <p className="mt-6 text-lg text-[#69746f] leading-8 max-w-2xl">
              Comprehensive branding and visual merchandising solutions designed to powerfully elevate your brand's physical presence.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-6 gap-5">
            {expertiseList.map((item, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_45px_rgba(16,23,20,0.06)] p-7 min-h-[250px] hover:-translate-y-1 transition-all duration-300 ${index === 0 || index === 3 ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#e3efe9] text-teal-600 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <item.icon size={23} />
                  </div>
                  <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#84908a] group-hover:border-teal-500 group-hover:text-teal-600 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-10 text-[9rem] font-black tracking-[-0.08em] text-black/[0.025] select-none">
                  0{index + 1}
                </div>
                <h3 className="relative mt-8 text-2xl font-black tracking-tight max-w-[17rem]">{item.title}</h3>
                <p className="relative mt-3 max-w-xl text-sm leading-6 text-[#6d7872]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Factory, Play, ArrowUpRight, CheckCircle2 } from "lucide-react";

const machines = [
  {
    title: "TPS-CNC",
    subtitle: "Channel Letter Bending Machine",
    src: "/MachineVideo/Printer_printing_logo_animation.mp4",
    points: [
      "Automatic feed, automatic notch, automatic bend, fully automatic.",
      "CNC processing technology of 16-axis linkage, fully achieving automatic multi-function processing."
    ]
  },
  {
    title: "MIMAKI JFX600-2513",
    subtitle: "UV Flatbed 16 Head Machine",
    src: "/MachineVideo/Mimaki_printer.mp4",
    points: [
      "Amazingly high productivity: Up to 330% higher speed.",
      "Rich color expression: 6-color inks, including light colors.",
      "Supporting media as thick as 80 mm.",
      "2.5D Texture Maker for smooth bumpy textures."
    ]
  },
  {
    title: "MIMAKI UJV100-160 (2 NOS.)",
    subtitle: "UV Print Machine",
    src: "/MachineVideo/CNC_router.mp4",
    points: [
      "UV-LED Ink Print Head with CMYKx2 & White ink color mode.",
      "Maximum resolution 1200x1200 dpi - 300 - 500 Sqft / Hour."
    ]
  },
  {
    title: "HEXA-CNC (2 NOS.)",
    subtitle: "Router Machine",
    src: "/MachineVideo/CNC_machine.mp4",
    points: [
      "Working Area - 1300x2500 mm for high-volume processing.",
      "Suitable for acrylics, non-ferrous metals, wood, and composite panels."
    ]
  }
];

export default function Infrastructure() {
  return (
    <>
      {/* Infrastructure / Videos */}
      <section id="infrastructure" className="py-8 sm:py-12  bg-[#dfebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-600">
                <Factory size={15} />
                Infrastructure
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
                Production power
                <span className="block text-teal-600">behind the finish.</span>
              </h2>
            </div>
            <p className="max-w-md text-[#69746f] leading-7 lg:text-right">
              Equipped with the latest technology to ensure precision, speed, and uncompromising quality in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {machines.map((machine, index) => (
              <article key={index} className="group overflow-hidden rounded-[1.75rem] bg-[#10221e] text-white border border-black/5 hover:border-teal-400/25 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700">
                    <source src={machine.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1714]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] font-bold">
                    <Play size={11} fill="currentColor" />
                    Live Process
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-teal-200/75">Machine 0{index + 1}</div>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-black">{machine.title}</h3>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="text-teal-300 font-bold">{machine.subtitle}</div>
                  <ul className="mt-5 space-y-3">
                    {machine.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-sm leading-6 text-white/62">
                        <CheckCircle2 size={17} className="mt-1 shrink-0 text-teal-300" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

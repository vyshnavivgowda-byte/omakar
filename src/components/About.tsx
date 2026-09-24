import { ArrowUpRight, TrendingUp, Maximize } from "lucide-react";



export default function About() {
  return (
    <>
      {/* About */}
      <section id="about" className="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-600">
                <span className="w-10 h-px bg-teal-500" />
                About Omkar
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
                A legacy of excellence,
                <span className="block text-teal-600">built for brands.</span>
              </h2>
              <p className="mt-7 text-lg leading-8 text-[#5c6862] max-w-2xl">
                Omkar Enterprises journey is fueled by offering integrated branding solutions from concept development to flawless execution, delivering cost-effective results across Pan India without compromising on quality.
              </p>
              <p className="mt-5 text-base leading-7 text-[#7b8580] max-w-2xl">
                As an ISO-certified company, our team has collaborated with diverse clients, delivering impactful visual experiences across indoor and outdoor spaces that don't just stand out—they drive results.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <article className="rounded-3xl bg-[#10221e] p-7 sm:p-8 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-teal-300">
                  <TrendingUp size={23} />
                </div>
                <h3 className="mt-6 text-2xl font-black">Our Mission</h3>
                <p className="mt-3 text-white/65 leading-7">
                  To deliver integrated branding solutions from concept to flawless execution, ensuring cost-effective, high-quality results that elevate brand presence across India.
                </p>
              </article>

              <article className="rounded-3xl bg-[#dfebe5] p-7 sm:p-8 text-[#10221e]">
                <div className="w-12 h-12 rounded-xl bg-white/65 border border-black/5 flex items-center justify-center text-teal-600">
                  <Maximize size={23} />
                </div>
                <h3 className="mt-6 text-2xl font-black">Our Vision</h3>
                <p className="mt-3 text-[#53605b] leading-7">
                  To be a trusted leader in end-to-end branding solutions which transform spaces into impactful visual experiences.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

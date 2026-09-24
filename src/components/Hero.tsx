"use client";

import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const handleVideoEnd = () => {
    // Scroll down past the hero section smoothly
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative mt-[90px] sm:mt-[106px] min-h-[calc(100vh-106px)] bg-[#10221e] overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        >
          <source src="/herosections.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,22,18,0.97)_0%,rgba(9,22,18,0.78)_35%,rgba(9,22,18,0.26)_70%,rgba(9,22,18,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,22,18,0.78)_0%,transparent_42%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-[calc(100vh-106px)] flex items-end pb-24 sm:pb-32">
          <div className="max-w-3xl text-white pt-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold text-white/85 mb-7">
              <Sparkles size={14} className="text-teal-300" />
              Est. 2009 · ISO Certified Experience
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-black tracking-[-0.045em] leading-[0.95]">
              We build spaces
              <span className="block text-teal-300">people remember.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/80">
              Fueled by integrated branding solutions from concept to flawless execution, we deliver cost-effective results across India. With 15+ years of ISO-certified experience, we create impactful visual spaces that don't just stand out—they drive results.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 sm:px-7 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_14px_34px_rgba(20,184,166,0.25)]">
                Explore Our Services
                <ArrowRight size={18} />
              </a>
              <a href="#infrastructure" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white px-6 sm:px-7 py-4 rounded-xl font-bold text-sm transition-all">
                <Play size={16} fill="currentColor" />
                See Our Production
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 hidden md:flex items-center gap-3 rounded-full bg-black/25 backdrop-blur-md border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/75">
          <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
          Design · Manufacture · Execute
        </div>
      </section>
    </>
  );
}

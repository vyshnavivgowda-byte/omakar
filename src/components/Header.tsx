import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";



export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#f4f1ea]/90 backdrop-blur-xl border border-black/5 shadow-[0_12px_30px_rgba(16,23,20,0.08)]">
          <div className="h-[74px] px-5 sm:px-7 flex items-center justify-between">
            <a href="#" className="relative w-48 sm:w-56 h-12 shrink-0">
              <Image
                src="/websitelogo.png"
                alt="Omkar Enterprises"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
                priority
              />
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold uppercase tracking-[0.14em] text-[#53605b]">
              <a href="#about" className="hover:text-[#0f8173] transition-colors">About</a>
              <a href="#services" className="hover:text-[#0f8173] transition-colors">Services</a>
              <a href="#infrastructure" className="hover:text-[#0f8173] transition-colors">Infrastructure</a>
              <a href="#cities" className="hover:text-[#0f8173] transition-colors">Cities</a>
              <a href="#brands" className="hover:text-[#0f8173] transition-colors">Brands</a>
              <a href="#process" className="hover:text-[#0f8173] transition-colors">Process</a>
            </nav>

            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-[0_10px_24px_rgba(20,184,166,0.22)]">
              Start a Project
              <ArrowUpRight size={16} />
            </a>

            <button className="sm:hidden w-11 h-11 rounded-xl border border-black/10 flex items-center justify-center" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

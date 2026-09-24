import { Sparkles, ArrowUpRight } from "lucide-react";



export default function Footer() {
  return (
    <>
      {/* CTA / Footer */}
      <footer id="contact" className="bg-[#10221e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#18302a] border border-white/10 px-7 sm:px-12 lg:px-16 py-12 sm:py-16">
            <div className="absolute -right-16 -top-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] items-end gap-10">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black text-teal-300">
                  <Sparkles size={14} />
                  Let's create something visible
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.98] max-w-4xl">
                  Ready to transform
                  <span className="block text-teal-300">your brand space?</span>
                </h2>
                <p className="mt-5 max-w-2xl text-white/55 text-base leading-relaxed">
                  Let's collaborate to create impactful visual experiences that drive real results for your business.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 mb-1">Send Mail</div>
                    <a href="mailto:rajesh@omkarblr.com" className="text-base sm:text-lg font-black text-white hover:text-teal-300 transition-colors">
                      rajesh@omkarblr.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 mb-1">Call Us</div>
                    <a href="tel:+919902714333" className="text-base sm:text-lg font-black text-white hover:text-teal-300 transition-colors">
                      +91 99027 14333
                    </a>
                  </div>
                </div>
              </div>

              <a href="#about" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-7 py-4 rounded-xl font-black transition-all shadow-[0_14px_35px_rgba(20,184,166,0.2)] whitespace-nowrap">
                Get in Touch Today
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-white/38">
            <p>© {new Date().getFullYear()} Omkar Enterprises. All rights reserved.</p>
            <div className="flex gap-7">
              <a href="#" className="hover:text-teal-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

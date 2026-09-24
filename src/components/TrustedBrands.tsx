import Image from "next/image";
import { Building2 } from "lucide-react";

const trustedBrandLogos = [
  { src: "/brand_logos_diamond/zeiss.png", name: "Zeiss" },
  { src: "/brand_logos_diamond/tigc_indian_garage.png", name: "The Indian Garage Co." },
  { src: "/brand_logos_diamond/sobha.png", name: "Sobha" },
  { src: "/brand_logos_diamond/samsung.png", name: "Samsung" },
  { src: "/brand_logos_diamond/prestige.png", name: "Prestige" },
  { src: "/brand_logos_diamond/mia_by_tanishq.png", name: "Mia by Tanishq" },
  { src: "/brand_logos_diamond/mi.png", name: "MI" },
  { src: "/brand_logos_diamond/max.png", name: "Max" },
  { src: "/brand_logos_diamond/kushals.png", name: "Kushals" },
  { src: "/brand_logos_diamond/hafele.png", name: "Hafele" },
  { src: "/brand_logos_diamond/giva.png", name: "GIVA" },
  { src: "/brand_logos_diamond/easybuy.png", name: "Easybuy" },
  { src: "/brand_logos_diamond/calvin_klein.png", name: "Calvin Klein" },
  { src: "/brand_logos_diamond/bosch.png", name: "Bosch" },
  { src: "/brand_logos_diamond/bata.png", name: "Bata" },
  { src: "/brand_logos_diamond/asianpaints.png", name: "Asian Paints" },
  { src: "/brand_logos_diamond/arvind.png", name: "Arvind" },
  { src: "/brand_logos_diamond/aditya_birla_madura.png", name: "Aditya Birla Madura" },
];

export default function TrustedBrands() {
  const row1 = trustedBrandLogos.slice(0, 9);
  const row2 = trustedBrandLogos.slice(9, 18);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Brands That Trust Us */}
      <section className="py-12 sm:py-20 bg-[#f4f1ea] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black text-teal-600">
              <Building2 size={15} />
              Brands That Trust Us
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
              A network of
              <span className="block text-teal-600">trusted partnerships.</span>
            </h2>
            <p className="mt-6 text-lg text-[#69746f] leading-8">
              Our co-partner and client ecosystem, moving forward together.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Marquee Row 1 (Left) */}
          <div className="relative w-full flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll-left pause-on-hover">
              {/* Duplicating the array 4 times for perfect seamless scrolling at -50% translation */}
              {[...row1, ...row1, ...row1, ...row1].map((brand, index) => (
                <div
                  key={`row1-${brand.src}-${index}`}
                  className="mx-3 sm:mx-4 flex h-24 sm:h-28 w-44 sm:w-56 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] transition-all duration-300 cursor-default"
                >
                  <div className="relative w-3/5 h-1/2">
                    <Image src={brand.src} alt={brand.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right) */}
          <div className="relative w-full flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll-right pause-on-hover">
              {[...row2, ...row2, ...row2, ...row2].map((brand, index) => (
                <div
                  key={`row2-${brand.src}-${index}`}
                  className="mx-3 sm:mx-4 flex h-24 sm:h-28 w-44 sm:w-56 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] transition-all duration-300 cursor-default"
                >
                  <div className="relative w-3/5 h-1/2">
                    <Image src={brand.src} alt={brand.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { Images, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const signageGallery = [
  { src: "/brand/trends.jpg", name: "Trends" },
  { src: "/brand/shubh.jpg", name: "Shubh" },
  { src: "/brand/samsung.jpg", name: "Samsung" },
  { src: "/brand/mia-tanishq.png", name: "Mia by Tanishq" },
  { src: "/brand/max.jpg", name: "Max" },
  { src: "/brand/lifestyle.jpg", name: "Lifestyle" },
  { src: "/brand/kushals.jpg", name: "Kushals" },
  { src: "/brand/bata.jpg", name: "Bata" },
  { src: "/brand/adidas.jpg", name: "Adidas" },
];

export default function BrandSignages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Our Honorable Brands Signages */}
      <section className="py-8 sm:py-12 bg-[#10221e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-300">
                <Images size={15} />
                Our Honorable Brands Signages
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98]">
                Trusted by industry
                <span className="block text-teal-300">leaders.</span>
              </h2>
            </div>
            <p className="max-w-md text-white/55 leading-7 lg:text-right">
              A visual gallery of signage and retail branding created for recognized consumer brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {signageGallery.map((item, index) => (
              <article
                key={item.src}
                onClick={() => setSelectedImage(item.src)}
                className={`${index === 0 ? "md:row-span-2" : ""} group relative min-h-[210px] sm:min-h-[260px] overflow-hidden rounded-[1.5rem] bg-[#18302a] border border-white/10 cursor-pointer`}
              >
                <Image
                  src={item.src}
                  alt={`${item.name} signage`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-teal-200/80">Signage Project</div>
                    <h3 className="mt-1 text-xl sm:text-2xl font-black">{item.name}</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10221e]/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer">
            <X size={24} />
          </div>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] h-full rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <Image
              src={selectedImage}
              alt="Signage Zoomed"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

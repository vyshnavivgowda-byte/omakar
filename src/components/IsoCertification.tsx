"use client";

import Image from "next/image";
import { ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const isoCertificates = [
  { src: "/iso-cert-left.jpg", alt: "ISO certification document" },
  { src: "/iso-cert-center.jpg", alt: "ISO certification document" },
  { src: "/iso-cert-right.jpg", alt: "ISO certification document" },
];

export default function IsoCertification() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* ISO Certification */}
      <section id="certification" className="py-8 sm:py-12 bg-[#dfebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-teal-700">
                <ShieldCheck size={16} />
                ISO Certification
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.98] text-[#10221e]">
                Standards you can
                <span className="block text-teal-700">see in every detail.</span>
              </h2>
              <p className="mt-6 text-lg text-[#53605b] leading-8 max-w-xl">
                Certification that supports our commitment to consistent quality, disciplined production and reliable execution.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#10221e] text-white px-4 py-3 text-sm font-bold">
                <ShieldCheck size={17} className="text-teal-300" />
                ISO Certified Experience
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-stretch">
              <div className="col-span-4 pt-8 sm:pt-12">
                <div 
                  onClick={() => setSelectedImage(isoCertificates[0].src)}
                  className="group relative w-full aspect-[1/1.414] rounded-[1.5rem] overflow-hidden bg-white shadow-[0_18px_45px_rgba(16,23,20,0.10)] border border-black/5 cursor-pointer"
                >
                  <Image src={isoCertificates[0].src} alt={isoCertificates[0].alt} fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>

              <div className="col-span-5">
                <div 
                  onClick={() => setSelectedImage(isoCertificates[1].src)}
                  className="group relative w-full aspect-[1/1.414] rounded-[1.75rem] overflow-hidden bg-white shadow-[0_24px_55px_rgba(16,23,20,0.14)] border border-black/5 cursor-pointer"
                >
                  <Image src={isoCertificates[1].src} alt={isoCertificates[1].alt} fill sizes="(max-width: 1024px) 42vw, 30vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#10221e]/85 backdrop-blur-md text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em]">
                    <ShieldCheck size={12} className="text-teal-300" />
                    Certification
                  </div>
                </div>
              </div>

              <div className="col-span-3 pt-14 sm:pt-20">
                <div 
                  onClick={() => setSelectedImage(isoCertificates[2].src)}
                  className="group relative w-full aspect-[1/1.414] rounded-[1.5rem] overflow-hidden bg-white shadow-[0_18px_45px_rgba(16,23,20,0.10)] border border-black/5 cursor-pointer"
                >
                  <Image src={isoCertificates[2].src} alt={isoCertificates[2].alt} fill sizes="(max-width: 1024px) 25vw, 18vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            </div>
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
            className="relative w-full max-w-4xl max-h-[85vh] h-full rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <Image 
              src={selectedImage} 
              alt="ISO Certificate Zoomed" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

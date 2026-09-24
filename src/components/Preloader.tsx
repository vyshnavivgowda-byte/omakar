"use client";

import { useState, useEffect, useRef } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Disable scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

  // Failsafe in case video doesn't play or is too long
  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 6000); 
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1s fade out duration
  };

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isFading ? "opacity-0 pointer-events-none scale-110" : "opacity-100 scale-100"}`}
    >
      {/* Centered Small Video */}
      <div className="relative w-48 sm:w-64 aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] mb-8 border border-black/5">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          onEnded={handleComplete}
          className="w-full h-full object-cover"
        >
          <source src="/CNC.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Loading Spinner */}
        <div className="relative w-10 h-10 flex items-center justify-center mb-4">
          <div className="absolute inset-0 border-[1.5px] border-black/10 rounded-full" />
          <div className="absolute inset-0 border-[1.5px] border-teal-500 rounded-full border-t-transparent animate-spin" />
        </div>
        <div className="text-black/60 font-black tracking-[0.3em] uppercase text-[10px] animate-pulse">
          Initializing
        </div>
      </div>
    </div>
  );
}

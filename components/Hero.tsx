

import React from 'react';
// Example: minimal React icon (Tabler or Lucide)
import { BrandReact } from 'tabler-icons-react';
const profilePic = `/assets/personalportfolio.png?${Date.now()}`;

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Blurred neutral background shape */}
      <div className="absolute top-20 left-1/4 w-[50vw] h-[50vw] bg-neutral-50 rounded-full blur-[140px] -z-10 opacity-40 animate-pulse pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center py-10 md:py-16 lg:py-24">
        {/* Left Column */}
        <div className="lg:col-span-8 z-10 space-y-8 md:space-y-12 lg:space-y-16 px-2 md:px-6 lg:px-10">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex items-center gap-4 lg:gap-6 reveal active">
              <div className="w-12 lg:w-16 h-[1px] bg-black" />
              <h2 className="text-[10px] lg:text-[11px] font-black tracking-[0.5em] text-black uppercase flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <BrandReact className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" aria-label="React" />
                  Software Engineering // Production Ready
                </span>
              </h2>
            </div>
            <h1 className="text-[10vw] lg:text-[8.5rem] font-heading font-bold leading-[0.75] tracking-tighter text-black select-none group">
              TEMKIN<br />
              <span className="outline-text relative inline-block">
                ABDULMELIK
                <span className="absolute -top-4 -right-8 lg:-top-6 lg:-right-12 text-[12px] lg:text-[14px] tracking-widest font-black text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">SOFTWARE ARCHITECT</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 lg:gap-14 reveal active">
            <div className="max-w-xl px-1 md:px-2">
              <p className="text-neutral-500 text-lg lg:text-xl leading-relaxed font-medium">
                I am a developer merging technical precision with a modern aesthetic.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 md:px-10 py-4 md:py-6 bg-black text-white rounded-full font-bold text-[10px] uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)' }}
              >
                <span className="relative z-10">Access System Modules</span>
                <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-250 ease-in-out" style={{ boxShadow: '0 0 16px 0 rgba(0,255,0,0.04)' }} />
              </button>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="lg:col-span-4 relative hidden lg:block group px-2 md:px-4 lg:px-6">
          <div className="relative aspect-[3/4.2] overflow-hidden rounded-[5rem] bg-black shadow-[0_80px_130px_-20px_rgba(0,0,0,0.25)] ring-1 ring-neutral-200 transition-all duration-1000 group-hover:shadow-[0_100px_160px_-30px_rgba(0,0,0,0.4)]">
            <img
              src={profilePic}
              alt="Temkin Abdulmelik"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] ease-in-out scale-105 group-hover:scale-100"
              style={{ maskImage: 'linear-gradient(180deg, #fff 80%, #000 100%)' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-12 left-12 text-white z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-white/40" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Profile v4.0</p>
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/80">Dev Verified: 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

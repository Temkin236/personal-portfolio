

import React from 'react';
// Example: minimal React icon (Tabler or Lucide)
import { BrandReact } from 'tabler-icons-react';
const profilePic = `/assets/personalportfolio.png?${Date.now()}`;

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden pt-16 pb-8 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Animated background elements */}
      <div className="absolute top-20 left-1/4 w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[140px] -z-10 opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[40vw] h-[40vw] bg-neutral-50 rounded-full blur-[120px] -z-10 opacity-30 animate-float pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center py-4">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 z-10 space-y-4 md:space-y-5 lg:space-y-6 px-2 md:px-3">
          <div className="space-y-3 md:space-y-4">
            {/* Badge */}
            <div className="flex items-center gap-2 lg:gap-3 reveal active">
              <div className="w-10 lg:w-12 h-[2px] bg-gradient-to-r from-black to-neutral-300" />
              <h2 className="text-[9px] lg:text-[10px] font-black tracking-[0.4em] text-black uppercase flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <BrandReact className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" aria-label="React" />
                  Software Engineering // Production Ready
                </span>
              </h2>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-black select-none group">
              TEMKIN<br />
              <span className="outline-text relative inline-block">
                ABDULMELIK
                <span className="absolute -top-4 -right-8 lg:-top-6 lg:-right-12 text-[12px] lg:text-[14px] tracking-widest font-black text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">SOFTWARE ARCHITECT</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 reveal active">
              <div className="max-w-xl">
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  I am a developer merging technical precision with a modern aesthetic, crafting intelligent systems that push boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-2 reveal active">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-4 md:px-5 py-2 md:py-2.5 bg-black text-white rounded-full font-bold text-[9px] uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-lg"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-4 md:px-5 py-2 md:py-2.5 bg-white text-black rounded-full font-bold text-[9px] uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 border-2 border-black overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 tracking-[0.4em]">Get In Touch</span>
            </button>
          </div>

          {/* Info Tags - Inspired by Joker layout */}
          <div className="flex flex-wrap gap-2 reveal active">
            <div className="bg-white/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Intelligence</span>
            </div>
            <div className="bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Innovation</span>
            </div>
            <div className="bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full border border-neutral-200 shadow-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-black shadow-xl ring-1 ring-neutral-300 transition-all duration-1000 group-hover:shadow-2xl group-hover:scale-[1.02]">
            <img
              src={profilePic}
              alt="Temkin Abdulmelik"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] ease-in-out scale-105 group-hover:scale-100"
              style={{ maskImage: 'linear-gradient(180deg, #fff 80%, #000 100%)' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            {/* Profile Badge */}
            <div className="absolute bottom-8 left-8 text-white z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-white/40" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70">Profile v4.0</p>
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/80">Dev Verified: 2025</span>
            </div>

            {/* Power indicator */}
            <div className="absolute top-8 right-8 text-white z-10">
              <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white">Power: ∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

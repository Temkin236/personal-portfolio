
import React from 'react';
import profilePic from '../assets/personalportfolio.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden pt-32 pb-24">
      <div className="absolute top-20 left-1/4 w-[50vw] h-[50vw] bg-neutral-50 rounded-full blur-[140px] -z-10 opacity-40 animate-pulse pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 z-10 space-y-12 lg:space-y-16">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center gap-4 lg:gap-6 reveal active">
                <div className="w-12 lg:w-16 h-[1px] bg-black"></div>
                <h2 className="text-[10px] lg:text-[11px] font-black tracking-[0.5em] text-black uppercase">Software Engineering // Production Ready</h2>
            </div>
            <h1 className="text-[10vw] lg:text-[8.5rem] font-heading font-bold leading-[0.75] tracking-tighter text-black select-none group">
              TEMKIN<br />
              <span className="outline-text relative inline-block">
                ABDULMELIK
                <span className="absolute -top-4 -right-8 lg:-top-6 lg:-right-12 text-[12px] lg:text-[14px] tracking-widest font-black text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">SOFTWARE ARCHITECT</span>
              </span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-10 lg:gap-14 reveal active">
            <div className="max-w-xl">
              <p className="text-neutral-500 text-lg lg:text-xl leading-relaxed font-medium">
                I am a <span className="text-black font-black">Full Stack Developer</span>, <span className="text-black font-bold">Agentic AI Architect</span>, and <span className="text-black font-bold">Data Annotator</span>. Merging technical precision with a <span className="text-black font-bold italic">UI/UX beginner's</span> eye for modern aesthetics.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-6 bg-black text-white rounded-full font-bold text-[10px] uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
              >
                <span className="relative z-10">Access System Modules</span>
                <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block group">
          <div className="relative aspect-[3/4.2] overflow-hidden rounded-[5rem] bg-black shadow-[0_80px_130px_-20px_rgba(0,0,0,0.25)] ring-1 ring-neutral-200 transition-all duration-1000 group-hover:shadow-[0_100px_160px_-30px_rgba(0,0,0,0.4)]">
            <img 
              src={profilePic} 
              alt="Temkin Abdulmelik" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] ease-in-out scale-105 group-hover:scale-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-12 left-12 text-white z-10 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-[1px] bg-white/40"></div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Profile v4.0</p>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/80">Dev Verified: 2025</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

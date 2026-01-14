
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 pt-8 md:pt-12 border-t border-neutral-100">
        <div className="flex items-center gap-2 px-1 md:px-2">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <span className="font-heading font-bold tracking-tighter text-xl">TEMKIN ABDULMELIK</span>
        </div>
        
        <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest text-center px-2 md:px-4">
          © 2025 ALL RIGHTS RESERVED — ENGINEERED FOR THE AI AGE.
        </p>

        <div className="flex items-center gap-1.5 md:gap-2 bg-neutral-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-neutral-100">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500">Status: Active at ASTU</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

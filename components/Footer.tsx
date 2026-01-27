
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-black rounded-full"></div>
          <span className="font-heading font-bold tracking-tight text-base">TEMKIN</span>
        </div>
        
        <p className="text-neutral-400 text-[9px] font-bold uppercase tracking-wider text-center">
          © 2025 All Rights Reserved
        </p>

        <div className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-500">Active</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

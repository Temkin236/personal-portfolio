
import React from 'react';

interface NavbarProps {
  activeSection?: string;
  navigate?: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigate }) => {
  const scrollToContact = () => {
    if (navigate) return navigate('/contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 border-b border-neutral-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Fancy brand (neutral, no green/shadows) */}
        <div className="flex items-center gap-3">
          <div className="rounded-full w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center">
            <span className="text-neutral-900 font-extrabold text-lg">T</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-neutral-900 font-bold text-lg tracking-wide">Temkin</div>
            <div className="text-xs text-neutral-600">Full-stack engineer — building scalable web platforms and agentic AI systems</div>
          </div>
        </div>

        {/* Spacer keeps center clean; no nav items */}
        <div />

        {/* CTA (neutral, no shadow/green) */}
        <div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-transform transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

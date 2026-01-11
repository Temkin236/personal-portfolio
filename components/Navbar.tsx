
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 lg:py-8 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Identity */}
        <button 
          onClick={() => scrollTo('home')} 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full pr-4"
          aria-label="Noir Home"
        >
          <div className="w-8 h-8 lg:w-9 lg:h-9 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
            <span className="text-white font-black text-[12px]">N</span>
          </div>
          <span className="font-heading font-bold text-xl lg:text-2xl tracking-tighter">NOIR</span>
        </button>
        
        {/* Connection Link */}
        <button 
          onClick={() => scrollTo('contact')}
          className="bg-black/5 hover:bg-black hover:text-white px-6 lg:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 backdrop-blur-md border border-neutral-100/50"
        >
          Collaborate
        </button>
      </div>
    </header>
  );
};

export default Navbar;

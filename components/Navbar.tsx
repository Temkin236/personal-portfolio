
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 lg:py-8 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Identity */}
        <button 
          onClick={() => scrollTo('home')} 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full pr-4"
          aria-label="Temkin Home"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-lg">
            <span className="text-white font-black text-sm lg:text-base">T</span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-xl px-2 py-2 rounded-full border border-neutral-200/50 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-black rounded-full -z-10 transition-all duration-300" />
              )}
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile CTA */}
        <button 
          onClick={() => scrollTo('contact')}
          className="lg:hidden bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
        >
          Connect
        </button>
      </div>
    </header>
  );
};

export default Navbar;

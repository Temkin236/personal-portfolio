
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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => scrollTo('home')} 
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Home"
        >
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
            <span className="text-neutral-900 font-bold text-lg">T</span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-300" />
              )}
            </button>
          ))}
        </nav>
        
        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Theme toggle (placeholder) */}
          <button 
            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400 hover:text-white"
            aria-label="Toggle theme"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          {/* CTA Button */}
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline bg-white hover:bg-neutral-100 text-neutral-900 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

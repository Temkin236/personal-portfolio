
import React, { useRef, useEffect } from 'react';
import { Certificate } from '../types';

const certs: Certificate[] = [
  { 
    id: 'c1', 
    title: 'Deep Learning Specialization', 
    issuer: 'Coursera (DeepLearning.AI)', 
    date: '2024', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53815d1e?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'c2', 
    title: 'Embedded Systems & IoT', 
    issuer: 'ASTU Innovation Lab', 
    date: '2023', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'c3', 
    title: 'Advanced Agentic Frameworks', 
    issuer: 'Open Source AI Community', 
    date: '2024', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'c4', 
    title: 'Hackathon Excellence Award', 
    issuer: 'CSEC ASTU', 
    date: '2023', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1523240715639-99a8080ffc60?q=80&w=2070&auto=format&fit=crop'
  }
];

const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 250 : 320; // Responsive scroll amount
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const newScrollLeft = direction === 'left' 
        ? currentScrollLeft - scrollAmount 
        : currentScrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && e.altKey) {
        scroll('left');
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && e.altKey) {
        scroll('right');
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <div className="flex items-center gap-4">
               <div className="w-8 h-[1px] bg-black" />
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400">02 // Credentials</h4>
            </div>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">Verified <span className="text-neutral-300">Milestones.</span></h2>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center px-6 lg:px-24 max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
              {certs.length} Professional Certifications
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
              aria-label="Scroll left (Alt + Left Arrow)"
              title="Scroll left (Alt + Left Arrow)"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
              aria-label="Scroll right (Alt + Right Arrow)"
              title="Scroll right (Alt + Right Arrow)"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scrolling certificates */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 px-6 lg:px-24 scrollbar-hide horizontal-scroll"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Spacer to center first item */}
          <div className="flex-none w-0 lg:w-32" />
          
          {certs.map((cert, index) => (
            <div 
              key={cert.id} 
              className="group relative flex-none w-72 sm:w-80 bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-700 overflow-hidden flex flex-col"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Certificate number indicator */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-8 h-8 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-black font-bold text-xs">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Image Preview Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                
                {/* Verification badge overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-md rounded-full p-4 shadow-lg">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-black text-neutral-300 uppercase tracking-widest block">{cert.date}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold leading-tight text-black group-hover:text-green-700 transition-colors">{cert.title}</h3>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">{cert.issuer}</p>
                  </div>
                </div>

                <a 
                  href={cert.link} 
                  className="inline-flex items-center justify-between w-full p-4 bg-neutral-50 hover:bg-black hover:text-white rounded-2xl text-[9px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-black hover:text-white transition-all pt-4 border border-transparent hover:border-black"
                >
                  <span>Verify Authenticity</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
          
          {/* End spacer */}
          <div className="flex-none w-32" />
        </div>

        {/* Progress indicator */}
        <div className="px-6 lg:px-24 max-w-7xl mx-auto mt-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-neutral-300" />
            <span className="text-[8px] font-black uppercase tracking-widest text-neutral-300 px-4 text-center">
              <span className="block sm:inline">Scroll horizontally for all credentials</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Alt + Arrow Keys</span>
            </span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

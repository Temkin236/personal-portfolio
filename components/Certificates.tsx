
import React, { useRef, useEffect, useState } from 'react';
import type { Certificate } from '../types';

const certs: Certificate[] = [
  {
    id: 'c1',
    title: 'Full-Stack Web Development Bootcamp (CSEC ASTU)',
    issuer: 'CSEC ASTU',
    date: '2024',
    link: '#',
    image: '/assets/CSEC ASTU.png',
    description: 'Successfully completed an intensive, 4-month full-stack development residency hosted by CSEC ASTU. This program focused on building scalable, production-grade applications using modern industry standards.',
    highlight: 'Mastered Next.js, MongoDB, TypeScript, and Express.js; delivered production-grade apps under tight timelines.',
    technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Express']
  },

  {
    id: 'c6',
    title: '🏆 1st Place Winner - CSEC ASTU Hackathon v1.0',
    issuer: 'CSEC ASTU',
    date: 'January 2026',
    link: '#',
    image: '/assets/hackaton winner.png',
    description: 'Won 1st place at the CSEC ASTU Hackathon v1.0 by building Meri Direction Locator, an AI-powered smart campus navigation solution designed to help students, visitors, and staff easily find buildings, offices, services, and routes inside Adama Science and Technology University (ASTU). The platform provides accurate directions, shortest path suggestions, and location-based guidance for key campus facilities such as lecture halls, dormitories, mosques, cafeterias, and administrative offices. Enhanced with RAG (Retrieval-Augmented Generation) technology for intelligent query responses and natural language interaction. Contributed to frontend development and system integration, ensuring seamless user experience and robust API connectivity. Our solution addressed a real and common problem faced by new students and visitors navigating a large university campus, standing out for its practical impact, user-friendly interface, and team collaboration, earning recognition from the judges for innovation, clarity of problem-solving, and technical execution.',
    highlight: 'Contributed to frontend development and integration for Team Divas\' winning solution — honored for practical impact and technical excellence.',
    technologies: ['React', 'TypeScript', 'RAG', 'API Integration', 'Geolocation API', 'Pathfinding Algorithms'],
    team: 'Team Divas: Temkin Abdulmelik, Fetiya Yusuf, Siham Kasim, Tsion Birhanu, and Lelo Mohammed'
  },

  {
    id: 'c3',
    title: 'Core Member & Project Contributor (NSDA)',
    issuer: 'NEJM Student Developers Association (NSDA)',
    date: '2022',
    link: '#',
    image: '/assets/NSDA.png',
    description: 'Honored as a Core Member of the NSDA Project Team. This role involved driving the development of community-focused software initiatives and managing project lifecycles.',
    highlight: 'Contributed to diverse technical initiatives through creative problem-solving and dedicated teamwork.',
    technologies: ['React', 'Node.js', 'Git']
  },

  {
    id: 'c2',
    title: 'Mentorship & Leadership (ASTUMS J Bootcamp)',
    issuer: 'ASTUMS J Bootcamp',
    date: '2023',
    link: '#',
    image: '/assets/ASTU MUSLIM STUDENT JEMEA MENTORSHIP.jpg',
    description: 'Recognized for providing exceptional technical guidance and mentorship to aspiring developers during a three-month intensive bootcamp. I acted as a bridge between complex architectural concepts and student-led implementation.',
    highlight: 'Led mentee group to 1st Place in final competition through collaborative mentoring and technical oversight.',
    technologies: ['Mentorship', 'Architecture', 'Collaboration']
  },

  {
    id: 'c4',
    title: 'August 2025 Zemenay Hackathon',
    issuer: 'Zemenay Hackathon',
    date: 'August 2025',
    link: '#',
    image: '/assets/ZemenayHackaton.jpg',
    description: 'Successfully met the rigorous requirements of the Zemenay Hackathon, a fast-paced innovation challenge focused on rapid prototyping and problem-solving.',
    highlight: 'Received special commemoration for "exceptional efforts" — built high-quality solutions under strict time constraints.',
    technologies: ['Rapid Prototyping', 'JavaScript', 'UI/UX']
  },

  {
    id: 'c5',
    title: 'Data Annotation with AnnotatePlus (Share eLearning)',
    issuer: 'Share eLearning',
    date: '2024',
    link: '#',
    image: '/assets/DATA ANNOTATION.jpg',
    description: 'Completed specialized training in Data Annotation via the Share eLearning LMS, focusing on the critical data processing layer that powers Machine Learning models.',
    highlight: 'Gained expertise in high-fidelity data labeling and QA using AnnotatePlus, ensuring accurate datasets for model training.',
    technologies: ['Data Annotation', 'QA', 'Python']
  }
];

const CertificateModal: React.FC<{ cert: Certificate; onClose: () => void }> = ({ cert, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Download handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cert.image || '';
    link.download = cert.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col overflow-y-auto flex-1">
          <div className="relative h-64 sm:h-80 overflow-hidden bg-neutral-100">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Certificate</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs font-medium text-green-600">Verified Certificate</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">{cert.title}</h2>
              <div className="flex flex-wrap gap-2">
                {(cert.technologies || []).map(tech => (
                  <span key={tech} className="text-xs font-medium text-neutral-600 px-3 py-1.5 bg-neutral-100 rounded-lg">{tech}</span>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Issuer</p>
                  <p className="text-sm font-medium text-neutral-900">{cert.issuer}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Date</p>
                  <p className="text-sm font-medium text-neutral-900">{cert.date}</p>
                </div>
              </div>

              {cert.description && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-2">About this certification</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">{cert.description}</p>
                </div>
              )}

              {cert.highlight && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                  <h3 className="text-sm font-semibold text-blue-900 mb-1">Key Achievement</h3>
                  <p className="text-sm text-blue-800">{cert.highlight}</p>
                </div>
              )}

              {cert.team && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <h3 className="text-sm font-semibold text-amber-900 mb-1">Team Collaborators</h3>
                  <p className="text-sm text-amber-800">{cert.team}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleDownload}
                className="flex-1 text-center bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all hover:bg-neutral-800 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Certificate
              </button>
              {cert.link && cert.link !== '#' && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center bg-white text-neutral-900 border-2 border-neutral-200 px-6 py-3 rounded-lg font-medium text-sm transition-all hover:border-neutral-900 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  View Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
    <div className="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 via-white/30 to-neutral-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-50 to-teal-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-tr from-yellow-50 to-amber-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="px-6 lg:px-20 max-w-[1600px] mx-auto">
          <header className="mb-12 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-black" />
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">My Certifications</h4>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
              Achievements
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-medium text-green-600">{certs.length} Verified Certificates</span>
            </div>
          </header>

          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">{certs.length} Certificates</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scroll('left')} 
                className="group w-11 h-11 rounded-full bg-white border-2 border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
                aria-label="Scroll left (Alt + Left Arrow)"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="group w-11 h-11 rounded-full bg-white border-2 border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
                aria-label="Scroll right (Alt + Right Arrow)"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide horizontal-scroll"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex-none w-0 lg:w-20" />
            {certs.map((cert, index) => (
              <article
                key={cert.id}
                className="group relative flex-none w-72 sm:w-80 flex flex-col"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-2 hover:border-neutral-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.8s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'; }}
                  />

                  <div className="absolute top-8 sm:top-10 left-8 sm:left-10 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-lg flex items-center justify-center text-black font-bold text-base shadow-2xl border-2 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">{String(index + 1).padStart(2, '0')}</div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-12 group-hover:translate-y-0">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="relative px-10 sm:px-12 py-6 sm:py-7 bg-black text-white rounded-full shadow-2xl flex flex-col items-center gap-2 group/btn overflow-hidden active:scale-95 border-2 border-white/20 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.5em] text-neutral-400">Review Data</span>
                      <span className="relative z-10 text-[12px] font-black uppercase tracking-tight">Specifications</span>
                    </button>
                  </div>

                  <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 z-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-lg flex items-center justify-center text-black shadow-2xl border-2 border-white group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3 flex-grow px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Certificate</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold capitalize transition-all duration-500 leading-tight">{cert.title}</h3>
                  <p className="text-neutral-600 text-sm font-normal line-clamp-2 leading-relaxed">{cert.highlight || cert.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {(cert.technologies || []).slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wide px-3 py-1.5 bg-white border border-neutral-200 rounded-full hover:border-black transition-colors duration-300">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button 
                      onClick={() => setSelectedCert(cert)} 
                      className="text-sm font-bold text-neutral-700 hover:text-black transition-colors duration-300 underline underline-offset-4"
                    >
                      View Details
                    </button>
                    <span className="text-xs text-neutral-500 font-medium bg-neutral-100 px-4 py-2 rounded-full">{cert.date}</span>
                  </div>
                </div>
              </article>
            ))}
            <div className="flex-none w-40 xl:w-48" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 lg:mt-20">
            <div className="flex items-center justify-center gap-4 bg-white/60 backdrop-blur-md px-8 py-6 rounded-full border border-neutral-200 shadow-lg">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 text-center">
                <span className="block sm:inline">Swipe or use navigation controls</span>
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline">Alt + Arrow Keys</span>
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </div>
          </div>

          {selectedCert && (
            <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

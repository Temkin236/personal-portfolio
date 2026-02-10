
import React, { useRef, useEffect, useState } from 'react';
import type { Certificate } from '../types';

export const certs: Certificate[] = [
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
    description: 'Won 1st place at the CSEC ASTU Hackathon v1.0 by building Meri Direction Locator, an AI-powered smart campus navigation solution designed to help students, visitors, and staff easily find buildings, offices, services, and routes inside Adama Science and Technology University (ASTU). The platform provides accurate directions, shortest path suggestions, and location-based guidance for key campus facilities such as lecture halls, dormitories, mosques, cafeterias, and administrative offices. Enhanced with RAG (Retrieval-Augmented Generation) technology for intelligent query responses and natural language interaction. Contributed to full-stack development and system integration, focusing on reliable APIs, RAG-enabled query handling, and a seamless user experience. Our solution addressed a real and common problem faced by new students and visitors navigating a large university campus, standing out for its practical impact, user-friendly interface, and team collaboration, earning recognition from the judges for innovation, clarity of problem-solving, and technical execution.',
    highlight: 'Contributed to full-stack development and system integration for Team Divas — implementing RAG-backed features and end-to-end reliability, honored for practical impact and technical excellence.',
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-in zoom-in-95 duration-300 flex flex-col my-8 min-h-[80vh] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 flex items-center justify-center transition-all duration-200 border border-gray-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-52 sm:h-64 flex-shrink-0 overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="space-y-5">
            <div className="space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b-2 border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1.5 rounded-full">Certificate of Achievement</span>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-green-700">Verified</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3">{cert.title}</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {(cert.technologies || []).map(tech => (
                    <span key={tech} className="text-xs font-semibold text-gray-700 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    Issuer
                  </p>
                  <p className="text-base font-bold text-gray-900">{cert.issuer}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Date Issued
                  </p>
                  <p className="text-base font-bold text-gray-900">{cert.date}</p>
                </div>
              </div>
            </div>

              {cert.description && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    About This Certification
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">{cert.description}</p>
                </div>
              )}

              {cert.highlight && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-5 rounded-r-lg shadow-sm">
                  <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    Key Achievement
                  </h3>
                  <p className="text-sm text-blue-900 leading-relaxed">{cert.highlight}</p>
                </div>
              )}

              {cert.team && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-5 rounded-r-lg shadow-sm">
                  <h3 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                    Team Collaborators
                  </h3>
                  <p className="text-sm text-amber-900 leading-relaxed">{cert.team}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-gray-100">
                <button
                  onClick={handleDownload}
                  className="flex-1 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:from-gray-800 hover:to-gray-700 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Certificate
                </button>
                {cert.link && cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-gray-900 border-2 border-gray-300 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-gray-50 hover:border-gray-900 active:scale-[0.98] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CertificatesExtras {
  navigate?: (path: string) => void;
  viewId?: string | undefined;
}

const Certificates: React.FC<CertificatesExtras> = ({ navigate, viewId }) => {
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
                onClick={() => {
                  console.log('Certificates: card clicked', cert.id);
                  if (navigate) return navigate(`/certificates/${cert.id}`);
                  setSelectedCert(cert);
                }}
                onKeyDown={(e) => { if (e.key === 'Enter') { if (navigate) return navigate(`/certificates/${cert.id}`); setSelectedCert(cert); } }}
                role="button"
                tabIndex={0}
                className="group relative flex-none w-72 sm:w-80 flex flex-col cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-2 hover:border-neutral-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover filter grayscale brightness-50 contrast-90 transition-all duration-[1.8s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 group-hover:contrast-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'; }}
                  />

                  {/* dark overlay until hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none z-0" />

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

          {selectedCert && !navigate && (
            <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

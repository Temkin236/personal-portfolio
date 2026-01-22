
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

// Certificate detail modal (moved above to avoid TSX parsing ambiguity)
const Toast: React.FC<{ message: string; visible: boolean }> = ({ message, visible }) => (
  <div className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-[300] transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
    <div className="bg-black/90 backdrop-blur-xl text-white px-8 py-4 rounded-full flex items-center gap-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-neutral-800">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" />
        <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.4em]">{message}</span>
    </div>
  </div>
);

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

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[12px]" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white/98 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50">
        <button onClick={onClose} className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/80 border flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">✕</button>

        <div className="flex flex-col">
          <div className="relative h-64 overflow-hidden bg-neutral-900">
            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-12 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Certificate</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold text-black tracking-tighter">{cert.title}</h2>
              <div className="flex gap-3 flex-wrap">
                {(cert.technologies || []).map(t => (
                  <span key={t} className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-4 py-2 bg-neutral-50 border border-neutral-100 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {cert.highlight && <p className="font-semibold text-neutral-700">{cert.highlight}</p>}
            {cert.description && <p className="text-neutral-500 text-lg leading-relaxed">{cert.description}</p>}

            <div className="flex gap-4 pt-6">
              <a href={cert.link} className="flex-1 text-center bg-black text-white py-4 rounded-3xl font-bold uppercase tracking-[0.4em] text-[10px]">Verify</a>
              <button onClick={onClose} className="flex-1 text-center bg-white text-black border py-4 rounded-3xl font-bold uppercase tracking-[0.4em] text-[10px]">Close</button>
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
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });

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
    <div className="py-20 bg-neutral-50 relative">
      <Toast visible={toast.visible} message={toast.message} />

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-4xl font-bold">Verified Milestones.</h2>
          <p className="text-sm text-neutral-400">{certs.length} Professional Certifications</p>
        </header>

        <div className="flex justify-between items-center mb-6">
          <div />
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="px-3 py-2 bg-white rounded">◀</button>
            <button onClick={() => scroll('right')} className="px-3 py-2 bg-white rounded">▶</button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-6">
          <div className="flex-none w-8" />
          {certs.map((cert, index) => (
            <article
              key={cert.id}
              className="group relative flex-none w-80 sm:w-96 flex flex-col"
              style={{ scrollSnapAlign: 'start' }}
              onMouseEnter={() => setToast({ visible: true, message: cert.title })}
              onMouseLeave={() => setToast({ visible: false, message: '' })}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] sm:rounded-[4rem] bg-neutral-50 border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-[1.2s] hover:shadow-[0_60px_130px_rgba(0,0,0,0.08)] hover:-translate-y-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale opacity-95 transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'; }}
                />

                <div className="absolute top-6 left-6 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black font-bold text-sm shadow-lg">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <button
                    onClick={() => {
                      const techs = cert.technologies?.join(' · ') || 'Details';
                      setToast({ visible: true, message: `Opening details — ${techs}` });
                      setTimeout(() => setToast({ visible: false, message: '' }), 1200);
                      setTimeout(() => setSelectedCert(cert), 350);
                    }}
                    className="relative px-8 sm:px-10 py-5 sm:py-6 bg-black text-white rounded-full shadow-2xl flex flex-col items-center gap-1 overflow-hidden active:scale-95"
                  >
                    <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400">Review Data</span>
                    <span className="relative z-10 text-[11px] font-black uppercase tracking-tight">Specifications</span>
                  </button>
                </div>

                <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-lg">🔗</div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 space-y-4 flex-grow px-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em]">Certificate</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold capitalize transition-all duration-700 group-hover:translate-x-2 group-hover:text-black">{cert.title}</h3>
                <p className="text-neutral-400 text-sm font-medium line-clamp-2 leading-relaxed">{cert.highlight || cert.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {(cert.technologies || []).slice(0, 3).map(t => (
                    <span key={t} className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button onClick={() => {
                    const techs = cert.technologies?.join(' · ') || 'Details';
                    setToast({ visible: true, message: `Opening details — ${techs}` });
                    setTimeout(() => setToast({ visible: false, message: '' }), 1200);
                    setTimeout(() => setSelectedCert(cert), 350);
                  }} className="text-sm font-bold text-neutral-600">View Details</button>
                  <span className="text-xs text-neutral-400">{cert.date}</span>
                </div>
              </div>
            </article>
          ))}
          <div className="flex-none w-8" />
        </div>

        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}

      </div>
    </div>
  );
};

export default Certificates;

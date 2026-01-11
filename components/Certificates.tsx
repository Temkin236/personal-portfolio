
import React from 'react';
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
  return (
    <div className="py-24 sm:py-32 px-6 lg:px-24 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-8 h-[1px] bg-black" />
             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400">02 // Credentials</h4>
          </div>
          <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">Verified <span className="text-neutral-300">Milestones.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert) => (
            <div key={cert.id} className="group relative bg-white rounded-[3rem] border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-700 overflow-hidden flex flex-col">
              {/* Image Preview Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              </div>

              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="text-[9px] font-black text-neutral-300 uppercase tracking-widest">{cert.date}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-bold leading-tight text-black">{cert.title}</h3>
                    <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.2em]">{cert.issuer}</p>
                  </div>
                </div>

                <a 
                  href={cert.link} 
                  className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-neutral-300 group-hover:text-black transition-all pt-4"
                >
                  Verify Authenticity
                  <svg className="w-3 h-3 translate-y-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;


import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  { year: '2021 — 2025', role: 'Full Stack Engineering Focus', company: 'ASTU (ECE Foundation)', description: 'Leveraging Electronics principles to build high-performance software and autonomous agents.' },
  { year: '2023 — Present', role: 'Core Software Lead', company: 'CSEC ASTU', description: 'Architecting scalable web solutions and automation tools for the university tech community.' },
  { year: '2024 — Present', role: 'Data Annotation Specialist', company: 'AI Workflows', description: 'Designing high-precision annotation pipelines for fine-tuning large language models.' }
];

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-20 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                  <span className="text-[10px] font-bold">01</span>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Biography</h4>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black tracking-tighter leading-tight">
                Logic to <br /><span className="text-neutral-200">Scale.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium md:max-w-md lg:max-w-lg">
              I am a <span className="text-black font-black">Full Stack Developer</span> with a core foundation as a <span className="italic">4th-year ECE candidate at ASTU</span>. I bridge the gap between complex hardware systems and elegant, user-centric software.
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
               <p className="text-[9px] font-black uppercase text-neutral-400 tracking-[0.3em] mb-2">Technical Base</p>
               <p className="font-heading font-bold text-xl">Full Stack & Agentic AI</p>
               <p className="text-sm text-neutral-500 font-medium mt-1 italic">Building the next generation of web-driven AI solutions.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-black">Chronology</h4>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>

            <div className="relative mt-8">
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-neutral-100"></div>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group relative pl-0 md:pl-12 lg:pl-16">
                    <div className="absolute md:left-2 lg:left-6 top-3 md:top-4 w-3 h-3 rounded-full bg-black"></div>

                    <div className="md:ml-6">
                      <span className="text-xs font-black text-neutral-300 uppercase tracking-widest">{exp.year}</span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold transition-transform duration-500 group-hover:translate-x-3 mt-2">{exp.role}</h3>
                      <p className="text-neutral-400 font-bold uppercase text-xs tracking-[0.3em] mt-1">{exp.company}</p>

                      <p className="mt-3 md:mt-4 md:max-w-md text-neutral-500 font-medium text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    const [showAbout, setShowAbout] = useState(true);
    const [showServices, setShowServices] = useState(false);
    return (
      <section id="about" className="about-section">
        <button onClick={() => setShowAbout((v) => !v)} className="collapsible-btn">About Me</button>
        {showAbout && (
          <div className="collapsible-content">
            <h2>About Me</h2>
            <p>/* ...about content... */</p>
          </div>
        )}
        <button onClick={() => setShowServices((v) => !v)} className="collapsible-btn">Services</button>
        {showServices && (
          <div className="collapsible-content">
            {/* Services content here, previously from <Services /> */}
          </div>
        )}
      </section>
    );
};

export default About;

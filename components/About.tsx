
import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  { year: '2021 — 2025', role: 'Full Stack Engineering Focus', company: 'ASTU (ECE Foundation)', description: 'Leveraging Electronics principles to build high-performance software and autonomous agents.' },
  { year: '2023 — Present', role: 'Core Software Lead', company: 'CSEC ASTU', description: 'Architecting scalable web solutions and automation tools for the university tech community.' },
  { year: '2024 — Present', role: 'Data Annotation Specialist', company: 'AI Workflows', description: 'Designing high-precision annotation pipelines for fine-tuning large language models.' }
];

const About: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 px-6 lg:px-20 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                  <span className="text-[9px] font-bold">01</span>
                </div>
                <h4 className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">Biography</h4>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-black tracking-tight leading-tight">
                Logic to <br /><span className="text-neutral-200">Scale.</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-medium">
              I am a <span className="text-black font-bold">Full Stack Developer</span> with a core foundation as a <span className="italic">4th-year ECE candidate at ASTU</span>.
            </p>
            
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
               <p className="text-[8px] font-bold uppercase text-neutral-400 tracking-wider mb-1">Technical Base</p>
               <p className="font-heading font-bold text-base">Full Stack & Agentic AI</p>
               <p className="text-xs text-neutral-500 font-medium mt-1">Building next-gen web AI solutions.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-black">Experience</h4>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>

            <div className="relative mt-6">
              <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-neutral-100"></div>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group relative pl-0 md:pl-10">
                    <div className="absolute md:left-2 top-2 w-2 h-2 rounded-full bg-black"></div>

                    <div className="md:ml-4">
                      <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider">{exp.year}</span>
                      <h3 className="text-lg md:text-xl font-heading font-bold transition-transform duration-500 group-hover:translate-x-2 mt-1">{exp.role}</h3>
                      <p className="text-neutral-400 font-bold uppercase text-[9px] tracking-wider mt-1">{exp.company}</p>

                      <p className="mt-2 text-neutral-500 font-medium text-sm leading-relaxed">
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

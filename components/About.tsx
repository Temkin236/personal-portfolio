
import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  { year: '2021 — 2025', role: 'B.Sc in Electronics & Communication', company: 'ASTU (Adama Science & Technology University)', description: '4th-year candidate. Specialized in Signal Processing, Embedded Systems, and AI-Hardware Integration.' },
  { year: '2023 — Present', role: 'Core Member', company: 'CSEC ASTU', description: 'Driving software innovation within the Computer Science club. Lead on agentic logic and automation tasks.' },
  { year: '2024 — Present', role: 'Agentic Systems Developer', company: 'Innovation Lab', description: 'Participating in global hackathons and developing autonomous data annotation pipelines.' }
];

const About: React.FC = () => {
  return (
    <div className="py-24 lg:py-48 px-6 lg:px-24 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                  <span className="text-[10px] font-bold">01</span>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Biography</h4>
              </div>
              <h2 className="text-6xl sm:text-8xl font-heading font-bold text-black tracking-tighter leading-[0.85]">
                Circuit to <br /><span className="text-neutral-200">Swarms.</span>
              </h2>
            </div>
            <p className="text-xl text-neutral-500 leading-relaxed font-medium max-w-md">
              My engineering foundation lies in <span className="text-black font-bold italic">Electronics & Communication</span>. I apply hardware-level precision to high-level <span className="text-black font-bold">Autonomous Intelligence</span>.
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
               <p className="text-[9px] font-black uppercase text-neutral-400 tracking-[0.3em] mb-2">Institutional Anchor</p>
               <p className="font-heading font-bold text-xl">ASTU - Ethiopia</p>
               <p className="text-sm text-neutral-500 font-medium mt-1 italic">Building the next generation of ECE-driven AI solutions.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-black">Chronology</h4>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <div className="divide-y divide-neutral-100">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group py-12 lg:py-16 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row justify-between gap-8">
                    <div className="space-y-4">
                      <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">{exp.year}</span>
                      <h3 className="text-3xl lg:text-4xl font-heading font-bold transition-transform duration-700 group-hover:translate-x-4">{exp.role}</h3>
                      <p className="text-neutral-400 font-bold uppercase text-[10px] tracking-[0.3em]">{exp.company}</p>
                    </div>
                    <p className="max-w-xs text-neutral-500 font-medium text-sm leading-relaxed pt-2">
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
  );
};

export default About;

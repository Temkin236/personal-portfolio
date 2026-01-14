
import React from 'react';

const skills = [
  { title: 'Full Stack Development', desc: 'Crafting production-ready applications with React, Node.js, and Go. Focused on high-scale architecture and seamless user flows.', tags: ['React', 'Next.js', 'Go', 'PostgreSQL'] },
  { title: 'Agentic AI & Data', desc: 'Specializing in autonomous AI agents and precision data annotation. Training and fine-tuning models for real-world reasoning.', tags: ['Python', 'LangGraph', 'Annotation', 'LLMs'] },
  { title: 'UI/UX Design', desc: 'Developing a designer\'s eye. Focused on minimalist aesthetics, accessible interfaces, and professional editorial branding.', tags: ['Figma', 'Typography', 'Layouts', 'User Research'] }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 px-6 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">03 // Technical Armory</h4>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold leading-[0.9] tracking-tighter">
              Software <br /><span className="text-neutral-700 italic">Expertise.</span>
            </h2>
            <p className="text-neutral-500 text-lg font-medium leading-relaxed">
              Merging <span className="text-white">Full Stack</span> mastery with the cutting-edge adaptability of AI agents and data-driven intelligence.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {skills.map((s, i) => (
              <div key={i} className="group p-8 sm:p-12 border border-neutral-900 rounded-[40px] hover:bg-neutral-900 transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                  <div className="space-y-6">
                    <div>
                        <h3 className="text-3xl font-heading font-bold mb-2">{s.title}</h3>
                        <p className="text-neutral-500 font-medium text-sm max-w-sm">{s.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {s.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-neutral-600 border border-neutral-800 px-3 py-1 rounded-full group-hover:text-white group-hover:border-neutral-500 transition-colors">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:border-white transition-all shrink-0">
                    <span className="text-xs font-bold">0{i+1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

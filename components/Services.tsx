import React from 'react';

const skills = [
  { title: 'Full Stack Development', desc: 'Crafting production-ready applications with React, Node.js, and Go. Focused on high-scale architecture and seamless user flows.', tags: ['React', 'Next.js', 'Go', 'PostgreSQL'] },
  { title: 'Agentic AI & Data', desc: 'Specializing in autonomous AI agents and precision data annotation. Training and fine-tuning models for real-world reasoning.', tags: ['Python', 'LangGraph', 'Annotation', 'LLMs'] },
  { title: 'UI/UX Design', desc: 'Developing a designer\'s eye. Focused on minimalist aesthetics, accessible interfaces, and professional editorial branding.', tags: ['Figma', 'Typography', 'Layouts', 'User Research'] }
];

const Services: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-6 lg:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">Technical Skills</h4>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold leading-tight tracking-tight">
              Software <br /><span className="text-neutral-300">Expertise.</span>
            </h2>
            <p className="text-neutral-600 text-sm font-medium leading-relaxed">
              Merging <span className="text-black font-bold">Full Stack</span> with AI agents and data intelligence.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {skills.map((s, i) => (
              <div key={i} className="group p-5 sm:p-6 border border-neutral-200 rounded-3xl hover:bg-neutral-50 transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-3">
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-1">{s.title}</h3>
                        <p className="text-neutral-600 font-medium text-xs max-w-md">{s.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {s.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 border border-neutral-200 px-2.5 py-1 rounded-full group-hover:text-black group-hover:border-neutral-400 transition-colors">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <div className="w-8 h-8 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-all shrink-0">
                    <span className="text-[10px] font-bold">0{i+1}</span>
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


import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

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

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[12px] transition-opacity duration-700" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white/98 backdrop-blur-3xl rounded-[4rem] overflow-hidden shadow-2xl border border-white/50 animate-in zoom-in-95 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 z-30 w-12 h-12 rounded-full bg-white/80 border border-neutral-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col">
          <div className="relative h-80 overflow-hidden bg-neutral-900">
            <img 
              src={project.image} 
              alt="" 
              className="w-full h-full object-cover opacity-90" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-16 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 border-b border-neutral-100 pb-2">Module Specifications</span>
                 <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[9px] font-black uppercase tracking-widest text-green-600">Verified Deployment</span>
                 </div>
              </div>
              <h2 className="text-6xl font-heading font-bold text-black tracking-tighter leading-none capitalize">{project.title}</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-5 py-2 bg-neutral-50 border border-neutral-100 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            
            <p className="text-neutral-500 text-xl leading-relaxed font-medium">{project.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.deployedUrl && (
                <a 
                  href={project.deployedUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center bg-black text-white py-6 rounded-3xl font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-neutral-800 active:scale-95 shadow-2xl shadow-black/20"
                >
                  Visit Live Production
                </a>
              )}
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 text-center bg-white text-black border border-neutral-200 py-6 rounded-3xl font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:border-black active:scale-95"
              >
                Inspect GitHub Tree
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (name: string) => {
    setToast({ visible: true, message: `Accessing ${name} module specifications...` });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '' });
  };

  return (
    <div className="py-24 sm:py-48 px-6 lg:px-24 bg-white relative overflow-hidden">
      <Toast visible={toast.visible} message={toast.message} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-black" />
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Verified Matrix</h4>
            </div>
            <h2 className="text-6xl sm:text-9xl font-heading font-bold text-black tracking-tighter leading-[0.85]">
              Production <br /><span className="text-neutral-200">Modules.</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-neutral-400 text-sm font-medium leading-relaxed border-l-2 border-neutral-100 pl-8 hidden sm:block">
            Strictly showcasing live applications and deployed architectural builds from my production repository stack.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-[4/5] bg-neutral-50 rounded-[4rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className="group relative flex flex-col h-full"
                onMouseEnter={() => showToast(project.title)}
                onMouseLeave={hideToast}
              >
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[4rem] bg-neutral-50 border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-[1.2s] ease-[var(--noir-ease)] hover:shadow-[0_60px_130px_rgba(0,0,0,0.1)] hover:-translate-y-6"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] ease-[var(--noir-ease)] group-hover:grayscale-0 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"; }}
                  />
                  
                  {/* Subtle technical overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="relative px-10 py-6 bg-black text-white rounded-full shadow-2xl flex flex-col items-center gap-1 group/btn overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400">Review Data</span>
                      <span className="relative z-10 text-[11px] font-black uppercase tracking-tight">Specifications</span>
                    </button>
                  </div>

                  <div className="absolute bottom-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                     <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                     </div>
                  </div>
                </div>
                
                <div className="mt-12 space-y-4 flex-grow px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em]">{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold capitalize transition-all duration-700 group-hover:translate-x-2 group-hover:text-black">{project.title}</h3>
                  <p className="text-neutral-400 text-sm font-medium line-clamp-2 leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;


import React, { useState, useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [fetchingGithub, setFetchingGithub] = useState(false);

  const showToast = (name: string) => {
    setToast({ visible: true, message: `Accessing ${name} module specifications...` });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '' });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 420; // Responsive scroll amount
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
      if (e.key === 'ArrowLeft' && e.ctrlKey) {
        scroll('left');
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && e.ctrlKey) {
        scroll('right');
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch GitHub repos and filter READMEs for screenshots + deployed link
  useEffect(() => {
    let mounted = true;
    const GITHUB_USER = 'Temkin236';
    const GITHUB_TOKEN = (import.meta as any).env?.VITE_GITHUB_TOKEN;

    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

    const decode = (b64: string) => {
      try { return atob(b64.replace(/\n/g, '')); } catch { return '' }
    };

    const findImage = (text: string, repoName: string, defaultBranch: string) => {
      const mdImg = /!\[[^\]]*\]\(([^)]+)\)/i.exec(text);
      const htmlImg = /<img[^>]+src=["']([^"']+)["']/i.exec(text);
      const raw = mdImg?.[1] || htmlImg?.[1];
      if (!raw) return null;
      if (/^https?:\/\//i.test(raw)) return raw;
      const cleaned = raw.replace(/^\.\/?/, '').replace(/^\//, '');
      return `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${defaultBranch}/${cleaned}`;
    };

    const findDeployedLink = (text: string) => {
      const urlRe = /https?:\/\/[^)\s"']+/g;
      const matches = text.match(urlRe) || [];
      const preferred = matches.find(u => /vercel\.app|netlify\.app|github\.io|herokuapp\.com|render\.com|fly\.dev|azurewebsites\.net|appspot\.com/i.test(u));
      if (preferred) return preferred;
      const external = matches.find(u => !/github\.com|raw\.githubusercontent\.com|npmjs\.com/i.test(u));
      return external || null;
    };

    (async () => {
      setFetchingGithub(true);
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, { headers });
        if (!res.ok) return;
        const repos = await res.json();

        const fetched: Project[] = [];

        await Promise.all(repos.map(async (repo: any) => {
          if (!repo || repo.fork) return;
          try {
            const r = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`, { headers });
            if (!r.ok) return;
            const readmeJson = await r.json();
            const content = decode(readmeJson.content || '');

            const image = findImage(content, repo.name, repo.default_branch || 'main');
            const deployed = findDeployedLink(content);

            if (image && deployed) {
              const description = repo.description || (content.split('\n\n')[0] || '').replace(/[#>*`]/g, '').trim();
              fetched.push({
                id: String(repo.id),
                title: repo.name.replace(/[-_]/g, ' '),
                category: repo.language || 'Project',
                description: description || 'Live deployment with README demo',
                image,
                tags: [repo.language || 'misc'],
                githubUrl: repo.html_url,
                deployedUrl: deployed,
                stars: repo.stargazers_count || 0,
              });
            }
          } catch (e) {
            return;
          }
        }));

        if (mounted && fetched.length) setGithubProjects(fetched.sort((a,b) => (b.stars||0) - (a.stars||0)));
      } catch (e) {
        // silent fail
      } finally {
        if (mounted) setFetchingGithub(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="py-24 sm:py-48 bg-white relative overflow-hidden">
      <Toast visible={toast.visible} message={toast.message} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-black" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Verified Matrix</h4>
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-9xl font-heading font-bold text-black tracking-tighter leading-[0.85]">
                Production <br /><span className="text-neutral-200">Modules.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-neutral-400 text-sm font-medium leading-relaxed border-l-2 border-neutral-100 pl-8 hidden sm:block">
              Strictly showcasing live applications and deployed architectural builds from my production repository stack.
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center px-6 lg:px-24 max-w-7xl mx-auto mb-12">
            <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
              {fetchingGithub ? 'Fetching GitHub...' : loading ? 'Loading...' : `${(githubProjects.length ? githubProjects.length : projects.length)} Active Deployments`}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
              aria-label="Scroll left (Ctrl + Left Arrow)"
              title="Scroll left (Ctrl + Left Arrow)"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
              aria-label="Scroll right (Ctrl + Right Arrow)"
              title="Scroll right (Ctrl + Right Arrow)"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="px-6 lg:px-24 max-w-7xl mx-auto">
            <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex-none w-72 sm:w-96 aspect-[4/5] bg-neutral-50 rounded-[4rem] animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <div 
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 px-6 lg:px-24 scrollbar-hide horizontal-scroll"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Spacer to center first item */}
            <div className="flex-none w-0 lg:w-32" />
            
            {(githubProjects.length ? githubProjects : projects).map((project, index) => (
              <article 
                key={project.id} 
                className="group relative flex-none w-80 sm:w-96 flex flex-col"
                style={{ scrollSnapAlign: 'start' }}
                onMouseEnter={() => showToast(project.title)}
                onMouseLeave={hideToast}
              >
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[3rem] sm:rounded-[4rem] bg-neutral-50 border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-[1.2s] ease-[var(--brand-ease)] hover:shadow-[0_60px_130px_rgba(0,0,0,0.1)] hover:-translate-y-6"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"; }}
                  />
                  
                  {/* Project number indicator */}
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8 z-10">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black font-bold text-sm shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Subtle technical overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="relative px-8 sm:px-10 py-5 sm:py-6 bg-black text-white rounded-full shadow-2xl flex flex-col items-center gap-1 group/btn overflow-hidden active:scale-95"
                    >
                      <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400">Review Data</span>
                      <span className="relative z-10 text-[11px] font-black uppercase tracking-tight">Specifications</span>
                    </button>
                  </div>

                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-lg">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                     </div>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-12 space-y-4 flex-grow px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em]">{project.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold capitalize transition-all duration-700 group-hover:translate-x-2 group-hover:text-black">{project.title}</h3>
                  <p className="text-neutral-400 text-sm font-medium line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            
            {/* End spacer */}
            <div className="flex-none w-32" />
          </div>
        )}

        {/* Scroll indicator */}
        <div className="px-6 lg:px-24 max-w-7xl mx-auto mt-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-[1px] bg-neutral-200" />
            <span className="text-[8px] font-black uppercase tracking-widest text-neutral-300 text-center">
              <span className="block sm:inline">Swipe or use navigation controls</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Ctrl + Arrow Keys</span>
            </span>
            <div className="w-2 h-[1px] bg-neutral-200" />
          </div>
        </div>
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

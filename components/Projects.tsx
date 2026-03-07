import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col my-8 min-h-[80vh] max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-64 sm:h-80 flex-shrink-0 overflow-hidden rounded-t-2xl bg-neutral-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
            }}
          />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                 <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">{project.category || 'Project'}</span>
                 <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                   <span className="text-xs font-medium text-green-600">Live & Deployed</span>
                 </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-neutral-600 px-3 py-1.5 bg-neutral-100 rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-sm font-semibold text-neutral-700 mb-2">About this project</h3>
              <p className="text-neutral-600 text-base leading-relaxed">{project.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {project.deployedUrl && (
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all hover:bg-neutral-800 active:scale-[0.98] flex items-center justify-center gap-2 filter grayscale brightness-50 contrast-90 duration-[1.8s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 group-hover:contrast-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  View Live Site
                </a>
              )}
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 text-center bg-white text-neutral-900 border-2 border-neutral-200 px-6 py-3 rounded-lg font-medium text-sm transition-all hover:border-neutral-900 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectsExtras {
  navigate?: (path: string) => void;
  viewId?: string | undefined;
}

const Projects: React.FC<ProjectsProps & ProjectsExtras> = ({ projects, loading, navigate, viewId }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [fetchingGithub, setFetchingGithub] = useState(false);

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

  // Fetch GitHub repos (own repos, contributed repos, and starred repos)
  useEffect(() => {
    let mounted = true;
    const GITHUB_USER = 'Temkin236';
    const GITHUB_TOKEN = (import.meta as any).env?.VITE_GITHUB_TOKEN;

    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

    const decode = (b64: string) => {
      try { return atob(b64.replace(/\n/g, '')); } catch { return '' }
    };

    const findImage = (text: string, repoName: string, owner: string, defaultBranch: string) => {
      const mdImg = /!\[[^\]]*\]\(([^)]+)\)/i.exec(text);
      const htmlImg = /<img[^>]+src=["']([^"']+)["']/i.exec(text);
      const raw = mdImg?.[1] || htmlImg?.[1];
      if (!raw) return null;
      if (/^https?:\/\//i.test(raw)) return raw;
      const cleaned = raw.replace(/^\.\/?/, '').replace(/^\//, '');
      return `https://raw.githubusercontent.com/${owner}/${repoName}/${defaultBranch}/${cleaned}`;
    };

    const findDeployedLink = (text: string) => {
      const urlRe = /https?:\/\/[^)\s"']+/g;
      const matches = text.match(urlRe) || [];
      const preferred = matches.find(u => /vercel\.app|netlify\.app|github\.io|herokuapp\.com|render\.com|fly\.dev|azurewebsites\.net|appspot\.com/i.test(u));
      if (preferred) return preferred;
      const external = matches.find(u => !/github\.com|raw\.githubusercontent\.com|npmjs\.com/i.test(u));
      return external || null;
    };

    const processRepo = async (repo: any, isContributor: boolean = false, isStarred: boolean = false): Promise<Project | null> => {
      if (!repo) return null;
      
      const owner = repo.owner?.login || GITHUB_USER;
      const repoName = repo.name;
      
      try {
        const r = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, { headers });
        if (!r.ok) return null;
        const readmeJson = await r.json();
        const content = decode(readmeJson.content || '');

        const image = findImage(content, repoName, owner, repo.default_branch || 'main');
        const deployed = findDeployedLink(content);

        if (image && deployed) {
          const description = repo.description || (content.split('\n\n')[0] || '').replace(/[#>*`]/g, '').trim();
          const tags = [repo.language || 'misc'];
          if (isContributor && owner !== GITHUB_USER) tags.push('Contributed');
          if (isStarred) tags.push('⭐ Starred');
          
          return {
            id: String(repo.id),
            title: repoName.replace(/[-_]/g, ' '),
            category: `${repo.language || 'Project'}${isContributor && owner !== GITHUB_USER ? ' • Contributor' : ''}`,
            description: description || 'Live deployment with README demo',
            image,
            tags,
            githubUrl: repo.html_url,
            deployedUrl: deployed,
            stars: repo.stargazers_count || 0,
          };
        }
      } catch (e) {
        return null;
      }
      return null;
    };

    (async () => {
      setFetchingGithub(true);
      try {
        const fetched: Project[] = [];
        const processedIds = new Set<string>();
        
        // First, get all starred repo IDs for quick lookup
        const starredRepoIds = new Set<string>();
        const starredRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/starred?per_page=100`, { headers });
        if (starredRes.ok) {
          const starredRepos = await starredRes.json();
          starredRepos.forEach((repo: any) => starredRepoIds.add(String(repo.id)));
        }

        // 1. Fetch and process user's own repositories
        const ownReposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, { headers });
        if (ownReposRes.ok) {
          const ownRepos = await ownReposRes.json();
          const ownProjects = await Promise.all(
            ownRepos
              .filter((repo: any) => !repo.fork)
              .map(async (repo: any) => {
                const isStarred = starredRepoIds.has(String(repo.id));
                return await processRepo(repo, false, isStarred);
              })
          );
          ownProjects.forEach(proj => {
            if (proj) {
              fetched.push(proj);
              processedIds.add(proj.id);
            }
          });
        }

        // 2. Fetch starred repos and check if user contributed to them
        if (starredRes.ok) {
          const starredRepos = await starredRes.json();
          
          const starredProjects = await Promise.all(
            starredRepos.map(async (repo: any) => {
              if (processedIds.has(String(repo.id))) return null; // Skip own repos
              
              // Check if user contributed to this starred repo
              try {
                const contribRes = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contributors?per_page=100`, { headers });
                let isContributor = false;
                
                if (contribRes.ok) {
                  const contributors = await contribRes.json();
                  isContributor = contributors.some((c: any) => c.login === GITHUB_USER);
                }
                
                // Only include if user contributed to it
                if (isContributor) {
                  return await processRepo(repo, true, true);
                }
              } catch {
                return null;
              }
              return null;
            })
          );
          
          starredProjects.forEach(proj => {
            if (proj && !processedIds.has(proj.id)) {
              fetched.push(proj);
              processedIds.add(proj.id);
            }
          });
        }

        if (mounted && fetched.length) {
          setGithubProjects(fetched.sort((a,b) => (b.stars||0) - (a.stars||0)));
        }
      } catch (e) {
        console.error('Error fetching GitHub projects:', e);
      } finally {
        if (mounted) setFetchingGithub(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-pink-50 to-orange-50 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-20 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-[2px] bg-black" />
                 <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">My Projects</h4>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
                Live Deployments
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-medium text-green-600">Active Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center px-6 lg:px-20 max-w-[1600px] mx-auto mb-10">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              {fetchingGithub ? 'Loading...' : loading ? 'Loading...' : `${(githubProjects.length ? githubProjects.length : projects.length)} Projects`}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="group w-11 h-11 rounded-full bg-white border-2 border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              aria-label="Scroll left (Ctrl + Left Arrow)"
              title="Scroll left (Ctrl + Left Arrow)"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-11 h-11 rounded-full bg-white border-2 border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              aria-label="Scroll right (Ctrl + Right Arrow)"
              title="Scroll right (Ctrl + Right Arrow)"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="px-6 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">
            <div className="flex gap-8 sm:gap-10 overflow-x-auto pb-6 scrollbar-hide">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex-none w-80 sm:w-[420px] aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-[4rem] animate-pulse shadow-xl" />
              ))}
            </div>
          </div>
        ) : (
          <div 
            ref={scrollRef}
            className="flex gap-8 sm:gap-10 lg:gap-12 overflow-x-auto pb-12 px-6 lg:px-24 xl:px-32 scrollbar-hide horizontal-scroll"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Spacer to center first item */}
            <div className="flex-none w-0 lg:w-40 xl:w-48" />
            
            {(githubProjects.length ? githubProjects : projects).map((project, index) => (
              <article 
                key={project.id} 
                onClick={() => {
                  console.log('Projects: card clicked', project.id);
                  if (navigate) return navigate(`/projects/${project.id}`);
                  setSelectedProject(project);
                }}
                onKeyDown={(e) => { if (e.key === 'Enter') { if (navigate) return navigate(`/projects/${project.id}`); setSelectedProject(project); } }}
                role="button"
                tabIndex={0}
                className="group relative flex-none w-72 sm:w-80 flex flex-col cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div 
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-2 hover:border-neutral-300"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.8s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"; }}
                  />

                  {/* dark overlay until hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none z-0" />
                  
                  {/* Project number indicator */}
                  <div className="absolute top-8 sm:top-10 left-8 sm:left-10 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-lg flex items-center justify-center text-black font-bold text-base shadow-2xl border-2 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-12 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        setSelectedProject(project);
                      }} 
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
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">{project.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold capitalize transition-all duration-500 leading-tight">{project.title}</h3>
                  <p className="text-neutral-600 text-sm font-normal line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wide px-3 py-1.5 bg-white border border-neutral-200 rounded-full hover:border-black transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            
            {/* End spacer */}
            <div className="flex-none w-40 xl:w-48" />
          </div>
        )}

        {/* Scroll indicator */}
        <div className="px-6 lg:px-24 xl:px-32 max-w-[1600px] mx-auto mt-16 lg:mt-20">
          <div className="flex items-center justify-center gap-4 bg-white/60 backdrop-blur-md px-8 py-6 rounded-full border border-neutral-200 shadow-lg">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 text-center">
              <span className="block sm:inline">Swipe or use navigation controls</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Ctrl + Arrow Keys</span>
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>
        </div>
      </div>

      {selectedProject && !navigate && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
    </div>
  );
};

export default Projects;

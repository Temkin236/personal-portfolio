import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ProjectPage from './components/ProjectPage';
import CertificatePage from './components/CertificatePage';
import { certs as ALL_CERTS } from './components/Certificates';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingIndicator from './components/LoadingIndicator';
import AdminApp from './components/admin/AdminApp';
import { Project } from './types';

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 'f1',
    title: 'Autonomous Swarm Intelligence',
    category: 'Agentic AI',
    description: 'A multi-agent system built with LangGraph for decentralized data processing and autonomous decision making.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'LangGraph', 'AI'],
    githubUrl: 'https://github.com/temkin236',
    deployedUrl: 'https://github.com/temkin236',
    stars: 12
  },
  {
    id: 'f2',
    title: 'Distributed Matrix',
    category: 'Full Stack',
    description: 'High-performance distributed system architecture with Go-based microservices and React real-time dashboard.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    tags: ['Go', 'React', 'gRPC'],
    githubUrl: 'https://github.com/temkin236',
    deployedUrl: 'https://github.com/temkin236',
    stars: 8
  }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showProjects, setShowProjects] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [route, setRoute] = useState<{ name: string; id?: string }>({ name: 'home' });

  const parsePath = useCallback(() => {
    const p = window.location.pathname.replace(/\/+$/, '');
    if (p === '' || p === '/') return { name: 'home' };
    const parts = p.split('/').filter(Boolean);
    if (parts[0] === 'admin') return { name: 'admin' };
    if (parts[0] === 'projects' && parts[1]) return { name: 'project', id: parts[1] };
    if (parts[0] === 'projects') return { name: 'projects' };
    if (parts[0] === 'certificates' && parts[1]) return { name: 'certificate', id: parts[1] };
    if (parts[0] === 'certificates') return { name: 'certificates' };
    return { name: 'home' };
  }, []);

  useEffect(() => {
    setRoute(parsePath());
    const onPop = () => setRoute(parsePath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [parsePath]);

  const navigate = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    // derive route directly from the provided path to avoid timing issues
    const p = path.replace(/\/+$/, '');
    const parts = p.split('/').filter(Boolean);
    let next = { name: 'home' } as { name: string; id?: string };
    if (parts.length === 0) next = { name: 'home' };
    else if (parts[0] === 'admin') next = { name: 'admin' };
    else if (parts[0] === 'projects' && parts[1]) next = { name: 'project', id: parts[1] };
    else if (parts[0] === 'projects') next = { name: 'projects' };
    else if (parts[0] === 'certificates' && parts[1]) next = { name: 'certificate', id: parts[1] };
    else if (parts[0] === 'certificates') next = { name: 'certificates' };

    setRoute(next);
    // ensure viewport is at top for the new page
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchGithubProjects = useCallback(async () => {
    if (!isOnline) {
      setGithubProjects(FALLBACK_PROJECTS);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/temkin236/repos?sort=updated&per_page=30');
      
      if (response.status === 403) {
        console.warn('GitHub API rate limit reached. Using fallback production data.');
        setGithubProjects(FALLBACK_PROJECTS);
        return;
      }

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        // Include non-fork repos (don't require homepage) so more projects surface
        const filtered: Project[] = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            id: repo.id.toString(),
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            category: repo.language || 'Production',
            description: repo.description || 'Live production environment implementation.',
            image: `https://opengraph.githubassets.com/1/temkin236/${repo.name}`,
            tags: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : [repo.language || 'Live'],
            githubUrl: repo.html_url,
            deployedUrl: repo.homepage || undefined,
            stars: repo.stargazers_count
          }));
        
        // If no deployed projects found, use fallbacks to ensure UI quality
        setGithubProjects(filtered.length > 0 ? filtered : FALLBACK_PROJECTS);
      }
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      setGithubProjects(FALLBACK_PROJECTS);
    } finally {
      setLoading(false);
    }
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    fetchGithubProjects();

    const sections = ['home', 'about', 'projects', 'certificates', 'services', 'contact'];
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [fetchGithubProjects]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Page Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-[110]">
        <div 
          className="h-full bg-slate-900 transition-all duration-300"
          style={{
            width: `${((['home', 'about', 'projects', 'certificates', 'services', 'contact'].indexOf(activeSection) + 1) / 6) * 100}%`
          }}
        />
      </div>

      {/* Section Navigation Dots */}
      <nav 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col items-end gap-4"
        aria-label="Section navigation"
      >
        {[{id: 'home', num: '01'}, {id: 'about', num: '02'}, {id: 'projects', num: '03'}, {id: 'certificates', num: '04'}, {id: 'services', num: '05'}, {id: 'contact', num: '06'}].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex items-center gap-3 focus:outline-none"
              aria-label={`Navigate to ${item.id}`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive ? 'opacity-100 text-white translate-x-0' : 'opacity-0 text-neutral-500 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                {item.id}
              </span>
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-bold transition-all duration-300 ${
                  isActive ? 'text-slate-900' : 'text-neutral-500 group-hover:text-neutral-700'
                }`}>
                  {item.num}
                </span>
                <div className={`transition-all duration-500 rounded-full ${
                  isActive ? 'w-2.5 h-2.5 bg-slate-900 scale-125' : 'w-2 h-2 bg-neutral-300 group-hover:bg-neutral-400 group-hover:scale-110'
                }`} />
              </div>
            </button>
          );
        })}
      </nav>

      {/* Scroll Indicator (bottom) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] hidden lg:flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors cursor-pointer"
           onClick={() => {
             const sections = ['home', 'about', 'projects', 'certificates', 'services', 'contact'];
             const currentIndex = sections.indexOf(activeSection);
             const nextSection = sections[Math.min(currentIndex + 1, sections.length - 1)];
             scrollTo(nextSection);
           }}>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] rotate-90 origin-center whitespace-nowrap">Scroll</span>
        <div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
          <div className="w-full h-6 bg-slate-900 absolute top-0 animate-scroll" />
        </div>
      </div>

      <Navbar activeSection={activeSection} navigate={navigate} />
      
      <LoadingIndicator isLoading={loading} isOffline={!isOnline} />
      
      {/* Debug overlay - temporary */}
      <div className="fixed bottom-6 left-6 z-[120] bg-white/95 text-sm text-slate-900 p-3 rounded-lg border border-neutral-200 shadow-lg">
        <div><strong>Route:</strong> {route.name}{route.id ? ` / ${route.id}` : ''}</div>
        <div><strong>Path:</strong> {typeof window !== 'undefined' ? window.location.pathname : ''}</div>
        <div><strong>Projects loaded:</strong> {githubProjects.length}</div>
        <div className="mt-2 text-xs text-neutral-500">Click a CTA and watch URL + this box update.</div>
      </div>
      
      <main id="main-content" className="scroll-smooth">
        {route.name === 'admin' ? (
          <div id="admin-root"><AdminApp /></div>
        ) : (
          <>
            <section id="home"><Hero onOpenProjects={() => { navigate('/projects'); }} onOpenCertificates={() => { navigate('/certificates'); }} projectsCount={githubProjects.length} /></section>
            <section id="about" className="reveal"><About /></section>
            <section id="projects" className="reveal">
              <Projects projects={githubProjects} loading={loading} navigate={navigate} />
            </section>
            <section id="certificates" className="reveal"><Certificates navigate={navigate} /></section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;


import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGithubProjects = useCallback(async () => {
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
        // Strictly filter for repositories that have a homepage (deployed)
        const filtered: Project[] = data
          .filter((repo: any) => !repo.fork && repo.homepage)
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
    <div className="relative min-h-screen">
      <nav 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-0 z-[100] flex lg:flex-col items-center gap-4 bg-white/80 backdrop-blur-2xl px-6 py-4 lg:py-8 lg:px-4 rounded-full border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
        aria-label="Progress navigation"
      >
        {['home', 'about', 'projects', 'certificates', 'services', 'contact'].map((id) => {
          const isActive = activeSection === id;
          return (
            <button 
              key={id}
              onClick={() => scrollTo(id)}
              className="group relative flex items-center justify-center p-2 focus:outline-none rounded-full"
              aria-label={`Scroll to ${id}`}
            >
              <div className={`transition-all duration-700 rounded-full ${isActive ? 'h-6 w-1.5 bg-black' : 'h-1.5 w-1.5 bg-neutral-200 group-hover:bg-neutral-500'}`} />
              <span className={`absolute right-10 text-[10px] font-black uppercase tracking-[0.3em] hidden lg:block transition-all duration-500 whitespace-nowrap bg-black text-white px-3 py-1 rounded-md ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                {id}
              </span>
            </button>
          );
        })}
      </nav>

      <Navbar activeSection={activeSection} />
      
      <main id="main-content">
        <section id="home"><Hero /></section>
        <section id="about" className="reveal"><About /></section>
        <section id="projects" className="reveal">
          <Projects projects={githubProjects} loading={loading} />
        </section>
        {/* Manifest section removed */}
        <section id="certificates" className="reveal"><Certificates /></section>
        <section id="services" className="reveal"><Services /></section>
        <section id="contact" className="reveal"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

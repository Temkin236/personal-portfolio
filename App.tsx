import React, { useState, useEffect, useCallback } from 'react';
import Projects from './components/Projects';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGithubProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/temkin236/repos?sort=updated&per_page=30');
      
      if (response.status === 403) {
        console.warn('GitHub API rate limit reached. Falling back to cached data.');
        return;
      }

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        // Strictly filter for repositories that have a homepage (deployed)
        const filtered = data
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
        
        setGithubProjects(filtered);
      }
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
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

    const sections = ['home', 'about', 'projects', 'manifest', 'certificates', 'services', 'contact'];
    
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
      <main id="main-content">
        <section id="projects">
          <Projects projects={githubProjects} loading={loading} />
        </section>
      </main>
    </div>
  );
};

export default App;

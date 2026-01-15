import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const GITHUB_USER = 'Temkin236';
    const GITHUB_TOKEN = (import.meta as any).env?.VITE_GITHUB_TOKEN;

    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

    const decode = (b64: string) => {
      try { return atob(b64.replace(/\n/g, '')); } catch { return ''; }
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
      return preferred || matches.find(u => !/github\.com|raw\.githubusercontent\.com|npmjs\.com/i.test(u));
    };

    (async () => {
      setLoading(true);
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

        setGithubProjects(fetched.sort((a, b) => (b.stars || 0) - (a.stars || 0)));
      } catch (e) {
        console.error('Error fetching GitHub projects:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="py-24 sm:py-48 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-5xl sm:text-7xl lg:text-9xl font-heading font-bold text-black tracking-tighter leading-[0.85]">
                Project <br /><span className="text-neutral-200">Showcase</span>
              </h2>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="px-6 lg:px-24 max-w-7xl mx-auto">
            <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex-none w-72 sm:w-96 aspect-[4/5] bg-neutral-50 rounded-[4rem] animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <div 
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 px-6 lg:px-24"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex-none w-0 lg:w-32" />
            {githubProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="group relative flex-none w-80 sm:w-96 flex flex-col"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[3rem] sm:rounded-[4rem] bg-neutral-50 border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-[1.2s] ease-[var(--brand-ease)] hover:shadow-[0_60px_130px_rgba(0,0,0,0.1)] hover:-translate-y-6"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] ease-[var(--brand-ease)] group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="mt-8 sm:mt-12 space-y-4 flex-grow px-4">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold capitalize transition-all duration-700 group-hover:translate-x-2 group-hover:text-black">{project.title}</h3>
                  <p className="text-neutral-400 text-sm font-medium line-clamp-2 leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
            <div className="flex-none w-32" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

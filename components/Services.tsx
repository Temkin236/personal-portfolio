import React from 'react';

const skills = [
  { title: 'Full Stack Development', desc: 'Crafting production-ready applications with React, Node.js, and Go. Focused on high-scale architecture and seamless user flows.', tags: ['React', 'Next.js', 'Go', 'PostgreSQL'] },
  { title: 'Agentic AI & Data', desc: 'Specializing in autonomous AI agents and precision data annotation. Training and fine-tuning models for real-world reasoning.', tags: ['Python', 'LangGraph', 'Annotation', 'LLMs'] },
  { title: 'UI/UX Design', desc: 'Developing a designer\'s eye. Focused on minimalist aesthetics, accessible interfaces, and professional editorial branding.', tags: ['Figma', 'Typography', 'Layouts', 'User Research'] }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 px-6 lg:px-20 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-600">💼 What I Do</h3>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-gray-900">I design, build, and improve modern web applications and intelligent AI-powered systems</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">I build fast, scalable, production-ready software that solves real problems with clean architecture, thoughtful UX, and reliable backend logic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 border rounded-lg shadow-sm bg-neutral-50">
            <h4 className="text-lg font-semibold">🌐 Full-Stack Web Development</h4>
            <p className="mt-3 text-neutral-600">I build complete, end-to-end web applications — from idea to deployment.</p>
            <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
              <li>Responsive, high-performance frontend interfaces</li>
              <li>Secure and scalable backend APIs</li>
              <li>Clean architecture with maintainable code</li>
              <li>SEO-friendly and accessible UI</li>
              <li>Production deployment and optimization</li>
            </ul>
            <div className="mt-3 text-sm text-neutral-500">Tech: React, Next.js, TypeScript, Node.js, Express, MongoDB</div>
          </article>

          <article className="p-6 border rounded-lg shadow-sm bg-neutral-50">
            <h4 className="text-lg font-semibold">🤖 Agentic AI & Intelligent Systems</h4>
            <p className="mt-3 text-neutral-600">I develop agent-based AI solutions that can reason, automate tasks, and answer questions intelligently.</p>
            <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
              <li>AI agents that understand user intent</li>
              <li>RAG-based systems using personal or project data</li>
              <li>AI chatbots trained on custom knowledge (portfolio, resume, docs)</li>
              <li>Backend AI workflows and automation</li>
            </ul>
            <div className="mt-3 text-sm text-neutral-500">Tech: Python, Agentic AI concepts, AI workflows, data preprocessing</div>
          </article>

          <article className="p-6 border rounded-lg shadow-sm bg-neutral-50">
            <h4 className="text-lg font-semibold">🔧 Backend & API Development</h4>
            <p className="mt-3 text-neutral-600">I design backend systems that are reliable, scalable, and easy to extend.</p>
            <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
              <li>RESTful API design</li>
              <li>Authentication & authorization</li>
              <li>Database modeling and optimization</li>
              <li>Integration with third-party services</li>
            </ul>
            <div className="mt-3 text-sm text-neutral-500">Tech: Node.js, Express.js, MongoDB</div>
          </article>

          <article className="p-6 border rounded-lg shadow-sm bg-neutral-50">
            <h4 className="text-lg font-semibold">🎨 UI Engineering & UX Optimization</h4>
            <p className="mt-3 text-neutral-600">I focus on clarity, performance, and usability, not just visuals.</p>
            <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
              <li>Clean, modern UI design</li>
              <li>Component-driven architecture</li>
              <li>Mobile-first and responsive layouts</li>
              <li>Performance optimization and accessibility</li>
            </ul>
            <div className="mt-3 text-sm text-neutral-500">Tech: Tailwind CSS, HTML5, CSS3</div>
          </article>

          <article className="p-6 border rounded-lg shadow-sm bg-neutral-50 md:col-span-2">
            <h4 className="text-lg font-semibold">📦 Deployment & DevOps (Entry–Mid Level)</h4>
            <p className="mt-3 text-neutral-600">I ship projects, not just code — focusing on deployable, maintainable deliveries.</p>
            <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
              <li>Git-based workflows</li>
              <li>CI-ready project structure</li>
              <li>Cloud deployment and environment management</li>
            </ul>
            <div className="mt-3 text-sm text-neutral-500">Tech: Git, GitHub, Vercel, Docker (basic)</div>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border bg-neutral-50">
            <h5 className="font-semibold">🔥 Core Technical Skills</h5>
            <ul className="mt-2 text-sm text-neutral-600 space-y-1">
              <li>Full-stack application development</li>
              <li>API design & backend architecture</li>
              <li>Agentic AI systems & RAG pipelines</li>
              <li>Frontend performance optimization</li>
              <li>Database design & data handling</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-neutral-50">
            <h5 className="font-semibold">⚡ Professional Strengths</h5>
            <ul className="mt-2 text-sm text-neutral-600 space-y-1">
              <li>Fast learner & highly adaptable</li>
              <li>Strong problem-solving mindset</li>
              <li>Clean code & best practices</li>
              <li>Comfortable working independently or in teams</li>
              <li>Continuous improvement & self-driven learning</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-neutral-50">
            <h5 className="font-semibold">🏆 Why Hire Me?</h5>
            <ul className="mt-2 text-sm text-neutral-600 space-y-1">
              <li>I understand both frontend and backend, not just one side</li>
              <li>I’m actively working with agentic AI, not just reading about it</li>
              <li>I focus on real-world, production-ready solutions</li>
              <li>I learn quickly and adapt to new technologies</li>
              <li>I care about code quality, scalability, and user experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="rounded-lg p-5 bg-neutral-900 text-white">
            <div className="font-semibold">✨ One-Line Value Proposition</div>
            <p className="mt-2 text-sm">Full-stack developer specializing in modern web applications and agentic AI systems, focused on building scalable, intelligent, and user-centric products.</p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
    </section>
  );
};

export default Services;

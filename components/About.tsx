import React from 'react';
import { Experience } from '../types';
import './About.css'; // Add a new CSS file for animations and typography

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-6 lg:px-20 bg-white border-y border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-600">👋 About Me</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">I’m Temkin Abdulmelik — Full‑Stack Developer & Agentic AI engineer</h2>

            <div className="mt-4 text-neutral-600 space-y-4 text-base">
              <p>I’m Temkin Abdulmelik, a Full-Stack Developer with a strong interest in building modern, scalable web applications and agentic AI systems.</p>

              <p>I enjoy working across the entire development lifecycle — from crafting clean, responsive user interfaces to designing reliable backend services and intelligent AI workflows. I focus on writing maintainable code, learning fast, and delivering real value through technology.</p>

              <p>I’m currently working on agentic AI projects, participating in hackathons, and continuously improving my skills by building production-ready applications. I’m a fast learner, adaptable to new tools and technologies, and comfortable working in dynamic, problem-driven environments.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <h4 className="text-sm font-semibold text-neutral-800">What I’m Focused On</h4>
                <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc list-inside">
                  <li>Building full-stack web applications</li>
                  <li>Developing agentic AI and intelligent systems</li>
                  <li>Designing clean, scalable backend architectures</li>
                  <li>Turning ideas into usable, real-world products</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <h4 className="text-sm font-semibold text-neutral-800">How I Work</h4>
                <ul className="mt-3 text-sm text-neutral-600 space-y-2">
                  <li>I learn fast and adapt quickly to new technologies.</li>
                  <li>I value clean code, clarity, and consistency.</li>
                  <li>I enjoy collaboration and problem-solving.</li>
                  <li>I focus on building systems that scale and last.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-neutral-800">🎯 My Goal</h4>
              <p className="mt-2 text-sm text-neutral-600">To grow as a full-stack engineer and AI developer by building impactful products, contributing to meaningful projects, and continuously pushing my technical and creative limits.</p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-white/50 border border-neutral-100 rounded-lg p-6 shadow-sm">
              <h4 className="text-sm font-bold text-neutral-700">🛠 Tech Stack</h4>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-semibold text-neutral-800">Frontend</div>
                  <ul className="mt-2 text-neutral-600 space-y-1">
                    <li>⚛️ React</li>
                    <li>▲ Next.js</li>
                    <li>🟦 TypeScript</li>
                    <li>🎨 Tailwind CSS</li>
                    <li>🧩 HTML5 & CSS3</li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-neutral-800">Backend</div>
                  <ul className="mt-2 text-neutral-600 space-y-1">
                    <li>🟢 Node.js</li>
                    <li>🚂 Express.js</li>
                    <li>🍃 MongoDB</li>
                    <li>🔗 REST APIs</li>
                    <li>🔐 Auth & Authorization</li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-neutral-800">AI / Agentic</div>
                  <ul className="mt-2 text-neutral-600 space-y-1">
                    <li>🐍 Python</li>
                    <li>🧠 Agentic AI Concepts</li>
                    <li>🔄 AI Workflows & Automation</li>
                    <li>🗂 Data Annotation & Preprocessing</li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-neutral-800">Tools</div>
                  <ul className="mt-2 text-neutral-600 space-y-1">
                    <li>🧰 Git & GitHub</li>
                    <li>⚡ Vite</li>
                    <li>🐳 Docker (basic)</li>
                    <li>☁️ Vercel</li>
                    <li>🖥 VS Code</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-sm">
              <div className="font-semibold text-neutral-800">✨ Short Version</div>
              <p className="mt-2 text-neutral-600">I’m a full-stack developer working on modern web applications and agentic AI systems. I’m a fast learner, problem solver, and passionate about building scalable, real-world software.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;

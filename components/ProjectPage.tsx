import React from 'react';
import type { Project } from '../types';

const ProjectPage: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-72 sm:h-96 bg-neutral-100">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <button onClick={onBack} className="mb-4 text-sm text-neutral-600 underline">← Back</button>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">{project.title}</h1>
          <p className="text-neutral-600 mb-6">{project.description}</p>
          <div className="flex gap-3">
            {project.deployedUrl && (
              <a className="px-4 py-2 bg-slate-900 text-white rounded" href={project.deployedUrl} target="_blank" rel="noreferrer">View Live</a>
            )}
            <a className="px-4 py-2 border rounded" href={project.githubUrl} target="_blank" rel="noreferrer">View Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

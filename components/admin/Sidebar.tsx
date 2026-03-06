import React from 'react';

type Props = { onSelect: (v: 'dashboard'|'about'|'projects'|'certificates'|'experience'|'resume'|'rag') => void };

const Sidebar: React.FC<Props> = ({ onSelect }) => {
  return (
    <aside className="w-64 border-r p-4 bg-neutral-50 min-h-screen">
      <div className="mb-6">
        <div className="text-xl font-bold">Admin</div>
        <div className="text-sm text-neutral-600">Temkin Abdulmelik</div>
      </div>
      <nav className="space-y-2 text-sm">
        <button onClick={() => onSelect('dashboard')} className="w-full text-left p-2 rounded hover:bg-white">Dashboard</button>
        <button onClick={() => onSelect('about')} className="w-full text-left p-2 rounded hover:bg-white">About</button>
        <button onClick={() => onSelect('projects')} className="w-full text-left p-2 rounded hover:bg-white">Projects</button>
        <button onClick={() => onSelect('certificates')} className="w-full text-left p-2 rounded hover:bg-white">Certificates</button>
        <button onClick={() => onSelect('experience')} className="w-full text-left p-2 rounded hover:bg-white">Experience</button>
        <button onClick={() => onSelect('resume')} className="w-full text-left p-2 rounded hover:bg-white">Resume</button>
        <button onClick={() => onSelect('rag')} className="w-full text-left p-2 rounded hover:bg-white">RAG</button>
      </nav>
    </aside>
  );
};

export default Sidebar;

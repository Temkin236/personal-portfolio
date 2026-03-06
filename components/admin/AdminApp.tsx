import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Login from './Login';

import AboutEditor from './AboutEditor';
import ProjectsManager from './ProjectsManager';
import CertificatesManager from './CertificatesManager';

const AdminApp: React.FC = () => {
  // Minimal client-side auth state (for prototype)
  const [token, setToken] = React.useState<string | null>(null);
  const [view, setView] = React.useState<'dashboard'|'about'|'projects'|'certificates'|'experience'|'resume'|'rag'>('dashboard');

  if (!token) return <div className="min-h-screen bg-gray-50"><Login onLogin={(t) => setToken(t)} /></div>;

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar onSelect={(v) => setView(v)} />
      <main className="flex-1 p-6">
        {view === 'dashboard' && <Dashboard token={token} />}
        {view === 'about' && <AboutEditor token={token} />}
        {view === 'projects' && <ProjectsManager token={token} />}
        {view === 'certificates' && <CertificatesManager token={token} />}
        {/* future: experience, resume, rag */}
      </main>
    </div>
  );
};

export default AdminApp;

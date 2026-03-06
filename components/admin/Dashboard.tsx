import React, { useEffect, useState } from 'react';

const Dashboard: React.FC<{ token: string }> = ({ token }) => {
  const [stats, setStats] = useState({ projects: 0, certificates: 0, experience: 0 });

  useEffect(() => {
    async function load() {
      try {
        const [p, c, e] = await Promise.all([
          fetch('/api/admin/projects').then(r => r.json()),
          fetch('/api/admin/certificates').then(r => r.json()),
          fetch('/api/admin/experience').then(r => r.json())
        ]);
        setStats({ projects: p.projects?.length || 0, certificates: c.certificates?.length || 0, experience: e.experience?.length || 0 });
      } catch (err) { console.error(err); }
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-neutral-50 border rounded">Projects<br/><strong className="text-xl">{stats.projects}</strong></div>
        <div className="p-4 bg-neutral-50 border rounded">Certificates<br/><strong className="text-xl">{stats.certificates}</strong></div>
        <div className="p-4 bg-neutral-50 border rounded">Experience<br/><strong className="text-xl">{stats.experience}</strong></div>
      </div>
    </div>
  );
};

export default Dashboard;

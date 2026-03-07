import React, { useEffect, useState } from 'react';
import '../About.css'; // Corrected the path to About.css

const AboutEditor: React.FC<{ token: string }> = ({ token }) => {
  const [about, setAbout] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/admin/about').then(r => r.json()).then(j => setAbout(j.about || { bio: '', roles: [], tech: [], softSkills: [] }));
  }, []);

  function updateField<K extends keyof any>(field: string, value: any) {
    setAbout((a: any) => ({ ...a, [field]: value }));
  }

  async function save() {
    setSaving(true);
    try {
      await fetch('/api/admin/about', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(about) });
      alert('Saved');
    } catch (err) { console.error(err); alert('Save failed'); }
    finally { setSaving(false); }
  }

  if (!about) return <div>Loading...</div>;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-10 relative">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Full-stack · React · TypeScript · Agentic AI</p>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mt-4">
            Hi, I&apos;m <span className="text-style">Temkin Abdulmelik</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            I design and ship modern, scalable web platforms and agentic AI systems — delivering end-to-end solutions from clean UIs to reliable backend services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Open for collaborations</p>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Edit About Section</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Bio (HTML allowed)</label>
            <textarea 
              value={about.bio} 
              onChange={e => updateField('bio', e.target.value)} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-40" 
              placeholder="Write a brief bio about yourself..."
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Roles (comma separated)</label>
            <input 
              value={(about.roles || []).join(', ')} 
              onChange={e => updateField('roles', e.target.value.split(',').map((s: string) => s.trim()))} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="e.g., Full-Stack Developer, AI Engineer"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Soft Skills (comma separated)</label>
            <input 
              value={(about.softSkills || []).join(', ')} 
              onChange={e => updateField('softSkills', e.target.value.split(',').map((s: string) => s.trim()))} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="e.g., Teamwork, Problem-solving, Communication"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Tech (format: name|icon|category, comma separated)</label>
            <textarea 
              value={(about.tech || []).map((t: any) => `${t.name}|${t.icon || ''}|${t.category || ''}`).join(', ')} 
              onChange={e => {
                const vals = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                const tech = vals.map((v: any) => {
                  const [name, icon, category] = v.split('|').map((x: any) => x?.trim());
                  return { name, icon: icon || '', category: category || '' };
                });
                updateField('tech', tech);
              }} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-32" 
              placeholder="e.g., React|react-icon|Frontend, Node.js|node-icon|Backend"
            />
          </div>

          <div className="text-right">
            <button 
              onClick={save} 
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-style {
          color: transparent;
          -webkit-text-stroke: 1px #000;
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -2px;
        }
      `}</style>
    </>
  );
};

export default AboutEditor;

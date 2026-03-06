import React, { useEffect, useState } from 'react';

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit About</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Bio (HTML allowed)</label>
          <textarea value={about.bio} onChange={e=>updateField('bio', e.target.value)} className="w-full p-2 border rounded h-40" />
        </div>

        <div>
          <label className="block text-sm font-medium">Roles (comma separated)</label>
          <input value={(about.roles || []).join(', ')} onChange={e=>updateField('roles', e.target.value.split(',').map((s:string)=>s.trim()))} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Soft Skills (comma)</label>
          <input value={(about.softSkills || []).join(', ')} onChange={e=>updateField('softSkills', e.target.value.split(',').map((s:string)=>s.trim()))} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Tech (format: name|icon|category, comma separated)</label>
          <textarea value={(about.tech || []).map((t:any)=>`${t.name}|${t.icon||''}|${t.category||''}`).join(', ')} onChange={e=>{
            const vals = e.target.value.split(',').map(s=>s.trim()).filter(Boolean);
            const tech = vals.map((v:any)=>{
              const [name, icon, category] = v.split('|').map((x:any)=>x?.trim());
              return { name, icon: icon||'', category: category||'' };
            });
            updateField('tech', tech);
          }} className="w-full p-2 border rounded h-24" />
        </div>

        <div>
          <button onClick={save} className="px-4 py-2 bg-slate-900 text-white rounded">{saving ? 'Saving...' : 'Save'}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;

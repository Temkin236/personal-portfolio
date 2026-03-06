import React, { useEffect, useState } from 'react';

type ProjectForm = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const empty: ProjectForm = { title: '', description: '', tech: [], liveUrl: '', githubUrl: '', featured: false };

const ProjectsManager: React.FC<{ token: string }> = ({ token }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [form, setForm] = useState<ProjectForm>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function load() {
    const j = await fetch('/api/admin/projects').then(r => r.json());
    setProjects(j.projects || []);
  }

  useEffect(() => { load(); }, []);

  function updateForm(field: keyof ProjectForm, value: any) { setForm(f => ({ ...f, [field]: value })); }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingId) {
        const j = await fetch(`/api/admin/projects/${editingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(form) }).then(r=>r.json());
        setProjects(ps => ps.map(p => p._id === editingId ? j.project : p));
        setEditingId(null);
      } else {
        const j = await fetch('/api/admin/projects', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(form) }).then(r=>r.json());
        setProjects(ps => [j.project, ...ps]);
      }
      setForm(empty);
    } catch (err) { console.error(err); alert('Failed'); }
  }

  async function remove(id: string) {
    if (!confirm('Delete project?')) return;
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    setProjects(ps => ps.filter(p => p._id !== id));
  }

  function startEdit(p: any) { setEditingId(p._id); setForm({ title: p.title, description: p.description, tech: p.tech || [], liveUrl: p.liveUrl || '', githubUrl: p.githubUrl || '', featured: !!p.featured }); }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <form onSubmit={submit} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input placeholder="Title" value={form.title} onChange={e=>updateForm('title', e.target.value)} className="p-2 border rounded" />
        <input placeholder="Tech (comma)" value={form.tech.join(', ')} onChange={e=>updateForm('tech', e.target.value.split(',').map(s=>s.trim()))} className="p-2 border rounded" />
        <input placeholder="Live URL" value={form.liveUrl} onChange={e=>updateForm('liveUrl', e.target.value)} className="p-2 border rounded md:col-span-2" />
        <input placeholder="GitHub URL" value={form.githubUrl} onChange={e=>updateForm('githubUrl', e.target.value)} className="p-2 border rounded md:col-span-2" />
        <textarea placeholder="Description" value={form.description} onChange={e=>updateForm('description', e.target.value)} className="p-2 border rounded md:col-span-2" />
        <label className="flex items-center gap-2"><input type="checkbox" checked={form.featured} onChange={e=>updateForm('featured', e.target.checked)} /> Featured</label>
        <div>
          <button className="px-4 py-2 bg-slate-900 text-white rounded">{editingId ? 'Update' : 'Create'}</button>
        </div>
      </form>

      <div className="space-y-3">
        {projects.map(p => (
          <div key={p._id} className="p-3 border rounded flex justify-between items-start">
            <div>
              <div className="font-bold">{p.title} {p.featured && <span className="text-xs text-white bg-slate-900 px-2 py-0.5 rounded ml-2">Featured</span>}</div>
              <div className="text-sm text-neutral-600">{p.description}</div>
              <div className="text-xs text-neutral-500">{(p.tech||[]).join(', ')}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>startEdit(p)} className="px-3 py-1 border rounded">Edit</button>
              <button onClick={()=>remove(p._id)} className="px-3 py-1 border rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManager;

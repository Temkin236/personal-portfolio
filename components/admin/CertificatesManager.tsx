import React, { useEffect, useState } from 'react';

const CertificatesManager: React.FC<{ token: string }> = ({ token }) => {
  const [certs, setCerts] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [year, setYear] = useState<number | ''>('');

  async function load() {
    const j = await fetch('/api/admin/certificates').then(r => r.json());
    setCerts(j.certificates || []);
  }

  useEffect(()=>{ load(); }, []);

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', file as File);
    fd.append('title', title);
    fd.append('issuer', issuer);
    fd.append('year', String(year));
    const res = await fetch('/api/admin/certificates', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: fd });
    const j = await res.json();
    setCerts(c => [j.certificate, ...c]);
  }

  async function remove(id:string) {
    if (!confirm('Delete certificate?')) return;
    await fetch(`/api/admin/certificates/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    setCerts(c => c.filter(x => x._id !== id));
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <form onSubmit={upload} className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="p-2 border rounded md:col-span-2" />
        <input placeholder="Issuer" value={issuer} onChange={e=>setIssuer(e.target.value)} className="p-2 border rounded" />
        <input placeholder="Year" value={year as any} onChange={e=>setYear(e.target.value ? Number(e.target.value) : '')} className="p-2 border rounded" />
        <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} className="p-2" />
        <div className="md:col-span-4">
          <button className="px-4 py-2 bg-slate-900 text-white rounded">Upload</button>
        </div>
      </form>

      <div className="space-y-3">
        {certs.map(c => (
          <div key={c._id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-neutral-500">{c.issuer} — {c.year}</div>
            </div>
            <div className="flex gap-2">
              {c.fileUrl && <a href={c.fileUrl} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">View</a>}
              <button onClick={()=>remove(c._id)} className="px-3 py-1 border rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesManager;

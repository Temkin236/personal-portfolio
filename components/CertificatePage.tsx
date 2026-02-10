import React from 'react';
import type { Certificate } from '../types';

const CertificatePage: React.FC<{ cert: Certificate; onBack: () => void }> = ({ cert, onBack }) => {
  if (!cert) return null;

  return (
    <div className="min-h-screen py-16 px-6 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-56 sm:h-72 bg-neutral-100 flex items-center justify-center p-6">
          <img src={cert.image} alt={cert.title} className="max-h-full object-contain" />
        </div>
        <div className="p-8">
          <button onClick={onBack} className="mb-4 text-sm text-neutral-600 underline">← Back</button>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">{cert.title}</h1>
          <p className="text-neutral-600 mb-4">{cert.description}</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-900 text-white rounded" onClick={() => {
              const link = document.createElement('a');
              link.href = cert.image || '';
              link.download = (cert.title || 'certificate').replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>Download</button>
            {cert.link && cert.link !== '#' && (
              <a className="px-4 py-2 border rounded" href={cert.link} target="_blank" rel="noreferrer">View Source</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;

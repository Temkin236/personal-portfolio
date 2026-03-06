/**
 * RAG pipeline helper (prototype)
 * - normalize content from DB
 * - chunk text
 * - call embedding provider (OpenAI, local model)
 * - persist to vector DB (Pinecone/Chroma)
 *
 * This file provides example functions and should be adapted to your chosen
 * embedding provider and vector DB.
 */
const axios = require('axios');

async function embedTexts(texts) {
  // Example: call OpenAI embeddings API (pseudocode)
  // Replace with your provider and key handling
  const API_KEY = process.env.OPENAI_API_KEY;
  if (!API_KEY) throw new Error('Missing OPENAI_API_KEY');

  const resp = await axios.post('https://api.openai.com/v1/embeddings', {
    model: 'text-embedding-3-small',
    input: texts
  }, { headers: { Authorization: `Bearer ${API_KEY}` } });

  return resp.data.data.map(d => d.embedding);
}

function normalizeForRAG({ about, projects, certificates, experience, resume }) {
  const items = [];
  if (about) items.push({ id: `about-${about._id}`, text: about.bio, meta: { type: 'about', roles: about.roles } });
  (projects || []).forEach(p => items.push({ id: `project-${p._id}`, text: `${p.title}\n\n${p.description}`, meta: { type: 'project', tech: p.tech } }));
  (certificates || []).forEach(c => items.push({ id: `cert-${c._id}`, text: `${c.title} — ${c.issuer} (${c.year})`, meta: { type: 'certificate' } }));
  (experience || []).forEach(e => items.push({ id: `exp-${e._id}`, text: `${e.role} @ ${e.company}\n\n${(e.responsibilities||[]).join('\n')}`, meta: { type: 'experience', skills: e.skills } }));
  if (resume) items.push({ id: `resume-${resume._id}`, text: resume.text, meta: { type: 'resume' } });
  return items;
}

module.exports = { embedTexts, normalizeForRAG };

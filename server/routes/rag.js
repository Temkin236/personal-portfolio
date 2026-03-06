const express = require('express');
const { normalizeForRAG, embedTexts } = require('../rag');

const router = express.Router();

// POST /api/rag/query { q }
router.post('/query', async (req, res) => {
  const q = req.body.q;
  if (!q) return res.status(400).json({ error: 'Missing query' });

  // Prototype flow: load normalized docs, embed query, perform similarity search
  // For now, return stub answer
  // TODO: integrate vector DB + embeddings

  // Example safe response using only server-side content (no external LLM call)
  res.json({ answer: `I can answer questions about Temkin's portfolio. You asked: ${q}` });
});

module.exports = router;

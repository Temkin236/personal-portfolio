const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const About = require('../models/About');
const Project = require('../models/Project');
const Certificate = require('../models/Certificate');
const Experience = require('../models/Experience');
const Resume = require('../models/Resume');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.replace('Bearer ', '');
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Simple file uploads (local) for prototype
const upload = multer({ dest: 'uploads/' });

// About
router.get('/about', async (req, res) => {
  const about = await About.findOne();
  res.json({ about });
});

router.post('/about', authMiddleware, async (req, res) => {
  let about = await About.findOne();
  if (!about) about = new About(req.body);
  else Object.assign(about, req.body);
  await about.save();
  res.json({ about });
});

// Projects CRUD
router.get('/projects', async (req, res) => {
  const list = await Project.find().sort({ featured: -1, createdAt: -1 });
  res.json({ projects: list });
});

router.post('/projects', authMiddleware, async (req, res) => {
  const p = new Project(req.body);
  await p.save();
  res.json({ project: p });
});

router.put('/projects/:id', authMiddleware, async (req, res) => {
  const p = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ project: p });
});

router.delete('/projects/:id', authMiddleware, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

// Certificates
router.get('/certificates', async (req, res) => {
  const list = await Certificate.find().sort({ year: -1 });
  res.json({ certificates: list });
});

router.post('/certificates', authMiddleware, upload.single('file'), async (req, res) => {
  const data = { ...req.body };
  if (req.file) data.fileUrl = `/uploads/${req.file.filename}`;
  const c = new Certificate(data);
  await c.save();
  res.json({ certificate: c });
});

router.put('/certificates/:id', authMiddleware, async (req, res) => {
  const c = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ certificate: c });
});

router.delete('/certificates/:id', authMiddleware, async (req, res) => {
  await Certificate.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

// Experience
router.get('/experience', async (req, res) => {
  const list = await Experience.find().sort({ startDate: -1 });
  res.json({ experience: list });
});

router.post('/experience', authMiddleware, async (req, res) => {
  const e = new Experience(req.body);
  await e.save();
  res.json({ experience: e });
});

// Resume
router.post('/resume', authMiddleware, upload.single('file'), async (req, res) => {
  const data = { fileUrl: req.file ? `/uploads/${req.file.filename}` : req.body.fileUrl };
  let r = await Resume.findOne();
  if (!r) r = new Resume(data);
  else Object.assign(r, data);
  await r.save();
  res.json({ resume: r });
});

// RAG export endpoint (export structured JSON)
router.get('/export/rag', authMiddleware, async (req, res) => {
  const about = await About.findOne();
  const projects = await Project.find();
  const certificates = await Certificate.find();
  const experience = await Experience.find();
  const resume = await Resume.findOne();

  const exportJson = {
    about,
    projects,
    certificates,
    experience,
    resume
  };
  res.json({ export: exportJson });
});

module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing credentials' });
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ error: 'Invalid' });
  const ok = await admin.verifyPassword(password);
  if (!ok) return res.status(401).json({ error: 'Invalid' });
  const token = jwt.sign({ sub: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
});

router.get('/me', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(decoded.sub).select('-passwordHash');
    res.json({ admin });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;

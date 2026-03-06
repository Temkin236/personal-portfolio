require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio-admin';

async function run() {
  await mongoose.connect(MONGO);
  const email = process.env.ADMIN_EMAIL || 'admin@local';
  const password = process.env.ADMIN_PASSWORD || 'password123';
  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log('Admin already exists:', email);
    process.exit(0);
  }
  const hash = await bcrypt.hash(password, 10);
  const a = new Admin({ email, passwordHash: hash, name: 'Admin' });
  await a.save();
  console.log('Created admin:', email, 'password:', password);
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });

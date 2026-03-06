require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const ragRoutes = require('./routes/rag');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio-admin';
mongoose.connect(MONGO)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo connect error', err));

app.use('/api/auth', authRoutes);
app.use('/api/admin', apiRoutes);
app.use('/api/rag', ragRoutes);

app.get('/', (req, res) => res.json({ ok: true, message: 'Portfolio Admin API' }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on ${port}`));

module.exports = app;

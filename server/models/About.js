const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  bio: { type: String, default: '' }, // rich text (HTML/MD)
  roles: [{ type: String }],
  tech: [{ name: String, icon: String, category: String }],
  softSkills: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('About', AboutSchema);

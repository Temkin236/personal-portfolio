const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  liveUrl: String,
  githubUrl: String,
  images: [String],
  featured: { type: Boolean, default: false },
  ragJson: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);

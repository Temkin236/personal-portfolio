const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  startDate: String,
  endDate: String,
  responsibilities: [String],
  skills: [String]
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);

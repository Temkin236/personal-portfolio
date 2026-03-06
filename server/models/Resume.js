const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  fileUrl: String,
  text: String // extracted text for RAG
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);

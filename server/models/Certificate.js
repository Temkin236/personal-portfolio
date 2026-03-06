const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  year: Number,
  fileUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);

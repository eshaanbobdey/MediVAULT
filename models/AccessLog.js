const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  accessedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  accessedAt: { type: Date, default: Date.now },
  purpose: String
});

module.exports = mongoose.model('AccessLog', accessLogSchema);

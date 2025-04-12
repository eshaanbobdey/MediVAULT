const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medicine: String,
  dosage: String,
  instructions: String,
  dateIssued: Date
});

module.exports = mongoose.model('Prescription', prescriptionSchema);

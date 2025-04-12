const Appointment = require('../models/Appointment');
const Record = require('../models/Record');
const Prescription = require('../models/Prescription');

exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, date, reason } = req.body;
  const appointment = new Appointment({ patientId, doctorId, date, reason });
  await appointment.save();
  res.json({ message: 'Appointment booked', appointment });
};

exports.getPatientRecords = async (req, res) => {
  const { patientId } = req.params;
  const records = await Record.find({ patientId });
  res.json(records);
};


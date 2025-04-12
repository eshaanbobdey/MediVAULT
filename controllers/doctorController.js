const Appointment = require('../models/Appointment');
const Record = require('../models/Record');

exports.getDoctorAppointments = async (req, res) => {
  const { doctorId } = req.params;
  const appointments = await Appointment.find({ doctorId }).populate('patientId', 'fname lname');
  res.json(appointments);
};

exports.uploadPatientRecord = async (req, res) => {
  const { patientId, description, filePath } = req.body;
  const record = new Record({ patientId, description, filePath });
  await record.save();
  res.json({ message: 'Record uploaded by doctor', record });
};

const User = require('../models/User');
const Appointment = require('../models/Appointment');
const Record = require('../models/Record');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'User deleted' });
};

exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('patientId', 'fname lname').populate('doctorId', 'fname lname');
  res.json(appointments);
};

exports.getAllRecords = async (req, res) => {
  const records = await Record.find().populate('patientId', 'fname lname');
  res.json(records);
};

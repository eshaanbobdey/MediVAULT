const express = require('express');
const router = express.Router();
const { bookAppointment, getPatientRecords } = require('../controllers/patientController');

router.post('/appointments', bookAppointment);
router.get('/records/:patientId', getPatientRecords);

module.exports = router;

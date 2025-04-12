const express = require('express');
const router = express.Router();
const { getDoctorAppointments, uploadPatientRecord } = require('../controllers/doctorController');

router.get('/appointments/:doctorId', getDoctorAppointments);
router.post('/records/upload', uploadPatientRecord);

module.exports = router;

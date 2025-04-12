const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser, getAllAppointments, getAllRecords } = require('../controllers/adminController');
const { verifyToken, authorizeRoles } = require('../middleware/auth');

router.get('/users', verifyToken, authorizeRoles('admin'), getAllUsers);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/appointments', getAllAppointments);
router.get('/records', getAllRecords);

module.exports = router;

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { fname, lname, dob, mobile, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ fname, lname, dob, mobile, email, password: hashedPassword, role });
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};

// User login
exports.login = async (req, res) => {
  const { mobile, password } = req.body;

  const user = await User.findOne({ mobile });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

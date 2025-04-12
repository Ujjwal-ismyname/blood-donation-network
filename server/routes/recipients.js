const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get all recipients
router.get('/', async (req, res) => {
  try {
    const [recipients] = await db.query('SELECT * FROM recipients');
    res.json(recipients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create recipient profile
router.post('/', authMiddleware, async (req, res) => {
  const { first_name, last_name, dob, gender, blood_type, phone, address, hospital, reason } = req.body;

  if (req.user.role !== 'recipient') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO recipients (user_id, first_name, last_name, dob, gender, blood_type, phone, address, hospital, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, first_name, last_name, dob, gender, blood_type, phone, address || null, hospital || null, reason || null]
    );

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

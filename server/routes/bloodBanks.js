const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get all blood banks
router.get('/', async (req, res) => {
  try {
    const [bloodBanks] = await db.query('SELECT * FROM blood_banks');
    res.json(bloodBanks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create blood bank profile
router.post('/', authMiddleware, async (req, res) => {
  const { name, license_number, phone, email, address } = req.body;

  if (req.user.role !== 'blood_bank') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO blood_banks (user_id, name, license_number, phone, email, address) VALUES (?, ?, ?, ?, ?, ?)',
      [req.user.id, name, license_number || null, phone || null, email || null, address || null]
    );

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

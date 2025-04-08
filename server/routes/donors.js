const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get all donors
router.get('/', async (req, res) => {
  try {
    const [donors] = await db.query('SELECT * FROM donors');
    res.json(donors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get donor by ID
router.get('/:id', async (req, res) => {
  try {
    const [donors] = await db.query('SELECT * FROM donors WHERE id = ?', [req.params.id]);
    
    if (donors.length === 0) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    
    res.json(donors[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create donor profile
router.post('/', authMiddleware, async (req, res) => {
  const { 
    first_name, last_name, dob, gender, blood_type, 
    phone, address, last_donation_date, medical_conditions 
  } = req.body;
  
  if (req.user.role !== 'donor') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO donors (user_id, first_name, last_name, dob, gender, blood_type, phone, address, last_donation_date, medical_conditions) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, first_name, last_name, dob, gender, blood_type, phone, address, last_donation_date || null, medical_conditions || null]
    );
    
    res.status(201).json({ id: result.insertId, message: 'Donor profile created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update donor profile
router.put('/:id', authMiddleware, async (req, res) => {
  const { 
    first_name, last_name, dob, gender, blood_type, 
    phone, address, last_donation_date, medical_conditions 
  } = req.body;
  
  try {
    // Check if donor exists and belongs to logged-in user
    const [donors] = await db.query(
      'SELECT * FROM donors WHERE id = ? AND user_id = ?', 
      [req.params.id, req.user.id]
    );
    
    if (donors.length === 0) {
      return res.status(404).json({ message: 'Donor not found or unauthorized' });
    }
    
    await db.query(
      `UPDATE donors SET 
        first_name = ?, 
        last_name = ?, 
        dob = ?, 
        gender = ?, 
        blood_type = ?, 
        phone = ?, 
        address = ?, 
        last_donation_date = ?, 
        medical_conditions = ? 
      WHERE id = ?`,
      [first_name, last_name, dob, gender, blood_type, phone, address, last_donation_date || null, medical_conditions || null, req.params.id]
    );
    
    res.json({ message: 'Donor profile updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

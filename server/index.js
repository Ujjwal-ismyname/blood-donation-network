const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donors');
const recipientRoutes = require('./routes/recipients');
const bloodBankRoutes = require('./routes/bloodBanks');
// Add the missing routes imports here
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Test database connection on startup
async function testConnection() {
  try {
    const [result] = await db.query('SELECT 1');
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/recipients', recipientRoutes);
app.use('/api/blood-banks', bloodBankRoutes);
// Add other routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
// const donorRoutes = require('./routes/donors');
// const recipientRoutes = require('./routes/recipients');
// const bloodBankRoutes = require('./routes/bloodBanks');
// const inventoryRoutes = require('./routes/inventory');
// const requestRoutes = require('./routes/requests');

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/donors', donorRoutes);
// app.use('/api/recipients', recipientRoutes);
// app.use('/api/blood-banks', bloodBankRoutes);
// app.use('/api/inventory', inventoryRoutes);
// app.use('/api/requests', requestRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

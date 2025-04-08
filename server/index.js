const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donors');
const recipientRoutes = require('./routes/recipients');
const bloodBankRoutes = require('./routes/bloodBanks');
const inventoryRoutes = require('./routes/inventory');
const requestRoutes = require('./routes/requests');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/recipients', recipientRoutes);
app.use('/api/blood-banks', bloodBankRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/requests', requestRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

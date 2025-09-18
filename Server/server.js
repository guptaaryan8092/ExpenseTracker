// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

// CORS configuration with frontend URL
const corsOptions = {
  origin: process.env.FRONTEND_URL || [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://wealthwavetracker.vercel.app',
    process.env.FRONTEND_URL
],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
// Temporary fix for development - NOT recommended for production
const corsOptions = {
  origin: true, // This allows all origins
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(cors(corsOptions));
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Wealth Wave Tracker API is running!' });
});

app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;

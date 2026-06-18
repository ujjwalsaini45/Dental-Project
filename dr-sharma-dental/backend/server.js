require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const apiRouter = require('./routes/appointments');

const MONGODB_URI = process.env.MONGODB_URI;
let dbConnected = false;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      dbConnected = true;
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      dbConnected = false;
      console.error('MongoDB connection error:', err);
      console.warn('Continuing without MongoDB. Appointment data will be stored in memory until the database connection is fixed.');
    });
} else {
  console.warn('Missing MONGODB_URI in environment. Running without MongoDB.');
}

app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// API routes
app.use('/api/appointments', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

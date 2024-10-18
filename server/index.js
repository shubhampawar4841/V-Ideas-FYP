const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // MongoDB connection file
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Student routes
const guideRoutes = require('./routes/guideRoutes'); // Guide routes
const adminRoutes = require('./routes/adminRoutes'); // Admin routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS (cross-origin resource sharing)
app.use(cors());

// Routes
app.use('/api/student', studentRoutes); // Routes related to students
app.use('/api/guide', guideRoutes); // Routes related to guides
app.use('/api/admin', adminRoutes); // Routes related to admin

// Error handling for non-existent routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  res.status(404);
  next(error);
});

// Custom error handler
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logger = require('./config/logger');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api/users', userRoutes); // User routes

// Error handling middleware
app.use(errorMiddleware);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Service is running' });
});

// Export the app
module.exports = app;
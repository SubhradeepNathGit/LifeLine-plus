require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Load Config & Utilities
const connectDB = require('./src/config/db');
const Limiter = require('./src/utils/rateLimit.util');

// Load Middlewares
const configureSecurity = require('./src/middlewares/security.middleware');
const spaHandler = require('./src/middlewares/spa.middleware');
const errorHandler = require('./src/middlewares/errorHandler.middleware');

// Load Routes
const allRoutes = require('./index');

const app = express();
const PORT = process.env.PORT || 3006;

// Initialize Database
connectDB();

// View Engine Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Core Middlewares
configureSecurity(app);
app.use(Limiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Static Asset Directories
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadsShare', express.static(path.join(__dirname, 'uploadsShare')));
app.use(express.static(path.join(__dirname, '../client/dist')));

// Application Routes
app.use(allRoutes);

// Hybrid Integration (React SPA Catch-all)
app.use(spaHandler);

// Global Error Orchestration
app.use(errorHandler);

// Start Server
const server = app.listen(PORT, () => {
    console.log(`Server is running precisely on port ${PORT}`);
    console.log(`Views directory: ${app.get('views')}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});

module.exports = app;

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Load Config & Utilities
const connectDB = require('./config/db');
const Limiter = require('./utils/rateLimit.util');

// Load Middlewares
const configureSecurity = require('./middlewares/security.middleware');
const spaHandler = require('./middlewares/spa.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// Initialize Database
connectDB();

// View Engine Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Core Middlewares
configureSecurity(app);
app.use(Limiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Static Asset Directories
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploadsShare', express.static(path.join(__dirname, '../uploadsShare')));
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Application Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api', require('./routes/api.routes'));
app.use('/admin', require('./routes/admin.routes'));

// Hybrid Integration (React SPA Catch-all)
app.use(spaHandler);

// Global Error Orchestration
app.use(errorHandler);

module.exports = app;

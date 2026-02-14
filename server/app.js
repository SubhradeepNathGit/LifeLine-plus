require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const connectDB = require('./src/config/db');
const Limiter = require('./src/utils/rateLimit.util');
const configureSecurity = require('./src/middlewares/security.middleware');
const spaHandler = require('./src/middlewares/spa.middleware');
const errorHandler = require('./src/middlewares/errorHandler.middleware');
const allRoutes = require('./src/routes/index');

const app = express();
connectDB();

// Middlewares
configureSecurity(app);
app.use(Limiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Folders
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadsShare', express.static(path.join(__dirname, 'uploadsShare')));
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use(allRoutes);

// SPA & Error Handling
app.use(spaHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3006;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//global event-listener (if something critical and unexpected breaks your app's async logic, the app shuts down cleanly and restarts)
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});

module.exports = app;

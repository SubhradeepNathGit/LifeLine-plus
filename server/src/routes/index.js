
const express = require('express');
const router = express.Router();

// Import Route Files
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const apiRoutes = require('./api.routes');
const adminRoutes = require('./admin.routes');

// Define Route Paths
router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes);
router.use('/api', apiRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
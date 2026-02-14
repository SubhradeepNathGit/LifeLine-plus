const express = require('express');
const router = express.Router();

// Import Route Files
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const apiRoutes = require('./src/routes/api.routes');
const adminRoutes = require('./src/routes/admin.routes');

// Define Route Paths
router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes);
router.use('/api', apiRoutes);
router.use('/admin', adminRoutes);

module.exports = router;

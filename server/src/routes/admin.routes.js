const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { getDashboard, verifyDoctor } = require('../controllers/admin.controller');

// Admin Panel EJS Routes

// Login Page (Public)
// Login Page (Public)
const handleAdminLoginRender = async (req, res) => {
    const token = req.cookies.refreshToken;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            const user = await User.findById(decoded.id);

            if (user && user.role === 'admin') {
                return res.redirect('/admin/dashboard');
            }
        } catch (err) {
            // Token invalid or expired, ignore
        }
    }
    res.render('admin/index', { error: null });
};

router.get('/', handleAdminLoginRender);
router.get('/login', handleAdminLoginRender);

// Handle Login (POST)
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate
        if (!email || !password) {
            return res.render('admin/index', { error: 'Please provide email and password' });
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.render('admin/index', { error: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.render('admin/index', { error: 'Invalid credentials' });
        }

        // Check Role
        if (user.role !== 'admin') {
            return res.render('admin/index', { error: 'Access denied: Admins only' });
        }

        // Create token (Refresh token for cookie session)
        const token = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d'
        });

        // Set cookie
        res.cookie('refreshToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.redirect('/admin/dashboard');
    } catch (err) {
        console.error(err);
        res.render('admin/index', { error: 'Server Error' });
    }
});

// Dashboard (Protected)
// Dashboard (Protected)
router.get('/dashboard', protect, authorize('admin'), getDashboard);

// Verify Doctor Action
router.post('/verify-doctor', protect, authorize('admin'), verifyDoctor);

// Logout Route
router.get('/logout', (req, res) => {
    res.cookie('refreshToken', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.redirect('/admin/login');
});

module.exports = router;

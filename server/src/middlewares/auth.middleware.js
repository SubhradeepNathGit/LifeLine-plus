const jwt = require('jsonwebtoken');
const User = require('../models/User.model'); // Adjust path as needed

// Protect routes
exports.protect = async (req, res, next) => {
    let token;
    let isCookieAuth = false;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // API Client Flow
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.refreshToken) {
        // Admin/Web Browser Flow (Cookie)
        token = req.cookies.refreshToken;
        isCookieAuth = true;
    }

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }

    try {
        // Determine secret based on source
        // If cookie (Refresh Token), use Refresh Secret. If Header (Access Token), use Access Secret.
        // NOTE: In a perfect world, we'd exchange refresh for access even on server.
        const secret = isCookieAuth ? process.env.JWT_REFRESH_SECRET : process.env.JWT_ACCESS_SECRET;

        const decoded = jwt.verify(token, secret);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        next();
    } catch (err) {
        console.error('Auth Error:', err.message);
        // If it's an admin route request (from browser), redirect to login instead of JSON error
        if (req.originalUrl.startsWith('/admin')) {
            return res.redirect('/admin/login');
        }
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            if (req.originalUrl.startsWith('/admin')) {
                // Render Access Denied page for Admin panel
                return res.status(403).render('admin/access-denied', {
                    user: req.user,
                    title: 'Access Denied'
                });
            }
            return res.status(403).json({
                success: false,
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

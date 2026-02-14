const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getMe,
    logout,
    verifyEmail,
    resendOtp,
    forgotPassword,
    resetPassword
} = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth.middleware');
const { uploadDoc } = require('../helpers/multer');

router.post('/register', uploadDoc.any(), register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);

// New auth routes
router.post('/verify-email', verifyEmail);
router.post('/resend-otp', resendOtp);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;

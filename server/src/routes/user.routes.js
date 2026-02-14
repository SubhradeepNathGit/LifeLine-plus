const express = require('express');
const router = express.Router();
const { updateAvatar, getMe, updateDetails } = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const { uploadAvatar } = require('../helpers/multer');

// All routes are protected
router.use(protect);

router.get('/me', getMe);
router.post('/update-avatar', uploadAvatar.single('avatar'), updateAvatar);
router.put('/update-details', updateDetails);

module.exports = router;

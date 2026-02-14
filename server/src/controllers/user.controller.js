const User = require('../models/User.model');
const { deleteInteral } = require('../utils/cloudinary.util');

// @desc    Update user avatar
// @route   POST /api/user/update-avatar
// @access  Private
exports.updateAvatar = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Please upload a file' });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Delete old avatar if exists
        if (user.avatarPublicId) {
            try {
                await deleteInteral(user.avatarPublicId, 'image');
            } catch (err) {
                console.warn('Failed to delete old avatar:', err.message);
            }
        }

        // Update with new data from Cloudinary (handled by multer-storage-cloudinary)
        user.avatar = req.file.path; // Cloudinary URL
        user.avatarPublicId = req.file.filename; // Cloudinary public_id

        await user.save();

        res.status(200).json({
            success: true,
            data: {
                avatar: user.avatar,
                avatarPublicId: user.avatarPublicId
            }
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get current user profile
// @route   GET /api/user/profile
// @access  Private
exports.getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        next(err);
    }
};

// @desc    Update user details
// @route   PUT /api/user/update-details
// @access  Private
exports.updateDetails = async (req, res, next) => {
    try {
        const fieldsToUpdate = {
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender,
            dob: req.body.dob,
            bloodGroup: req.body.bloodGroup,
            address: req.body.address,
            specialization: req.body.specialization
        };

        const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../utils/cloudinary.util');
const path = require('path');

// Storage for Verification Documents (PDFs)
const storageScripts = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'healthcare_docs',
        resource_type: 'raw', // Important for PDFs/files that aren't images
        format: async (req, file) => 'pdf', // force pdf
        public_id: (req, file) => file.fieldname + '-' + Date.now(),
    },
});

// Storage for Avatars (Images)
const storageAvatars = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'healthcare_avatars',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        transformation: [{ width: 500, height: 500, crop: 'limit' }],
    },
});

// Upload Middlewares
const uploadDoc = multer({
    storage: storageScripts,
    limits: { fileSize: 5000000 }, // 5MB limit
});

const uploadAvatar = multer({
    storage: storageAvatars,
    limits: { fileSize: 2000000 }, // 2MB limit
});

module.exports = {
    uploadDoc,
    uploadAvatar
};

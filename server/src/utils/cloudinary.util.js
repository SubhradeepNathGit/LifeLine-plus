const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper to Delete from Cloudinary
const deleteInteral = async (publicId, resourceType = 'image') => {
    try {
        if (!publicId) return;
        const result = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
        console.log('Cloudinary Delete Result:', result);
        return result;
    } catch (error) {
        console.error('Cloudinary Delete Error:', error);
        throw error;
    }
};

module.exports = {
    cloudinary,
    deleteInteral
};

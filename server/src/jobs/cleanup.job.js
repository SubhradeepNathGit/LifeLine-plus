const cron = require('node-cron');
const { cloudinary, deleteInteral } = require('../utils/cloudinary.util');

const startCleanupJob = () => {
    // Run every day at midnight (00:00)
    // For testing you can use '* * * * *' (every minute)
    cron.schedule('0 0 * * *', async () => {
        console.log('Running Automatic PDF Cleanup Job...');
        try {
            // Find resources in 'healthcare_docs' folder that are 'raw' type (PDFs are usually raw in Cloudinary)
            // and strictly older than 2 days (48 hours)
            // Note: Cloudinary search syntax for date is strict.
            const searchResult = await cloudinary.search
                .expression('folder:healthcare_docs AND resource_type:raw AND created_at<2d')
                .max_results(500)
                .execute();

            const files = searchResult.resources;

            if (files.length > 0) {
                console.log(`Found ${files.length} old PDF files to delete.`);

                // Delete them one by one or in batch
                // using existing helper or direct api
                for (const file of files) {
                    await cloudinary.uploader.destroy(file.public_id, { resource_type: 'raw' });
                    console.log(`Deleted: ${file.public_id}`);
                }

                console.log('Cleanup Job Completed Successfully.');
            } else {
                console.log('No old PDF files found to delete.');
            }

        } catch (error) {
            console.error('Error in Cleanup Job:', error);
        }
    });
};

module.exports = startCleanupJob;

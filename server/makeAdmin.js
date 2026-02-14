require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./app/model/User');

const email = process.argv[2];

if (!email) {
    console.error('Please provide an email address: node makeAdmin.js your-email@example.com');
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected');

        const user = await User.findOneAndUpdate(
            { email: email },
            { role: 'admin' },
            { new: true }
        );

        if (!user) {
            console.error(`User with email ${email} not found.`);
        } else {
            console.log(`Success! ${user.name} (${user.email}) is now an Admin.`);
        }

        process.exit(0);
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
};

connectDB();

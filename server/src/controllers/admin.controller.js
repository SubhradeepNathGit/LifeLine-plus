const User = require('../models/User.model');

// Render Dashboard
exports.getDashboard = async (req, res) => {
    try {
        const users = await User.find({ role: 'user' });
        const doctors = await User.find({ role: 'doctor' });
        const pendingDoctors = await User.find({ role: 'doctor', status: 'pending' });

        res.render('admin/dashboard', {
            title: 'Admin Dashboard',
            user: req.user,
            users,
            doctors,
            pendingDoctors
        });
    } catch (error) {
        console.error(error);
        res.render('admin/dashboard', {
            title: 'Admin Dashboard',
            user: req.user,
            users: [],
            doctors: [],
            pendingDoctors: []
        });
    }
};

// Verify Doctor (Approve/Reject)
exports.verifyDoctor = async (req, res) => {
    try {
        const { id, status } = req.body; // status: 'approved' or 'rejected'
        await User.findByIdAndUpdate(id, { status });

        // Optionally send email notification here

        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/admin/dashboard');
    }
};

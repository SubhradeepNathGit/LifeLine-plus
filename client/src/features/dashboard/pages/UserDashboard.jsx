import React, { useRef, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Camera, Calendar, Clipboard, Clock, ChevronRight, Hand } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../styles/Dashboard.css';

const UserDashboard = () => {
    const { user, setUser } = useAuth();
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    const handleUploadClick = () => {
        if (uploading) return;
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file');
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            toast.error('Image size should be less than 2MB');
            return;
        }

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            setUploading(true);
            const token = localStorage.getItem('token');
            const res = await axios.post('/api/user/update-avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.data.success) {
                toast.success('Profile picture updated!');
                if (setUser) {
                    setUser({ ...user, avatar: res.data.data.avatar });
                }
            }
        } catch (err) {
            console.error("Upload error:", err);
            toast.error(err.response?.data?.message || 'Failed to upload photo');
        } finally {
            setUploading(false);
        }
    };

    const stats = [
        { label: 'Total Appointments', value: '0', icon: <Calendar size={20} color="#223a66" />, bg: '#e8f0fe' },
        { label: 'Upcoming', value: '0', icon: <Clock size={20} color="#e12454" />, bg: '#fff5f7' },
        { label: 'Medical Records', value: '0', icon: <Clipboard size={20} color="#28a745" />, bg: '#eefaf1' },
    ];

    return (
        <DashboardLayout role="user" title="Patient Dashboard">
            <div className="welcome-header mb-4">
                <h3 className="fw-800 text-main d-flex align-items-center gap-2">
                    Welcome back, {user?.name?.split(' ')[0]}!
                </h3>
                <p className="text-muted">Here's what's happening with your health today.</p>
            </div>

            <div className="col-lg-12">
                <div className="stats-grid mb-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-card border-0 shadow-sm">
                            <div className="stat-icon" style={{ backgroundColor: stat.bg }}>
                                {stat.icon}
                            </div>
                            <div className="stat-info">
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dashboard-card shadow-sm border-0 rounded-4">
                    <div className="card-header-main bg-white border-0 py-3 px-4">
                        <h6 className="fw-800 text-main mb-0">Recent Appointments</h6>
                        <button className="btn btn-link text-decoration-none text-primary p-0 small fw-600">
                            View All <ChevronRight size={14} />
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-custom align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="text-center py-4 text-muted small">
                                        No recent appointments.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default UserDashboard;

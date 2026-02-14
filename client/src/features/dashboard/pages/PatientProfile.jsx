import React, { useRef, useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import {
    Camera, User, Mail, Shield, UserCheck, Phone,
    Calendar, Droplet, MapPin, Edit2, Save, X
} from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../styles/Dashboard.css';

const PatientProfile = () => {
    const { user, setUser } = useAuth();
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        dob: '',
        bloodGroup: '',
        address: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                phone: user.phone || '',
                gender: user.gender || '',
                dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : '',
                bloodGroup: user.bloodGroup || '',
                address: user.address || ''
            });
        }
    }, [user]);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put('/api/user/update-details', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.data.success) {
                toast.success('Profile updated successfully!');
                setUser({ ...user, ...res.data.data });
                setIsEditing(false);
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error(err.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout role="user" title="My Profile">
            <div className="container-fluid px-0">
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
                    <div className="d-flex align-items-center gap-5">
                        <div className="avatar-container m-0" style={{ width: '120px', height: '120px' }}>
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Profile" className="avatar-image" />
                            ) : (
                                <div className="avatar-initials fs-1">
                                    {getInitials(user?.name)}
                                </div>
                            )}
                            <div className={`avatar-upload-overlay ${uploading ? 'opacity-50' : ''}`} onClick={handleUploadClick}>
                                <Camera size={24} />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="d-none"
                                accept="image/*"
                                onChange={handleFileChange}
                                disabled={uploading}
                            />
                        </div>
                        <div className="ms-4">
                            <h1 className="fw-800 mb-2 display-6 text-main">{user?.name}</h1>
                            <div className="d-flex align-items-center gap-3">
                                <span className="badge rounded-pill bg-soft-primary text-primary px-3 py-2 fw-bold ls-1">
                                    PATIENT ACCOUNT
                                </span>
                                {user?.isVerified && (
                                    <span className="text-success d-flex align-items-center gap-1 fw-600 bg-soft-success px-3 py-1 rounded-pill">
                                        <UserCheck size={16} /> Verified
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mt-md-0">
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="btn btn-primary px-4 py-2 rounded-pill fw-600 d-flex align-items-center gap-2"
                            >
                                <Edit2 size={18} /> Edit Profile
                            </button>
                        ) : (
                            <div className="d-flex gap-2">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="btn btn-light px-4 py-2 rounded-pill fw-600 d-flex align-items-center gap-2 text-muted"
                                    disabled={loading}
                                >
                                    <X size={18} /> Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-success px-4 py-2 rounded-pill fw-600 d-flex align-items-center gap-2"
                                    disabled={loading}
                                >
                                    {loading ? 'Saving...' : <><Save size={18} /> Save Changes</>}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Grid */}
                <div className="bg-white shadow-sm rounded-4 p-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg bg-light border-0 fw-600 p-3"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                            <User size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark">{user?.name}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Email Address</label>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                        <Mail size={22} />
                                    </div>
                                    <span className="fs-5 fw-600 text-dark">{user?.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control form-control-lg bg-light border-0 fw-600 p-3"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+1 234 567 890"
                                    />
                                ) : (
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                            <Phone size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark">{user?.phone || 'Not provided'}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Gender</label>
                                {isEditing ? (
                                    <select
                                        name="gender"
                                        className="form-select form-select-lg bg-light border-0 fw-600 p-3"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                ) : (
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                            <User size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark">{user?.gender || 'Not specified'}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Date of Birth</label>
                                {isEditing ? (
                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control form-control-lg bg-light border-0 fw-600 p-3"
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                            <Calendar size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark">{user?.dob ? new Date(user.dob).toLocaleDateString() : 'Not provided'}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Blood Group</label>
                                {isEditing ? (
                                    <select
                                        name="bloodGroup"
                                        className="form-select form-select-lg bg-light border-0 fw-600 p-3"
                                        value={formData.bloodGroup}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                ) : (
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3">
                                            <Droplet size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark">{user?.bloodGroup || 'Not specified'}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="profile-detail-item">
                                <label className="text-muted small fw-700 d-block mb-3 text-uppercase ls-1">Address</label>
                                {isEditing ? (
                                    <textarea
                                        name="address"
                                        className="form-control form-control-lg bg-light border-0 fw-600 p-3"
                                        rows="3"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full address"
                                    />
                                ) : (
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="icon-box bg-soft-primary text-primary rounded-circle p-3 mt-1">
                                            <MapPin size={22} />
                                        </div>
                                        <span className="fs-5 fw-600 text-dark lh-base">{user?.address || 'Not provided'}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 p-4 rounded-4 info-box-highlight">
                    <div className="d-flex gap-3">
                        <div className="text-primary mt-1">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h6 className="fw-700 text-main mb-2">Privacy & Security</h6>
                            <p className="small text-muted mb-0">Your profile information is encrypted and only visible to authorized medical staff. We strictly adhere to HIPAA regulations to ensure your health data remains private and secure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PatientProfile;

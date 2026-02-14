import React, { useRef, useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Camera, User, Mail, Shield, Stethoscope, FileText, CheckCircle, Edit2, Save, X, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../styles/Dashboard.css';

const DoctorProfile = () => {
    const { user, setUser } = useAuth();
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        specialization: '',
        address: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                phone: user.phone || '',
                specialization: user.specialization || 'General Physician',
                address: user.address || ''
            });
        }
    }, [user]);

    const getInitials = (name) => {
        if (!name) return 'D';
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
            toast.error('Failed to upload photo');
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

    const isPending = user?.status === 'pending';
    const isApproved = user?.status === 'approved';

    return (
        <DashboardLayout role="doctor" title="Doctor Profile">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4 doctor">
                        <div className="card-body p-5">
                            <div className="text-center mb-5 position-relative">
                                {/* Edit Actions */}
                                <div className="position-absolute top-0 end-0">
                                    {!isEditing ? (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="btn btn-outline-purple rounded-pill px-3 py-2 fw-600 d-flex align-items-center gap-2"
                                            style={{ color: '#6f42c1', borderColor: '#6f42c1' }}
                                        >
                                            <Edit2 size={16} /> Edit
                                        </button>
                                    ) : (
                                        <div className="d-flex gap-2">
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="btn btn-light rounded-pill px-3 py-2 fw-600 d-flex align-items-center gap-2"
                                                disabled={loading}
                                            >
                                                <X size={16} />
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                className="btn btn-primary rounded-pill px-3 py-2 fw-600 d-flex align-items-center gap-2"
                                                style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
                                                disabled={loading}
                                            >
                                                <Save size={16} /> Save
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="avatar-container mb-3">
                                    {user?.avatar ? (
                                        <img src={user.avatar} alt="Profile" className="avatar-image" />
                                    ) : (
                                        <div className="avatar-initials" style={{ color: '#6f42c1' }}>
                                            {getInitials(user?.name)}
                                        </div>
                                    )}
                                    <div className="avatar-upload-overlay" onClick={handleUploadClick} style={{ backgroundColor: '#6f42c1', color: 'white' }}>
                                        <Camera size={18} />
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
                                <h3 className="fw-800 mb-1" style={{ color: '#6f42c1' }}>Dr. {user?.name}</h3>
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <span className="badge rounded-pill px-3 py-2 fw-600" style={{ backgroundColor: '#f3e8ff', color: '#6f42c1' }}>
                                        {user?.specialization || 'Medical Professional'}
                                    </span>
                                    {isApproved && (
                                        <span className="text-success d-flex align-items-center gap-1 small fw-600">
                                            <CheckCircle size={14} /> Verified
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="info-item p-3 rounded-3 bg-light">
                                        <label className="text-muted small d-block mb-1">Full Name</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control bg-white border-0 fw-600"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center gap-2">
                                                <User size={16} style={{ color: '#6f42c1' }} />
                                                <span className="fw-600 text-main">{user?.name}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item p-3 rounded-3 bg-light">
                                        <label className="text-muted small d-block mb-1">Medical Email</label>
                                        <div className="d-flex align-items-center gap-2">
                                            <Mail size={16} style={{ color: '#6f42c1' }} />
                                            <span className="fw-600 text-main">{user?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item p-3 rounded-3 bg-light">
                                        <label className="text-muted small d-block mb-1">Specialization</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="specialization"
                                                className="form-control bg-white border-0 fw-600"
                                                value={formData.specialization}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Cardiologist"
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center gap-2">
                                                <Stethoscope size={16} style={{ color: '#6f42c1' }} />
                                                <span className="fw-600 text-main">{user?.specialization || 'Not specified'}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item p-3 rounded-3 bg-light">
                                        <label className="text-muted small d-block mb-1">Phone Number</label>
                                        {isEditing ? (
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control bg-white border-0 fw-600"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter phone"
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center gap-2">
                                                <Phone size={16} style={{ color: '#6f42c1' }} />
                                                <span className="fw-600 text-main">{user?.phone || 'Not provided'}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="info-item p-3 rounded-3 bg-light">
                                        <label className="text-muted small d-block mb-1">Clinic Address</label>
                                        {isEditing ? (
                                            <textarea
                                                name="address"
                                                className="form-control bg-white border-0 fw-600"
                                                rows="2"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Enter clinic address"
                                            />
                                        ) : (
                                            <div className="d-flex align-items-start gap-2">
                                                <MapPin size={16} style={{ color: '#6f42c1', marginTop: '3px' }} />
                                                <span className="fw-600 text-main">{user?.address || 'Not provided'}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {user?.verificationDocument && (
                                <div className="mt-4 p-3 rounded-3 bg-white border">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="p-2 rounded bg-light">
                                                <FileText size={20} style={{ color: '#6f42c1' }} />
                                            </div>
                                            <div>
                                                <h6 className="mb-0 fw-600">License Document</h6>
                                                <span className="text-muted small">Verification ID: {user?._id?.substring(0, 8)}...</span>
                                            </div>
                                        </div>
                                        <a href={user.verificationDocument} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-purple" style={{ color: '#6f42c1', borderColor: '#6f42c1' }}>
                                            View Document
                                        </a>
                                    </div>
                                </div>
                            )}

                            {isPending && (
                                <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #f59e0b' }}>
                                    <h6 className="fw-700 text-main mb-2">Account Under Review</h6>
                                    <p className="small text-muted mb-0">Your medical credentials are being verified by our administration team. This usually takes 24-48 hours. Once approved, you'll gain full access to scheduling.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DoctorProfile;

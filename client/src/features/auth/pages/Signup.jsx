import React, { useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Stethoscope, AlertCircle, UploadCloud, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Config
    const queryParams = new URLSearchParams(location.search);
    const initialRole = queryParams.get('role') === 'doctor' ? 'doctor' : 'user';

    // State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(initialRole);
    const [verificationDoc, setVerificationDoc] = useState(null);

    // UI State
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [dragging, setDragging] = useState(false);

    // Error/Loading
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

    // Helpers
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Drag & Drop Handlers
    const handleDragEnter = (e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setDragging(false); };
    const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            validateAndSetFile(files[0]);
        }
    };

    const handleFileSelect = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            validateAndSetFile(files[0]);
        }
    };

    const validateAndSetFile = (file) => {
        if (file.type === 'application/pdf') {
            setVerificationDoc(file);
            toast.info(`Selected file: ${file.name}`);
        } else {
            toast.error('Only PDF documents are allowed.');
            setError('Only PDF documents are allowed.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setEmailError('');
        setPasswordError('');

        if (!validateEmail(email)) {
            toast.error('Invalid email address.');
            setEmailError('Invalid email address.');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters.');
            setPasswordError('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            setPasswordError('Passwords do not match.');
            return;
        }
        if (role === 'doctor' && !verificationDoc) {
            toast.error('Medical proof (PDF) is required.');
            setError('Medical proof (PDF) is required.');
            return;
        }

        setLoading(true);

        const isDoctor = role === 'doctor';
        let res;

        try {
            if (!isDoctor) {
                // Send JSON for standard patients
                res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password, role })
                });
            } else {
                // Send FormData for doctors (with file)
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('password', password);
                formData.append('role', role);
                if (verificationDoc) {
                    formData.append('verificationDocument', verificationDoc);
                }

                res = await fetch('/api/auth/register', {
                    method: 'POST',
                    body: formData
                });
            }

            const data = await res.json();

            if (data.success) {
                toast.success('OTP sent to your email!');
                navigate('/verify-otp', { state: { email } });
            } else {
                toast.error(data.message || 'Registration failed.');
                setError(data.message || 'Registration failed.');
            }
        } catch (err) {
            toast.error('An unexpected error occurred.');
            setError('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-section">
            {/* Background Decor */}
            <div className="auth-bg-decor">
                <div className="auth-blob auth-blob-1"></div>
                <div className="auth-blob auth-blob-2"></div>
            </div>

            <div className="auth-card">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join the LifeLine + revolution</p>
                </div>

                {/* Role Toggles */}
                <div className="role-toggle-container">
                    <div className={`role-slider ${role}`}></div>
                    <button
                        type="button"
                        className={`role-btn ${role === 'user' ? 'active' : ''}`}
                        onClick={() => setRole('user')}
                    >
                        <User size={16} /> Patient
                    </button>
                    <button
                        type="button"
                        className={`role-btn ${role === 'doctor' ? 'active' : ''}`}
                        onClick={() => setRole('doctor')}
                    >
                        <Stethoscope size={16} /> Doctor
                    </button>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {error && (
                        <div className="error-alert">
                            <AlertCircle size={16} style={{ marginRight: '8px' }} /> {error}
                        </div>
                    )}

                    {/* Full Name */}
                    <div className="input-group">
                        <div className="input-wrapper">
                            <User className="input-icon" size={20} />
                            <input
                                type="text"
                                required
                                className="auth-input"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="input-group">
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                required
                                className={`auth-input ${emailError ? 'error' : ''}`}
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {emailError && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0 8px' }}>{emailError}</p>}
                    </div>

                    {/* Password Row */}
                    <div className="signup-grid">
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className={`auth-input ${passwordError ? 'error' : ''}`}
                                style={{ paddingLeft: '2.5rem' }}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={18} />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                className={`auth-input ${passwordError ? 'error' : ''}`}
                                style={{ paddingLeft: '2.5rem' }}
                                placeholder="Confirm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                    {passwordError && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0 8px' }}>{passwordError}</p>}

                    {/* Doctor PDF Upload - Drag & Drop */}
                    {role === 'doctor' && (
                        <div
                            className={`dropzone ${dragging ? 'dragging' : ''}`}
                            onDragEnter={handleDragEnter}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                style={{ display: 'none' }}
                                accept=".pdf"
                                onChange={handleFileSelect}
                            />

                            {verificationDoc ? (
                                <div className="dropzone-content file-success">
                                    <CheckCircle size={24} />
                                    <div className="dropzone-info">
                                        <span className="dropzone-title" style={{ marginTop: '0' }}>{verificationDoc.name}</span>
                                        <span className="dropzone-subtitle">Click to replace</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="dropzone-content">
                                    <UploadCloud size={24} />
                                    <div className="dropzone-info">
                                        <span className="dropzone-title">Click or Drag PDF here</span>
                                        <span className="dropzone-subtitle">Medical License / Proof</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="submit-btn"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Create Account <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="auth-link">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Signup;


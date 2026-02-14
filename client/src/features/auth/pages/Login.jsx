import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, Eye, EyeOff, User, Stethoscope, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await login(email, password);
            if (res.success) {
                toast.success('Welcome back!');
                if (res.user && res.user.status === 'pending') {
                    navigate('/verify-pending');
                } else if (res.user && res.user.status === 'rejected') {
                    toast.error('Your account has been rejected.');
                    setError('Your account has been rejected. Please contact support.');
                } else {
                    if (res.user.role === 'doctor') {
                        navigate('/doctor/dashboard');
                    } else {
                        navigate('/user/dashboard');
                    }
                }
            } else {
                if (res.needsVerification) {
                    toast.info('Please verify your email address.');
                    navigate('/verify-otp', { state: { email } });
                } else {
                    toast.error(res.message || 'Login failed.');
                    setError(res.message);
                }
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
            <div className="auth-bg-decor">
                <div className="auth-blob auth-blob-1"></div>
                <div className="auth-blob auth-blob-2"></div>
            </div>

            <div className="auth-card">
                <div className="auth-header">
                    <h2>Welcome Back</h2>
                    <p>Please sign in to access your dashboard</p>
                </div>



                <form className="auth-form" onSubmit={handleSubmit}>
                    {error && (
                        <div className="error-alert">
                            {error}
                        </div>
                    )}

                    <div className="input-group">
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                required
                                className="auth-input"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="auth-input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="auth-helper">
                        <Link to="/forgot-password" title="Click to reset your password" className="auth-link">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="submit-btn"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Sign In <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Don't have an account?{' '}
                        <Link to={`/signup`} className="auth-link">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;

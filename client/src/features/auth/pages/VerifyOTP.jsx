import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const VerifyOTP = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (!email) {
            navigate('/signup');
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [email, navigate]);

    useEffect(() => {
        if (otp.length === 6) {
            handleVerify();
        }
    }, [otp]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleVerify = async (e) => {
        if (e) e.preventDefault();
        if (loading || otp.length !== 6) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/verify-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });

            const data = await res.json();

            if (data.success) {
                toast.success('Email verified successfully!');
                navigate('/login');
            } else {
                toast.error(data.message || 'Verification failed');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!canResend) return;

        try {
            const res = await fetch('/api/auth/resend-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (data.success) {
                toast.success('OTP resent successfully!');
                setTimeLeft(180);
                setCanResend(false);
                setOtp('');
            } else {
                toast.error(data.message || 'Failed to resend OTP');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
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
                    <div className="icon-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(34, 58, 102, 0.05)', color: '#223a66', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h2>Verify Email</h2>
                    <p>We've sent a 6-digit code to <br /> <strong>{email}</strong></p>
                </div>

                <form className="auth-form" onSubmit={handleVerify}>
                    <div className="input-group">
                        <input
                            type="text"
                            maxLength="6"
                            className="auth-input text-center"
                            style={{ padding: '1.25rem', fontSize: '2rem', letterSpacing: '0.75rem', fontWeight: 'bold' }}
                            placeholder="000000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                            autoFocus
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading || otp.length !== 6}>
                        {loading ? <Loader2 className="animate-spin" size={20} /> : (
                            <>
                                Verify OTP <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    {canResend ? (
                        <p>
                            Didn't receive the code?{' '}
                            <button onClick={handleResend} className="auth-link" style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer' }}>
                                Resend OTP
                            </button>
                        </p>
                    ) : (
                        <p className="text-gray-500">
                            Resend code in <span className="font-mono">{formatTime(timeLeft)}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VerifyOTP;


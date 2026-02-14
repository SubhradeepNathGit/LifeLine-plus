import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MailCheck, ArrowRight, Inbox } from 'lucide-react';
import '../styles/Auth.css';

const EmailSent = () => {
    const location = useLocation();
    const email = location.state?.email;

    return (
        <section className="auth-section">
            <div className="auth-bg-decor">
                <div className="auth-blob auth-blob-1"></div>
                <div className="auth-blob auth-blob-2"></div>
            </div>

            <div className="auth-card">
                <div className="auth-header">
                    <div className="icon-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(34, 58, 102, 0.05)', color: '#223a66', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MailCheck size={32} />
                    </div>
                    <h2>Check Your Email</h2>
                    <p>We've sent a password reset link to <br /> <strong>{email}</strong></p>
                </div>

                <div style={{ textAlign: 'center', margin: '2rem 0', color: '#64748b' }}>
                    <p>Please check your inbox and click the link to reset your password. If you don't see it, check your spam folder.</p>
                </div>

                <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="submit-btn" style={{ textDecoration: 'none' }}>
                    Open Mail Inbox <Inbox size={20} style={{ marginLeft: '8px' }} />
                </a>

                <div className="auth-footer">
                    <p>
                        Back to{' '}
                        <Link to="/login" className="auth-link">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EmailSent;


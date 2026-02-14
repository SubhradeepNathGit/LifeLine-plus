import React from 'react';
import { Search, LogOut, User as UserIcon, Moon, Sun, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'react-router-dom';

const TopNav = ({ title }) => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <div className="top-nav">
            <div className="nav-title">
                <h5 className="mb-0">{title || 'Dashboard'}</h5>
            </div>

            <div className="nav-actions d-flex align-items-center gap-4">
                {/* Theme Toggle */}
                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>


                {/* User Profile */}
                {/* User Profile - Static Display */}
                <div className="user-profile-nav cursor-default">
                    <div className="d-flex flex-column align-items-end d-none d-md-flex me-2">
                        <span className="fw-700 text-main" style={{ fontSize: 'var(--fs-sm)', lineHeight: '1.2' }}>{user?.name}</span>
                        <span className="text-muted" style={{ fontSize: 'var(--fs-xs)' }}>{user?.email}</span>
                    </div>

                    {user?.avatar ? (
                        <img src={user.avatar} alt="Profile" className="nav-avatar-img rounded-circle" />
                    ) : (
                        <div className="nav-avatar-img rounded-circle bg-light d-flex align-items-center justify-content-center text-primary fw-bold border">
                            {getInitials(user?.name)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopNav;

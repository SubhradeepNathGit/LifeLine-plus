import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import '@/features/dashboard/styles/Dashboard.css';

const DashboardLayout = ({ children, role, title }) => {
    const { user, loading } = useAuth();

    if (loading) return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== role && user.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="dashboard-container">
            <Sidebar role={role} />
            <div className="dashboard-content">
                <TopNav title={title} />
                <main className="main-scroll-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

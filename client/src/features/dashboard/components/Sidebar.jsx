import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import {
    LayoutDashboard,
    User,
    Calendar,
    ClipboardList,
    LogOut,
    Activity,
    Users
} from 'lucide-react';
import '../styles/Dashboard.css';

const Sidebar = ({ role }) => {
    const { logout } = useAuth();
    const location = useLocation();

    const bgColor = role === 'doctor' ? '#6f42c1' : '#223a66';

    const menuItems = [
        {
            label: 'Dashboard',
            path: `/${role}/dashboard`,
            icon: <LayoutDashboard size={20} />
        },
        {
            label: 'My Profile',
            path: `/${role}/profile`,
            icon: <User size={20} />
        }
    ];

    if (role === 'doctor') {
        menuItems.push({
            label: 'Appointments',
            path: `/doctor/appointments`,
            icon: <Calendar size={20} />
        });
        menuItems.push({
            label: 'My Patients',
            path: `/doctor/patients`,
            icon: <Users size={20} />
        });
    } else {
        menuItems.push({
            label: 'Medical Records',
            path: `/user/records`,
            icon: <ClipboardList size={20} />
        });
    }

    return (
        <div className="sidebar-main" style={{ backgroundColor: bgColor }}>
            <div className="sidebar-header p-4">
                <Link to="/" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <Activity size={28} />
                    <span className="fs-4 fw-800">LifeLine +</span>
                </Link>
            </div>

            <div className="sidebar-menu flex-grow-1 mt-3">
                <ul className="nav flex-column gap-1">
                    {menuItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link
                                to={item.path}
                                className={`nav-link-custom ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-footer p-4">
                <button
                    onClick={logout}
                    className="btn w-100 d-flex align-items-center justify-content-center gap-2 text-white border-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', fontSize: '0.9rem' }}
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

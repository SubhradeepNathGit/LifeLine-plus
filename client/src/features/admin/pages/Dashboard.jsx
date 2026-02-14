import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div id="wrapper" style={{ display: 'flex' }}>
            {/* Sidebar Placeholder */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{ minHeight: '100vh', width: '250px' }}>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin/dashboard">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <a className="nav-link" href="/admin/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Interface</div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#!" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!" onClick={() => navigate('/')}>
                        <i className="fas fa-fw fa-home"></i>
                        <span>Public Site</span>
                    </a>
                </li>
            </ul>

            <div id="content-wrapper" className="d-flex flex-column" style={{ flexGrow: 1 }}>
                <div id="content">
                    {/* Topbar Placeholder */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <h1 className="h3 mb-0 text-gray-800 ml-4">Dashboard</h1>
                    </nav>

                    <div className="container-fluid">
                        <div className="row">
                            {/* Card Example */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Earnings (Monthly)</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Overview</h6>
                                    </div>
                                    <div className="card-body">
                                        <p>Welcome to your new MERN-based SB Admin Dashboard! jQuery has been removed and everything is now managed by React.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Header = () => {
    return (
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                <li className="list-inline-item"><a href="mailto:support@lifeline.com"><i className="icofont-support-faq mr-2"></i>support@lifeline.com</a></li>
                                <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Salt Lake, Kolkata, India </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                <a href="tel:+23-345-67890">
                                    <span>Call Now : </span>
                                    <span className="h4">+91-98765-43210</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <Activity size={32} color="#223a66" />
                        <span className="text-main" style={{ fontSize: '2rem', fontWeight: '1000' }}>LifeLine +</span>
                    </Link>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                        aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/department" id="dropdown02" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><Link className="dropdown-item" to="/department">Departments</Link></li>
                                    <li><Link className="dropdown-item" to="/department-single">Department Single</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/doctor" id="dropdown03" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link className="dropdown-item" to="/doctor">Doctors</Link></li>
                                    <li><Link className="dropdown-item" to="/doctor-single">Doctor Single</Link></li>
                                    <li><Link className="dropdown-item" to="/appoinment">Appoinment</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/blog" id="dropdown05" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                    <li><Link className="dropdown-item" to="/blog-sidebar">Blog with Sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/blog-single">Blog Single</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <Link to="/login" className="btn btn-main-2 btn-round-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <Header />

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our services</span>
                                <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img src="/images/service/service-1.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Child care</h4>
                                    <p className="mb-4">Specialized medical care for infants, children, and adolescents, ensuring their healthy growth and development.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img src="/images/service/service-2.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2  title-color">Personal Care</h4>
                                    <p className="mb-4">Our personal care services focus on individual wellness plans and daily health management for all ages.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img src="/images/service/service-3.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">CT scan</h4>
                                    <p className="mb-4">Advanced Computed Tomography (CT) scans providing detailed internal images for accurate diagnosis of various conditions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src="/images/service/service-4.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
                                    <p className="mb-4">Expert orthopedic surgical procedures for hip, knee, and shoulder replacements to restore mobility and reduce pain.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src="/images/service/service-6.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Examination & Diagnosis</h4>
                                    <p className="mb-4">Comprehensive health assessments and advanced diagnostic testing for early detection and effective treatment planning.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src="/images/service/service-8.jpg" alt="" className="img-fluid" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
                                    <p className="mb-4">Specialized neurological care and support for patients living with Alzheimer's and other memory-related conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cta-content">
                                <div className="divider mb-4"></div>
                                <h2 className="mb-5 text-lg">We are pleased to offer you the <span className="title-color">chance to have the healthy</span></h2>
                                <Link to="/appoinment" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Services;

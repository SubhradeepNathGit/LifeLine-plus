import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const Department = () => {
    return (
        <>
            <Header />

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">All Department</span>
                                <h1 className="text-capitalize mb-5 text-lg">Care Department</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 ">
                            <div className="department-block mb-5">
                                <img src="/images/service/service-1.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Opthomology</h4>
                                    <p className="mb-4">Comprehensive eye care services including vision testing, Cataract surgery, and treatment for all eye conditions.</p>
                                    <Link to="/department-single" className="read-more">Learn More  <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="department-block mb-5">
                                <img src="/images/service/service-2.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2  title-color">Cardiology</h4>
                                    <p className="mb-4">Expert cardiac care for heart health, including prevention, diagnosis, and advanced treatment of heart diseases.</p>
                                    <Link to="/department-single" className="read-more">Learn More <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="department-block mb-5">
                                <img src="/images/service/service-3.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Dental Care</h4>
                                    <p className="mb-4">Complete dental solutions from routine cleaning and fillings to advanced oral surgery and cosmetic procedures.</p>
                                    <Link to="/department-single" className="read-more">Learn More <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="department-block  mb-5 mb-lg-0">
                                <img src="/images/service/service-4.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Child Care</h4>
                                    <p className="mb-4">Dedicated pediatric specialists providing compassionate medical care for your child's health and wellness.</p>
                                    <Link to="/department-single" className="read-more">Learn More <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="department-block mb-5 mb-lg-0">
                                <img src="/images/service/service-6.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Pulmology</h4>
                                    <p className="mb-4">Specialized treatment for respiratory system conditions including asthma, COPD, and sleep-related breathing disorders.</p>
                                    <Link to="/department-single" className="read-more">Learn More <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="department-block mb-5 mb-lg-0">
                                <img src="/images/service/service-8.jpg" alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Gynecology</h4>
                                    <p className="mb-4">Comprehensive care for women's reproductive health, prenatal services, and specialized gynecological treatments.</p>
                                    <Link to="/department-single" className="read-more">Learn More <i className="icofont-simple-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Department;

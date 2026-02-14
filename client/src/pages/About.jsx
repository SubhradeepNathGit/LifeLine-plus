import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const About = () => {
    return (
        <>
            <Header />

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">About Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="title-color">Personal care for your healthy living</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>At LifeLine +, we are committed to providing compassionate and comprehensive medical care. Our mission is to enhance the health and well-being of our community through innovative treatments, expert medical advice, and a patient-first approach that ensures every individual receives the care they deserve.</p>
                            <img src="/images/about/sign.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="fetaure-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="/images/about/about-1.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">LifeLine + for Kids</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="/images/about/about-2.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Medical Counseling</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="/images/about/about-3.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Modern Equipments</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item">
                                <img src="/images/about/about-4.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Qualified Doctors</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="title-color">Our Doctors achievements </h2>
                            <div className="divider mt-4 mb-5 mb-lg-0"></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/3.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/4.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/5.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="/images/about/6.png" alt="" className="img-fluid" />
                                    </div>
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

export default About;

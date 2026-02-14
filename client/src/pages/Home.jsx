import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3"></div>
                                <span className="text-uppercase text-sm letter-spacing ">LifeLine + - Medical Application</span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                <p className="mb-4 pr-5">We are dedicated to providing the highest quality healthcare services with a focus on patient comfort and safety. From emergency assistance to regular check-ups, our expert team is here for you 24/7.</p>
                                <div className="btn-container ">
                                    <Link to="/appoinment" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  "></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-block d-lg-flex">
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-surgeon-alt"></i>
                                    </div>
                                    <span>24 Hours Service</span>
                                    <h4 className="mb-3">Online Appoinment</h4>
                                    <p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                                    <Link to="/appoinment" className="btn btn-main btn-round-full">Make a appoinment</Link>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-ui-clock"></i>
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 className="mb-3">Working Hours</h4>
                                    <ul className="w-hours list-unstyled">
                                        <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                                        <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                                        <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                                    </ul>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-support"></i>
                                    </div>
                                    <span>Emegency Cases</span>
                                    <h4 className="mb-3">1-800-700-6200</h4>
                                    <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src="/images/about/img-1.jpg" alt="" className="img-fluid" />
                                <img src="/images/about/img-2.jpg" alt="" className="img-fluid mt-4" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src="/images/about/img-3.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color">Personal care <br />& healthy living</h2>
                                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                                <Link to="/service" className="btn btn-main-2 btn-round-full btn-icon">Services<i className="icofont-simple-right ml-3"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section ">
                <div className="container">
                    <div className="cta position-relative">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-doctor"></i>
                                    <span className="h3 counter" data-count="58">0</span>k
                                    <p>Happy People</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-flag"></i>
                                    <span className="h3 counter" data-count="700">0</span>+
                                    <p>Surgery Comepleted</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-badge"></i>
                                    <span className="h3 counter" data-count="40">0</span>+
                                    <p>Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-globe"></i>
                                    <span className="h3 counter" data-count="20">0</span>
                                    <p>Worldwide Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Our commitment to excellence has earned us recognition for exceptional patient care and medical outcomes. We strive to provide a healing environment that prioritizes your health and recovery.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-laboratory text-lg"></i>
                                    <h4 className="mt-3 mb-3">Laboratory services</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-heart-beat-alt text-lg"></i>
                                    <h4 className="mt-3 mb-3">Heart Disease</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-tooth text-lg"></i>
                                    <h4 className="mt-3 mb-3">Dental Care</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-crutch text-lg"></i>
                                    <h4 className="mt-3 mb-3">Body Surgery</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-brain-alt text-lg"></i>
                                    <h4 className="mt-3 mb-3">Neurology Sargery</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-dna-alt-1 text-lg"></i>
                                    <h4 className="mt-3 mb-3">Gynecology</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Our modern laboratory is equipped with advanced technology for accurate and timely diagnostic results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section appoinment">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ">
                            <div className="appoinment-content">
                                <img src="/images/about/img-3.jpg" alt="" className="img-fluid" />
                                <div className="emergency">
                                    <h2 className="text-lg"><i className="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 ">
                            <div className="appoinment-wrap mt-5 mt-lg-0">
                                <h2 className="mb-2 title-color">Book appoinment</h2>
                                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                                <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>Choose Department</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2">
                                                    <option>Select Doctors</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                                    </div>

                                    <Link className="btn btn-main btn-round-full" to="/appoinment" >Make Appoinment <i className="icofont-simple-right ml-2  "></i></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;

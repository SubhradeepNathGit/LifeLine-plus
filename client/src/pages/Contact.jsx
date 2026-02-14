import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Contact = () => {
    return (
        <>
            <Header />

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Contact Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section contact-info pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-live-support"></i>
                                <h5>Call Us</h5>
                                +91-98765-43210
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-support-faq"></i>
                                <h5>Email Us</h5>
                                contact@lifeline.com
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-location-pin"></i>
                                <h5>Location</h5>
                                Salt Lake, Kolkata, India
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="text-md mb-2">Contact us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form id="contact-form" className="contact__form " method="post" action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="email" id="email" type="email" class="form-control" placeholder="Your Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="subject" id="subject" type="text" class="form-control" placeholder="Your Query Topic" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="phone" id="phone" type="text" class="form-control" placeholder="Your Phone Number" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group-2 mb-4">
                                    <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message" required></textarea>
                                </div>

                                <div>
                                    <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="google-map ">
                <div id="map" data-latitude="22.5726" data-longitude="88.3639" data-marker="images/marker.png"></div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;

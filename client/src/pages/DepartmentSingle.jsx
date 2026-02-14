import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const DepartmentSingle = () => {
    return (
        <>
            <Header />
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Department Details</span>
                                <h1 className="text-capitalize mb-5 text-lg">Single Department</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section department-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Content for this specific department will be displayed here.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DepartmentSingle;

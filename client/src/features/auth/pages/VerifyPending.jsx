import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle } from 'lucide-react';

const VerifyPending = () => {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 text-center">
                        <div className="p-5 shadow rounded bg-white">
                            <Clock size={64} className="text-warning mb-4" />
                            <h2 className="mb-3">Verification Pending</h2>
                            <p className="text-muted mb-4">
                                Thank you for registering as a Doctor! Your account is currently under review.
                                We are verifying your medical credentials. You will be notified once your account is approved.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Link to="/" className="btn btn-main-2 btn-round-full">Go Home</Link>
                                <Link to="/contact" className="btn btn-white btn-round-full border">Contact Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifyPending;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder for login logic
        navigate('/admin/dashboard');
    };

    return (
        <div className="bg-gradient-primary" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{ backgroundImage: 'url("https://source.unsplash.com/K_Na5gC4H38/600x800")', backgroundSize: 'cover' }}></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleLogin}>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        placeholder="Enter Email Address..."
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block w-100">
                                                    Login
                                                </button>
                                                <hr />
                                                <button type="button" className="btn btn-google btn-user btn-block w-100 mb-2">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                                <button type="button" className="btn btn-facebook btn-user btn-block w-100">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="#!">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="#!">Create an Account!</a>
                                            </div>
                                        </div>
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

export default Login;

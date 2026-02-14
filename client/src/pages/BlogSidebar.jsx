import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const BlogSidebar = () => {
    return (
        <>
            <Header />
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our Blog</span>
                                <h1 className="text-capitalize mb-5 text-lg">Blog With Sidebar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <p>Blog posts will appear here.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div className="widget widget-search mb-4">
                                    <h5 className="widget-title mb-3">Search</h5>
                                    <form action="#" className="search-form">
                                        <input type="text" className="form-control" placeholder="search" />
                                    </form>
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

export default BlogSidebar;

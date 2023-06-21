import React from 'react';
import { Link } from 'react-router-dom';

function About1(props) {
    return (
        <div>
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="Assets/img/about-bg.png" alt="" style={{objectFit: 'cover'}} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className="text-primary">G-Travel.inc</span></h1>
                            <p className="mb-4">Welcome to our travel site! Here, you can explore a world of possibilities and plan your next adventure with ease. Whether you're dreaming of a relaxing beach getaway, a thrilling outdoor adventure, or a cultural exploration, we have everything you need to make it a reality. Browse through our extensive collection of destinations, accommodations, and activities, and find the perfect combination to suit your preferences and budget.</p>
                            <p className="mb-4">Our site offers a user-friendly interface, informative travel guides, and expert recommendations to help you make informed decisions and create unforgettable memories. Let us be your guide to the world, and start planning your next journey today!</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First class Flights</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </div>
    );
}

export default About1;
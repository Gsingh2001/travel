import React from 'react';

function Footer(props) {
    return (
        <div>
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-3">Company</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                            <a class="btn btn-link" href="">FAQs & Help</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-3">Contact</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>V.P.O. Jaitewali , Jalandhar</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 9877371074</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>gsingh07@outlook.in</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href="https://twitter.com/Gsingh_07?t=pZHGEvgdgDB5upGgrMrS4w&s=08"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/gurmanpreet-singh-7a1209210"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-3">Gallery</h4>
                            <div class="row g-2 pt-2">
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light p-1" src="Assets/img/package-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style={{maxWidth: "400px;"}} >
                                <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">G-Travel.inc</a>, All Right Reserved.


                                Designed By <a class="border-bottom" href="https://htmlcodex.com">Gurmanpreet Singh</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="/Home">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
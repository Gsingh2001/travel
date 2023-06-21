import React from 'react';

function Packages1(props) {
    const size = '80px';
    return (
        <div>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="section-title bg-white text-center text-primary px-3">Packages</h6>
                        <h1 class="mb-5">Awesome Packages</h1>
                    </div>
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="package-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="Assets/img/leh.jpg" alt="" style={{ maxWidth:"410px",height:"280px"}} />
                                </div>
                                <div class="d-flex border-bottom">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>Leh Ladakh</small>
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>8 days</small>
                                    <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div class="text-center p-4">
                                    <h3 class="mb-0">70000</h3>
                                    <div class="mb-3">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Leh-Ladakh is a ruggedly beautiful region in northern India, renowned for its stunning mountain landscapes, serene lakes, and rich cultural heritage.</p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <a href="#" class="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" class="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="package-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="Assets/img/kashmir.jpg" alt="" style={{ maxWidth:"410px",height:"280px"}}  />
                                </div>
                                <div class="d-flex border-bottom">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>Kashmir</small>
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>5 days</small>
                                    <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div class="text-center p-4">
                                    <h3 class="mb-0">45000</h3>
                                    <div class="mb-3">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Kashmir is a picturesque region in the northernmost part of India, renowned for its scenic beauty, rich history, and cultural diversity.</p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <a href="#" class="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" class="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="package-item">
                                <div class="overflow-hidden">
                                    <img class="Assets/img-fluid" src="Assets/img/manali.jpg" alt="" style={{ maxWidth:"410px",height:"280px"}}/>
                                </div>
                                <div class="d-flex border-bottom">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>Manali</small>
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>4 days</small>
                                    <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div class="text-center p-4">
                                    <h3 class="mb-0">20000</h3>
                                    <div class="mb-3">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Manali is a charming hill station nestled in the mountains of Himachal Pradesh, India, famous for its natural beauty, adventure activities, and cultural attractions.</p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <a href="#" class="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" class="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }} >Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packages1;
import React from 'react';

function Team(props) {
   
    return (
        <div>
            <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                <h1 className="mb-5">Meet Our Guide</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="Assets/img/About-bg.png" alt=""  />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Gurmanpreet Singh</h5>
                            <small>CEO</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="Assets/img/team-2.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Bhavya Sareen</h5>
                            <small>Guide</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="Assets/img/team-3.jpg" alt="" />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Chetan Shoor</h5>
                            <small>Manager</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="Assets/img/team-4.jpg" alt="" />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Kunal Verma</h5>
                            <small>Driver</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Team;
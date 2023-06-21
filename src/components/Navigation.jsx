import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";


function Navigation(props) {
    const { user, setUser } = useContext(TodoContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    }

    return (
        <div>
            <div>

                {/* Topbar Start */}
                <div className="container-fluid bg-dark px-5 d-none d-lg-block red">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                                <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>V.P.O. Jaitewali , Jalandhar</small>
                                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91 9877371074</small>
                                <small className="text-light"><i className="fa fa-envelope-open me-2"></i>gsingh07@outlook.in</small>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                                <NavLink className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://twitter.com/Gsingh_07?t=pZHGEvgdgDB5upGgrMrS4w&s=08"><i className="fab fa-twitter fw-normal"></i></NavLink>
                                <NavLink className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.linkedin.com/in/gurmanpreet-singh-7a1209210"><i className="fab fa-linkedin-in fw-normal"></i></NavLink>
                                <NavLink className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://instagram.com/gurman_preetsingh?igshid=ZDdkNTZiNTM="><i className="fab fa-instagram fw-normal"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <NavLink to="" className="navbar-brand p-0">
                            <h2 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>G-Travel.inc</h2>

                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/Home" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/Services" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/Packages" className="nav-item nav-link">Packages</NavLink>
                                <NavLink to="/Api" className="nav-item nav-link">Api</NavLink>
                                {!user ? <></> :
                                    <NavLink to="/Mybookings" className="nav-item nav-link">Mybookings</NavLink>}
                                <div className="nav-item dropdown">
                                    <a to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                                        <NavLink to="/Destination" className="dropdown-item">Destination</NavLink>
                                        <NavLink to="/Booking" className="dropdown-item">Booking</NavLink>
                                        <NavLink to="/Travel" className="dropdown-item">Travel Guides</NavLink>
                                        <NavLink to="/Contact" className="dropdown-item">Contact</NavLink>
                                    </div>
                                </div>
                                {!user ? <></> : <>
                                    <div className="nav-item dropdown">
                                        <a to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa-solid fa-user"></i></a>
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                                            <NavLink to="/Profile" className="dropdown-item">{user?.username}</NavLink>
                                            <NavLink to="/UpdateProfile" className="dropdown-item">Update Profile</NavLink>
                                            <NavLink to="" className="dropdown-item" onClick={logout}>logout</NavLink>
                                        </div>
                                    </div>
                                </>}

                            </div>
                            {user ? <></> :
                                <NavLink to="/Sign" className="btn btn-primary rounded-pill py-2 px-4">Login/Signup</NavLink>}
                        </div>
                    </nav>


                </div>
                {/* Navbar & Hero End */}
            </div>
        </div>
    );
}

export default Navigation;
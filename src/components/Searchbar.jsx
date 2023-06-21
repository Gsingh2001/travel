import React from 'react';

function Searchbar(props) {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Plan Adventure With Us</h1>
                            <p className="fs-4 text-white mb-4 animated slideInDown">“Let us step into the night and pursue that flighty temptress, adventure.” ― J.K. Rowling</p>
                            <div className="position-relative w-75 mx-auto animated slideInDown">
                                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Manali" />
                                <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px' }}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
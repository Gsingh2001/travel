import React, { useContext, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Login from '../components/Login';
import Register from '../components/Register';


function Sign(props) {



    return (
        <div>
            <Hero />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-8 justify-content-center'>
                        <div className='col-lg-6 '>
                            <Login />
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='col-lg-10 '>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;
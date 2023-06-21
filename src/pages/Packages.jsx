import React from 'react';
import Packages1 from '../components/Packages1';
import Process from '../components/Process';
import Booking1 from '../components/Booking1';
import Hero from '../components/Hero';

function Packages(props) {
    return (
        <div>
            <Hero />
            <Packages1 />
            <Booking1 />
            <Process />
        </div>
    );
}

export default Packages;
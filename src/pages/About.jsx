import React from 'react';
import About1 from '../components/About1';
import Team from '../components/Team';
import Hero from '../components/Hero';

function About(props) {
    return (
        <div>
            <Hero />
            <About1 />
            <Team />
        </div>
    );
}

export default About;
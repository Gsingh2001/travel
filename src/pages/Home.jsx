import React from 'react';
import Packages from './Packages';
import Process from '../components/Process';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Searchbar from '../components/Searchbar';
import About1 from '../components/About1';
import Destination1 from '../components/Destination1';
import Service1 from '../components/Service1';
import Booking1 from '../components/Booking1';
import Packages1 from '../components/Packages1';

function Home(props) {
    return (
        <div>
            <Searchbar />
            <About1 />
            <Service1 />
            <Destination1 />
            <Packages1 />
            <Booking1 />
            <Process />
            <Team />
            <Clients />
            
        </div>
    );
}
export default Home;
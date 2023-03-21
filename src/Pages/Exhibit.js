import React from 'react';
import '../styles/css/pagesCss/exhibit.css'
import Testimonials from '../Components/Testimonials';
import SignIn from '../Components/SignIn';
import Menu from '../Components/Menu';
import Gallery from '../Components/Gallery';
import Map from '../Components/Map';
import Charts from '../Components/Charts';
import '../styles/css/queries.css'
// import Survey from '../Components/Survey';

function Exhibit(props) {
    return (
        <div className='exhibit-page'>
            <Testimonials />
            <SignIn />
            <Menu />
            <Gallery />
            <Map />
            <Charts />
            {/* <Survey /> */}
        </div>
    );
}

export default Exhibit;
import React from 'react';
import '../styles/css/compCss/testimonials.css';
import '../styles/css/queries.css'

import TestimonialCard from './TestimonialCard';
import userImg_1 from '../styles/images/8.jpg'
import userImg_3 from '../styles/images/30.jpg'
import userImg_2 from '../styles/images/63.jpg'

function Testimonials(props) {
    return (
        <div className='testimonial-section'>
            <h2 className='secondary-heading'>Testimonial Carousel</h2>
            <div id="carouselAutoplaying" className="carousel slide carousel-cs" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active testimonial-container">
                        <TestimonialCard img={userImg_2} />

                    </div>
                    <div className="carousel-item testimonial-container">
                        <TestimonialCard img={userImg_3} />
                    </div>
                    <div className="carousel-item testimonial-container">
                        <TestimonialCard img={userImg_1} />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
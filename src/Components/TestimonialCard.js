import React from 'react';
import '../styles/css/compCss/testimonialCard.css';
import '../styles/css/queries.css'

function TestimonialCard(props) {
    return (
        <div className='testimonial-card'>
            <div className='user-img-container'>
                <img className='user-img' src={props.img} alt='user_img' />
            </div>
            <div className='testimonial-textbox'>
                <h3 className='testimonial-heading'>Amazing modern designs</h3>
                <p className='text-content'>Lorem ipsum dolor sit amet, condimentum ac. Curabitur libero leo, commodo ultrices augue ut, placerat luctus mauris. Cras accumsan molestie neque, ac ultricies elit venenatis nec. Vivamus viverra condimentum nulla, et dictum massa feugiat nec. Cras eget felis ut justo facilisis ornare.</p>
                <p className='testimonial-author'> &sim;  Mark Dent</p>
            </div>
        </div>
    );
}

export default TestimonialCard;
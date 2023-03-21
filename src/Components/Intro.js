import React from 'react';
import '../styles/css/compCss/intro.css'
import progImg1 from '../styles/images/programmer_img_1.png'

import 'animate.css'

function Intro(props) {

    return (
        <div id='intro-section' className='intro-section'>

            <div id='intro' className='intro-box'>

            </div>
            <h1 className='primary-heading intro-heading'>Welcome</h1>
            <h1 className='primary-heading intro-create'>Let's Create</h1>
            <div className='intro-img-container'>
                <img className='intro-img' src={progImg1} alt='programmer_img' />
            </div>

            <div className='stream'></div>
            <div className='stream st2'></div>
            <div className='stream st3'></div>
            <div className='stream st4'></div>
            <div className='stream st5'></div>
            <div className='stream st6'></div>
        </div>


    );
}

export default Intro;

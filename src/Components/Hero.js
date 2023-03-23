import React from 'react';
// import avatarImg from '../styles/images/male_avatar.png';
// import heroImg from '../styles/images/hero_img3.jpg';
import '../styles/css/compCss/hero.css';
import Orbit from '../Components/Orbit';
import '../styles/css/queries.css'

function Hero(props) {
    return (
        <div className='hero-section'>

            <div className='hero-text-box'>
                <h3 className='tertriary-heading'>Hello there, I am</h3>

                <h1 className='primary-heading hero-heading'> &lt; Kian Petersen /&gt;</h1>

                <h1 className='secondary-heading'>Let's Create</h1>
                <p className='hero-text-content'>Hello, I am Kian. I am front-end web developer. I have the ability to take your vision and transform it into a stunning, interactive website that engages and delights your audience. With putting emphasis on user expreience and keeping up with the latest design trends. </p>
                <div className='btn-container'>

                    <a className='btn btn-primary' href='/contact'>Contact</a>
                    <a className='btn' href='/exhibit'>View Designs</a>
                </div>

            </div>
            <Orbit />

        </div>
    );
}

export default Hero;
import React, { useState } from 'react';
import '../styles/css/compCss/socials.css'

function Socials(props) {

    const [iconSize, setSize] = useState('large')
    function getSize() {
        let width = getWindowSize()
        if (width <= 700) {
            setSize('small')
        }
        if (width > 700) {
            setSize('large')

        }

    }
    function getWindowSize() {
        let windowWidth = window.innerWidth;
        return windowWidth

    }
    window.onresize = function (event) {
        getSize()


    };
    window.onload = function (event) {
        getSize()
    };
    return (
        <div className='socials-section'>
            <ul className='socials-list'>
                {/* {getSocials(socials, iconSize)} */}
                <li className='social-item'><a href='/' className='social-link instagram'><ion-icon size={iconSize} name="logo-instagram"></ion-icon></a></li>
                <li className='social-item'><a href='/' className='social-link twitter'><ion-icon size={iconSize} name="logo-twitter"></ion-icon></a></li>
                <li className='social-item'><a href='/' className='social-link github'><ion-icon size={iconSize} name="logo-github"></ion-icon></a></li>
                <li className='social-item'><a href='/' className='social-link linkdin'><ion-icon size={iconSize} name="logo-linkedin"></ion-icon></a></li>

            </ul>

        </div>
    );
}

export default Socials;
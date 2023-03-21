import React, { useState } from 'react';
import '../styles/css/compCss/header.css'
import heroImg from '../styles/images/hero_img3.jpg';
import '../styles/css/queries.css'

function Header(props) {
    const [visible, setVisibility] = useState(true)

    function getWindowSize() {
        let windowWidth = window.innerWidth;
        return windowWidth

    }
    function getRoute() {
        return window.location.pathname

    }
    function setImage() {
        let route = getRoute()
        let size = getWindowSize()

        if (route !== '/' && size <= 495) {
            setVisibility(false)

        } else if (route !== '/' && size > 495) {
            setVisibility(true)
        }
    }
    window.onload = function (e) {
        setImage()
    }
    window.onresize = function (event) {
        setImage()
    };
    window.onchange = function (event) {
        setImage()
    };
    return (
        <div className='header'>
            <div className='nav-img-container'>
                <img src={heroImg} className={`nav-img ${!visible ? 'hidden' : ''}`} alt='Creator_img' />
            </div>
            <h1 className='primary-heading nav-heading'>  Kian Petersen </h1>
            <ul className='nav-list'>
                <li className='nav-item'><a className='nav-link' href='/'>&lt; Home /&gt; </a></li>
                <li className='nav-item'><a className='nav-link' href='/exhibit'>&lt; Designs /&gt;</a></li>
                <li className='nav-item'><a className='nav-link' href='/languages'>&lt; Languages /&gt;</a></li>
                <li className='nav-item'><a className='nav-link' href='/contact'>&lt; Contact /&gt;</a></li>
            </ul>

        </div>
    );
}

export default Header;
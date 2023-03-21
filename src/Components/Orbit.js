import React from 'react';
import '../styles/css/compCss/orbit.css';

function Orbit(props) {
    return (
        <div className='orbit-container'>

            <div id='orbit' className='box'>

            </div>
            <div id='orbit' className='box box-2'></div>
            <div id='orbit' className='box box-3'></div>
            {/* <div id='orbit' className='box box-2'></div> */}

        </div>
    );
}

export default Orbit;
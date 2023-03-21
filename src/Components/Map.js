import React from 'react';
import '../styles/css/compCss/map.css'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div className='map-section'>

            <h1 className='primary-heading'>Interactive map</h1>
            <div className='map-container'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={20.955413}
                        lng={15.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;
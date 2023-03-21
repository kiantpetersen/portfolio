import React from 'react';
import '../styles/css/compCss/gallery.css'
import '../styles/css/queries.css'
import galleryImg1 from '../styles/images/gallery-img-1.jpg'
import galleryImg2 from '../styles/images/gallery-img-2.jpg'
import galleryImg3 from '../styles/images/gallery-img-3.jpg'
import galleryImg4 from '../styles/images/gallery-img-4.jpg'
import galleryImg5 from '../styles/images/gallery-img-5.jpg'
import galleryImg6 from '../styles/images/gallery-img-6.jpg'
import galleryImg7 from '../styles/images/gallery-img-15.jpg'
import galleryImg8 from '../styles/images/gallery-img-16.jpg'
import galleryImg9 from '../styles/images/gallery-img-9.jpg'
import galleryImg10 from '../styles/images/gallery-img-10.jpg'
import galleryImg11 from '../styles/images/gallery-img-12.jpg'
import galleryImg12 from '../styles/images/gallery-img-13.jpg'

function Gallery(props) {
    let imagesArr = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12]

    function getImages() {
        return imagesArr.map((image, key) => {
            return (
                <img className='gallery-img' key={key} alt='image_yep' src={image} />
            )
        })
    }

    return (
        <div className='gallery-section'>
            <h1 className='primary-heading gallery-heading'>Gallery</h1>
            <div className='gallery'>
                {getImages()}
            </div>
        </div>
    );
}

export default Gallery;
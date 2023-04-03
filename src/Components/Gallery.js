import React, { useState } from 'react';
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
    const [image, setImage] = useState(galleryImg2)
    let imagesArr = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12]


    function setOverlayImg(e) {
        let overlay = document.querySelector('#overlay')
        let img = document.querySelector('#img-container')
        img.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        })
        overlay.classList.remove('hidden')
        console.log(e.target.classList)

        setImage(e.target.src)
    }

    function getImages() {
        return imagesArr.map((image, key) => {
            return (
                <img onClick={setOverlayImg} className='gallery-img' key={key} alt='image_yep' src={image} />
            )
        })
    }
    function setVisibility(e) {
        e.preventDefault()
        // e.target.classList.add('hidden')
        console.log('Element: ', e.target.id)

        if (e.target.id === 'overlay') {
            e.target.classList.add('hidden')

        }
    }


    return (
        <div className='gallery-section'>
            <h1 className='primary-heading gallery-heading'>Gallery</h1>
            <div className='gallery'>
                {getImages()}
            </div>
            <div onClick={setVisibility} id='overlay' className='overlay hidden'>

                <div id='img-container' className='over-img-container'>
                    <img className='overlay-img' src={image} alt='full-img' />

                </div>

            </div>
        </div>
    );
}

export default Gallery;
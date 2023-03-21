import React from 'react';
import '../styles/css/pagesCss/contact.css'

function Contact(props) {
    return (
        <div className='contact-page'>
            <h1 className='primary-heading'>Contact Information</h1>
            <div className='contact-container'>
                <div className='contact-info'>
                    <ion-icon className='contact-icon' name="call-outline"></ion-icon>
                    <h3 className='tertiary-heading contact-heading'>Phone</h3>
                    <div className='contact-textbox'>
                        <p>Kian Petersen:   </p>
                        <p>+27 081 411 5449</p>
                    </div>
                </div>
                <div className='contact-info'>
                    <ion-icon name="share-social"></ion-icon>
                    <h3 className='tertiary-heading contact-heading'>Social Media</h3>

                    <div className='contact-textbox'>
                        <p><a className='contact-link' href='/'>Instagram</a> </p>
                        <p><a className='contact-link' href='/'>LinkedIn</a> </p>
                        <p><a className='contact-link' href='/'>Twitter</a> </p>
                        <p><a className='contact-link' href='/'>GitHub</a> </p>
                    </div>
                </div>
                <div className='contact-info'>
                    <ion-icon className='contact-icon' name="mail-outline"></ion-icon>
                    <h3 className='tertiary-heading contact-heading'>E-mail</h3>
                    <div className='contact-textbox'>
                        <p>Kian Petersen: </p>
                        <p>kiantpetersen@gmail.com</p>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Contact;
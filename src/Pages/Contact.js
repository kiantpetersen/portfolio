import React from 'react';
import '../styles/css/pagesCss/contact.css'
import '../styles/css/queries.css'
function Contact(props) {
    return (
        <div className='contact-page'>
            <h1 className='primary-heading'>Contact Information</h1>
            <div className=' container contact-container '>
                <div className='row contact-grid contact-row'>
                    <div className='col contact-col'>
                        <div className='phone contact-card'>
                            <div className='icon-container '>
                                <ion-icon className='contact-icon' name="call-outline"></ion-icon>
                            </div>
                            <div className='contaxt-textbox'>
                                <h3 className='tertiary-heading contact-heading'>Phone</h3>
                                <div className='contact-info'>
                                    <p>Kian Petersen:   </p>
                                    <p>+27 081 411 5449</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col contact-col'>
                        <div className=' email col contact-card'>
                            <div className='icon-container'>
                                <ion-icon className='contact-icon' name="mail-outline"></ion-icon>
                            </div>
                            <div className='contaxt-textbox'>

                                <h3 className='tertiary-heading contact-heading'>E-mail</h3>
                                <div className='contact-info'>
                                    <p>Kian Petersen: </p>
                                    <p>kiantpetersen@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col contact-col'>
                        <div className=' links col contact-card'>
                            <div className='icon-container'>
                                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                            </div>
                            <div className='contaxt-textbox'>
                                <h3 className='tertiary-heading contact-heading'>Social Media</h3>
                                <div className='contact-info'>
                                    <p><a className='contact-link' href='/'>Instagram</a> </p>
                                    <p><a className='contact-link' href='/'>LinkedIn</a> </p>
                                    <p><a className='contact-link' href='/'>Twitter</a> </p>
                                    <p><a className='contact-link' href='/'>GitHub</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Contact;
import React from 'react';
import '../styles/css/compCss/signin.css'
import femaleAvatarImg from '../styles/images/female_avatar.png';
import maleAvatarImg from '../styles/images/male_avatar.png';
import CountryDropdown from './CountryDropdown';
import '../styles/css/queries.css'
function SignIn(props) {
    return (
        <div className='sign-in-section'>
            <h2 className='secondary-heading'>Sign-up and Login forms</h2>
            {/* <div className='grid grid--2-cols'> */}
            <div className='container'>
                <div className='row'>
                    <div className='underlay col'>
                        <form className='signin-form'>
                            <h3 className='tertiary-heading'>Welcome Back. <br /> Please, Login</h3>
                            <img className='avatar-img' src={femaleAvatarImg} alt='female_image' />
                            <div className='input-container'>
                                <label className='input-label'>Username: </label>
                                <input className='text-input' type='text'></input>
                            </div>
                            <div className='input-container'>
                                <label className='input-label' >Password: </label>
                                <input className='text-input' type='password'></input>
                            </div>
                            <button type='submit' className='btn signin-btn'>Sign in</button>

                        </form>
                    </div>
                    <div className='underlay col'>
                        <form className='signin-form'>
                            <h3 className='tertiary-heading'>Welcome <br /> Create Account</h3>
                            <img className='avatar-img' src={maleAvatarImg} alt='female_image' />
                            <div className='input-container'>
                                <label className='input-label'>Username: </label>
                                <input className='text-input' type='text'></input>
                            </div>
                            <div className='input-container'>
                                <label className='input-label'>Phone number: </label>
                                <input className='text-input' type='tel'></input>
                            </div>

                            <div className='input-container'>
                                <label className='input-label' >Gender: </label>
                                <select className=' form-control text-input select-box' id="gender" name="country">
                                    <option className='text-input' value="female">Female</option>
                                    <option className='text-input' value="male">Male</option>
                                    <option className='text-input' value="Delusional">Other</option>
                                </select>
                            </div>
                            <CountryDropdown />
                            <div className='input-container'>
                                <label className='input-label' >Password: </label>
                                <input className='text-input' type='password'></input>
                            </div>
                            <div className='input-container'>
                                <label className='input-label' >Confirm Password: </label>
                                <input className='text-input' type='password'></input>
                            </div>
                            <button type='submit' className='btn signin-btn'>Create Account</button>

                        </form>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>

    );
}

export default SignIn;
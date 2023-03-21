import React from 'react';
import '../styles/css/compCss/survey.css';

function Survey(props) {
    return (
        <div className='survey-section'>
            <h1 className='primary-heading'>User Survey</h1>
            <div className='survey-container'>
                <form className='survey-form'>
                    <h3 className='tertiary-heading'>Survey Questionare</h3>
                    <p>eget egestas est odio id mi. Pellentesque sit amet scelerisque velit. Integer a fermentum nisl. Nam consectetur purus id </p>
                    <div className='question-container'>
                        <p>Rating</p>
                        <div className='rating-container'>
                            <label >Terrible</label>
                            <label >Bad</label>
                            <label >Satisfactory</label>
                            <label >Good</label>
                            <label >Excellent</label>
                        </div>
                        <p className='question-content'>Hwats good?</p>
                        <fieldset className='rating-container'>
                            <input className='input-radio' type="radio" id="terrible" name="question-1" value="1" />
                            <input className='input-radio' type="radio" id="bad" name="question-1" value="2" />
                            <input className='input-radio' type="radio" id="sat" name="question-1" value="3" />
                            <input className='input-radio' type="radio" id="good" name="question-1" value="4" />
                            <input className='input-radio' type="radio" id="exc" name="question-1" value="5" />
                        </fieldset>
                        <p className='question-content'>Wie gehts?</p>

                        <fieldset className='rating-container'>
                            <input className='input-radio' type="radio" id="bad" name="question-2" value="1" />
                            <input className='input-radio' type="radio" id="ok" name="question-2" value="2" />
                            <input className='input-radio' type="radio" id="sat" name="question-2" value="3" />
                            <input className='input-radio' type="radio" id="good" name="question-2" value="4" />
                            <input className='input-radio' type="radio" id="exc" name="question-2" value="5" />
                        </fieldset>
                        <p className='question-content'>Gute reiser</p>

                        <fieldset className='rating-container'>
                            <input className='input-radio' type="radio" id="bad" name="question-3" value="1" />
                            <input className='input-radio' type="radio" id="ok" name="question-3" value="2" />
                            <input className='input-radio' type="radio" id="sat" name="question-3" value="3" />
                            <input className='input-radio' type="radio" id="good" name="question-3" value="4" />
                            <input className='input-radio' type="radio" id="exc" name="question-3" value="5" />
                        </fieldset>



                    </div>
                    <button type='submit' className='btn btn-primary btn-survey'>Submit Survey</button>
                </form>
            </div>

        </div>
    );
}

export default Survey;
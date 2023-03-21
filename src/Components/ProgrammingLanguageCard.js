import React from 'react';
import '../styles/css/compCss/programmingLanguageCard.css';

const ProgrammingLanguageCard = ({ language, image, description }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={`${language} logo`} />
            </div>
            <div className="card-content">
                <h2>{language}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProgrammingLanguageCard;
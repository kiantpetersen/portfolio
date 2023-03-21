import React from 'react';
import '../styles/css/pagesCss/languages.css'
import '../styles/css/queries.css'
import ProgrammingLanguageCard from '../Components/ProgrammingLanguageCard';
let arr = [{
    language: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    description: " Enables interactive web pages."
},
{
    language: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    description: "General-purpose programming language."

}
    ,
{
    language: "CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
    description: "Styles web pages, makes them look good."

}
    ,
{
    language: "HTML",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description: "Markup language for creating web pages."

}
    ,
{
    language: "PHP",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    description: "Server-side scripting language for web development."

},
{
    language: "SQL",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    description: "Manages data in relational databases."

}
]
function getCard() {
    return arr.map((el, key) => {
        return <div className='card-container col'>

            <ProgrammingLanguageCard
                key={key}
                language={el.language}
                image={el.image}
                description={el.description}
            />
        </div>
    })
}
function Languages(props) {
    return (
        <div className='languages-page'>
            <h1 className='primary-heading languages-heading'>
                Programming and Markup Languages
            </h1>

            <div className='container'>
                <div className=' row '>
                    {getCard()}

                </div>
            </div>


        </div>
    );
}

export default Languages;
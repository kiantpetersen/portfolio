import React from 'react';
import '../styles/css/pagesCss/homepage.css'
// import Orbit from '../Components/Orbit';
import Hero from '../Components/Hero';
import Socials from '../Components/Socials';
import Intro from '../Components/Intro';
import '../styles/css/queries.css'

function Homepage(props) {
    // let [visited, setVisited] = useState()
    window.onload = (event) => {
        let visited = localStorage.getItem('Visited');
        if (!visited) {
            // localStorage.setItem("Visited", true);
            console.log('Page not visited')

        }
        else {
            console.log('Page visited', visited);
            let intro = document.querySelector('#intro-section');
            intro.classList.add('hidden')
            console.log(intro);
        }


    };

    return (
        <div className='home-page'>
            <Hero />
            <Socials />
            <Intro />

            {/* <Orbit /> */}


        </div>
    );
}

export default Homepage;
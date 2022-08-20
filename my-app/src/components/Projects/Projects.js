import React from 'react';
import './projects.css';
import '../../App.css';
// import Carousel from './Carousel/Carousel.js';
import Cards from './Cards/Cards.js';

function Projects() {
    return (
        <div id='projects'>
            <h2>Projects</h2>
            <div
                className='inner-project-content'
                style={{ paddingTop: '8em' }}
            >
                {/* <Carousel /> */}
                <Cards />
            </div>
        </div>
    );
}

export default Projects;

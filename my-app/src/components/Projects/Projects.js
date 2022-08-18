import React from 'react';
import './projects.css';
import '../../App.css';
import Carousel from './Carousel/Carousel.js';

function Projects() {
    return (
        <div id='projects'>
            <div
                className='inner-project-content'
                style={{ paddingTop: '8em' }}
            >
                <h2>Projects</h2>
                <Carousel />
            </div>
        </div>
    );
}

export default Projects;

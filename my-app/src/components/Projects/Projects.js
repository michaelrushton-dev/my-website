import React from 'react';
import './projects.css';
import '../../App.css';
import Cards from './Cards/Cards.js';

//card component imported (maps over project images - uses regex to name correctly)
function Projects() {
    return (
        <div id='projects'>
            <h2 className='projects-title'>Projects</h2>
            <div
                className='inner-project-content'
                style={{ paddingTop: '8em' }}
            >
                <Cards />
            </div>
        </div>
    );
}

export default Projects;

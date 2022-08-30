import React from 'react';
import './projects.css';
import '../../App.css';
import Cards from './Cards/Cards.js';
import { motion } from 'framer-motion';

//card component imported (maps over project images - uses regex to name correctly)
function Projects() {
    return (
        <div id='projects'>
            <motion.h2
                className='projects-title'
                whileInView={{ scale: 2 }}
                transition={{
                    delay: 0.2,
                    x: { duration: 1 },

                    type: 'spring',
                    stiffness: 50,
                }}
            >
                Projects
            </motion.h2>

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

import React from 'react';
import './projects.css';
import '../../App.css';
//card component imported (maps over project images - uses regex to name correctly)
import Cards from './Cards/Cards.js';
import { motion, useScroll } from 'framer-motion';
import leaf1 from '../../assets/leafl-left-250.png';
import leaf2 from '../../assets/leaf-right-110.png';

function Projects() {
    const { scrollY } = useScroll();
    // console.log(scrollY.current);
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
            <div className='leaf-container'>
                {/* leaf1 */}
                <motion.img
                    className='leafs leaf1'
                    style={
                        scrollY.current > 1400
                            ? {
                                  rotate: -scrollY.current / 5 - 800,
                                  x: -scrollY.current + 1400,
                              }
                            : null
                    }
                    src={leaf1}
                    alt='leaf'
                    transition={{
                        delay: 0.2,

                        duration: 5,

                        type: 'spring',
                        stiffness: 20,
                    }}
                />
                {/* leaf2 */}
                <motion.img
                    className='leafs leaf2'
                    style={
                        scrollY.current > 1400
                            ? {
                                  rotate: scrollY.current / 5 + 800,
                                  x: scrollY.current - 1400,
                              }
                            : null
                    }
                    transition={{
                        delay: 0.2,

                        duration: 5,

                        type: 'spring',
                        stiffness: 20,
                    }}
                    src={leaf2}
                    alt='leaf'
                />
            </div>

            <div className='inner-project-content'>
                <Cards />
            </div>
        </div>
    );
}

export default Projects;

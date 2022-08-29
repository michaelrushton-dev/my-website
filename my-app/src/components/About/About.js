import React from 'react';
import './about.css';
import '../../App.css';
import TechStack from './TechStack/TechStack.js';
import { motion, useScroll } from 'framer-motion';

function About({ scrollPosition }) {
    const { scrollYProgress } = useScroll();

    //using the scroll hook as prop to control fade in of heading
    const opacityScrollDarker = 0 + (scrollPosition - 500) / 500;
    //using scroll hook to control slide in of header (h2)
    let hiOffset;
    hiOffset = 600 - scrollPosition;
    return (
        <div id='about'>
            <div className='inner-content'>
                <motion.div
                    initial={{ marginLeft: -5 }}
                    whileInView={{ marginLeft: '15em' }}
                    style={{ backgroundColor: 'red' }}
                    animate={{ x: 100 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <h2
                        style={{
                            // opacity: opacityScrollDarker,
                            // position: 'absolute',
                            // marginTop: '2em',
                            // top: '1em',
                            // paddingRight: `${hiOffset}%`,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {' '}
                        A bit about me...{' '}
                    </h2>
                </motion.div>

                <br />
                <p className='about-me'>
                    Nice to meet you, I'm Mike Rushton.
                    <br />
                    <br /> I have taken the leap out of my career as an optician
                    working in the Cayman Islands into an amazing new world of
                    tech where I learn new things each day and meet engaging,
                    forward-thinking people...pretty good choice if you ask me!
                    <br />
                    <br /> Having always been obsessed with learning about other
                    people and their cultures I have been blown away by the
                    diverse and inclusive community I have become part of
                    through attending meet-ups and through my incredible
                    bootcamp: the School of Code.
                    <br />
                    <br /> I owe the School of Code so much. I have not only
                    become a full stack developer in three months, but also
                    become seasoned in Agile methodology and team work.
                    <br />
                    <br /> The bootcamp is like a job. We carry out daily
                    stand-ups and retros, always work together through
                    pair-programming or mob-programming, and are part of a
                    helpful community that has a vibrant approach to encouraging
                    eachother's progress.
                </p>
                <br />
                <br />
                <TechStack />
            </div>
        </div>
    );
}

export default About;

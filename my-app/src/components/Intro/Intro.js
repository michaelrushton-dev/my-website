import React from 'react';
import './intro.css';
import '../../App.css';
import { motion, useScroll } from 'framer-motion';

function Intro({ scrollPosition }) {
    //using scrollPosition value (the returned value of my useScroll custom hook passed in from app.js) to make element opacity lighten.
    //I inadvertently named my custom hook the same name as the framer one before I knew it existed!
    const opacityScrollLighter = 1 - scrollPosition / 300;
    //using scrollPosition value to make element opacity darken (welcome message)
    //later on welcome checks if scroll is > 400, then sets opactiy to be as below, deducting 400
    //to start from 0 again - to ake it fade in.
    const opacityScrollDarker = 0 + (scrollPosition - 400) / 200;
    //offsetting text to fly off screen at staggered rates

    // Originally I used the hiOffset variable to control the left padding of each line of text but (I assume due to client side rendering) the text didn't return to its initial position consistently when scrolling around the page so I used framer motion's useScroll
    // let hiOffset;
    // scrollPosition > 100 ? (hiOffset = scrollPosition - 100) : (hiOffset = 0);

    const { scrollY } = useScroll();

    console.log(scrollY.current);

    return (
        <div className='intro'>
            <header className='intro-header'>
                <motion.h2
                    className='hi'
                    style={{
                        // paddingLeft: `${scrollPosition}%`,
                        x: scrollY.current * 4,
                    }}
                >
                    Hi,
                </motion.h2>
                <motion.h2
                    style={{
                        x: scrollY.current * 3,
                    }}
                >
                    I'm
                </motion.h2>
                <h1>Mike</h1>
                <div className='tagline'>
                    <motion.h2
                        style={{
                            x: scrollY.current * 2,
                            // paddingLeft: hiOffset,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        I love people,
                    </motion.h2>
                    <motion.h2
                        style={{
                            x: scrollY.current,
                            //  paddingLeft: hiOffset - 100
                        }}
                    >
                        learning
                    </motion.h2>
                    <motion.h2
                        style={{
                            // paddingLeft: hiOffset - 300,
                            x: scrollY.current / 2,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        and solving things
                    </motion.h2>
                </div>
            </header>
            <motion.div
                className='welcome'
                style={{
                    x: scrollY.current - 500,
                    opacity: scrollPosition > 400 ? opacityScrollDarker : 0,
                }}
            >
                <h2>Welcome</h2>
            </motion.div>

            <a className='arrow-link-wrapper' href='#about'>
                {' '}
                <div
                    className='arrow-cta'
                    style={{ opacity: opacityScrollLighter }}
                ></div>
            </a>
        </div>
    );
}

export default Intro;

import React from 'react';
import './contact.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { RiFileDownloadLine } from 'react-icons/ri/index.js';
import { BsGithub } from 'react-icons/bs/index.js';
import { AiFillLinkedin } from 'react-icons/ai/index.js';
import { MdOutlineEmail } from 'react-icons/md/index.js';

function Contact() {
    return (
        <div id='contact'>
            <div
                className='contact-inner-content'
                style={{ paddingTop: '8em' }}
            >
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
                    Contact
                </motion.h2>
                <h3>Please feel free to reach out to me at any time!</h3>
                <div className='icon-holder'>
                    <a
                        href='mailto:michaelwjrushton@gmail.com'
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        {' '}
                        <MdOutlineEmail className='icons' />
                    </a>

                    <div className='cv'>
                        <a href='mike-rushton-cv.pdf' download>
                            <RiFileDownloadLine className='icons' />
                        </a>

                        <p>Download CV</p>
                    </div>

                    <a
                        href='https://github.com/michaelrushton-dev'
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        {' '}
                        <BsGithub className='icons' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/michael-rushton/'
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <AiFillLinkedin className='icons' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

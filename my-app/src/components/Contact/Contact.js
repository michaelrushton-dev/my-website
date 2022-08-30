import React from 'react';
import './contact.css';
import '../../App.css';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div id='contact'>
            <div className='inner-content' style={{ paddingTop: '8em' }}>
                <motion.h2
                    className='projects-title'
                    whileInView={{ scale: 2.5 }}
                    transition={{
                        delay: 0.2,
                        x: { duration: 1 },

                        type: 'spring',
                        stiffness: 50,
                    }}
                >
                    Contact
                </motion.h2>
            </div>
        </div>
    );
}

export default Contact;

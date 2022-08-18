import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import imageArray from './carousel-images.js';
import './carousel.css';

export default function Carousel() {
    return (
        <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
                {imageArray.map((img) => {
                    return (
                        <motion.div className='item'>
                            <img src={img} alt={img} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

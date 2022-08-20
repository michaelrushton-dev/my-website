import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import imageArray from './carousel-images.js';
import './carousel.css';

export default function Carousel() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
        <motion.div
            ref={carousel}
            className='carousel'
            whileTap={{ cursor: 'grabbing' }}
        >
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                className='inner-carousel'
            >
                {imageArray.map((img) => {
                    return (
                        <motion.div className='item' key={img}>
                            <img src={img} alt={img} key={img} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

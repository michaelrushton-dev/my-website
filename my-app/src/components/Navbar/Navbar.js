import React from 'react';
import './navbar.css';
import '../../App.css';
import { useScroll } from 'framer-motion';

function Navbar({ scrollPosition }) {
    // const opacityScroll = scrollPosition / 200;
    const { scrollY } = useScroll();
    return (
        <div className='navbar' style={{ opacity: scrollY.current / 200 }}>
            <ul>
                <li>
                    <a href={'#about'}>
                        <h3>About</h3>
                    </a>
                </li>
                <li>
                    <a href={'#projects'}>
                        <h3>Projects</h3>
                    </a>
                </li>
                <li>
                    <a href={'#contact'}>
                        <h3>Contact</h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

//exporting navbar, rendering it inside intro.js, so it sits inside <div className="navbar">

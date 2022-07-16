import React from "react";
import "./navbar.css";
import "../../App.css";

function Navbar({ scrollPosition }) {
    const opacityScroll = scrollPosition / 200;
    return (
        <div className="bar" style={{ opacity: opacityScroll }}>
            <ul>
                <li>
                    <a href={"#top"}>
                        <h3>About</h3>
                    </a>
                </li>
                <li>
                    <a href={"#top"}>
                        {" "}
                        <h3>Projects</h3>
                    </a>
                </li>
                <li>
                    <a href={"#top"}>
                        <h3>Contact</h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

//exporting navbar, rendering it inside intro.js, so it sits inside <div className="navbar">

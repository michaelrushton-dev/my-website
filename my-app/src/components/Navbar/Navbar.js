import React from "react";
import "./navbar.css";
import "../../App.css";
import { FaBattleNet } from "react-icons/fa/index.js";

function Navbar({ scrollPosition }) {
    const opacityScroll = scrollPosition / 100;
    return (
        <div className="navbar">
            <h3>
                <FaBattleNet />
            </h3>
            <div className="bar" style={{ opacity: opacityScroll }}></div>
        </div>
    );
}

export default Navbar;

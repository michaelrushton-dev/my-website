import React from "react";
import "./intro.css";
import "../../App.css";

function Intro({ scrollPosition }) {
    let opacityScroll;
    //NEED TO FIX THIS SO THE ARROW OPACITY INCREASES WHEN SCROLL POSITION IS ABOVE 300
    if (scrollPosition) {
        opacityScroll = 1 - scrollPosition / 150;
    }
    return (
        <div className="intro">
            <header>
                <h2>Hi, I'm</h2>
                <h1>Mike</h1>
                <h2 className="tagline">
                    I love people, <br />
                    learning <br />
                    and finding solutions
                </h2>
            </header>
            <div className="arrow-cta" style={{ opacity: opacityScroll }}></div>
        </div>
    );
}

export default Intro;

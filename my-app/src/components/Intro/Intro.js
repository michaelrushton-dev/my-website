import React from "react";
import "./intro.css";
import "../../App.css";

function Intro({ scrollPosition }) {
    let opacityScroll;

    opacityScroll = 1 - scrollPosition / 300;

    return (
        <div className="intro">
            <header>
                <h2 className="hi" style={{ marginLeft: `${scrollPosition}%` }}>
                    Hi,
                </h2>
                <h2>i'm</h2>
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

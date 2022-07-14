import React from "react";
import "./intro.css";
import "../../App.css";

function Intro() {
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
            <div className="arrow-cta"></div>
        </div>
    );
}

export default Intro;

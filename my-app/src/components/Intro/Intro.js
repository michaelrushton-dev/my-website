import React from "react";
import "./intro.css";
import "../../App.css";

function Intro({ scrollPosition }) {
    //using scrollPosition value to make element opacity lighten
    const opacityScrollLighter = 1 - scrollPosition / 300;
    //using scrollPosition value to make element opacity darken (welcome message)
    //later on welcome checks if scroll is > 400, then sets opactiy to be as below, deducting 400
    //to start from 0 again - to ake it fade in.
    const opacityScrollDarker = 0 + (scrollPosition - 400) / 200;
    //offestting text to fly off screen at staggered rates
    let hiOffset;
    scrollPosition > 100 ? (hiOffset = scrollPosition - 100) : (hiOffset = 0);

    return (
        <div className="intro">
            <header>
                <h2
                    className="hi"
                    style={{
                        paddingLeft: `${scrollPosition}%`,
                    }}
                >
                    Hi,
                </h2>
                <h2
                    style={{
                        paddingLeft: `${hiOffset}%`,
                    }}
                >
                    I'm
                </h2>
                <h1>Mike</h1>
                <div className="tagline">
                    <h2 style={{ paddingLeft: hiOffset, whiteSpace: "nowrap" }}>
                        I love people,
                    </h2>
                    <h2 style={{ paddingLeft: hiOffset - 100 }}>learning</h2>
                    <h2
                        style={{
                            paddingLeft: hiOffset - 300,

                            whiteSpace: "nowrap",
                        }}
                    >
                        and solving things
                    </h2>
                </div>
            </header>
            <div
                className="welcome"
                style={
                    scrollPosition > 400
                        ? { opacity: `${opacityScrollDarker}` }
                        : { opacity: 0 }
                }
            >
                <h2>Welcome</h2>
            </div>

            <a href="#about">
                {" "}
                <div
                    className="arrow-cta"
                    style={{ opacity: opacityScrollLighter }}
                ></div>
            </a>
        </div>
    );
}

export default Intro;

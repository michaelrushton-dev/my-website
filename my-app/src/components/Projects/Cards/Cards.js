import { useState } from 'react';
import './cards.css';
import { cardArray } from './cardsArray/cardsArray.js';
import { linksArray } from './cardsArray/cardsArray.js';
import Descriptions from './Descriptions/Descriptions.js';

export default function Cards() {
    const [hovered, setHovered] = useState(false);
    // example of card string"/static/media/project-card-1.84747e47feb7636cfa6e.png"

    //function to find name of file as saved (without file extention etc as above) and append to card
    function getName(card) {
        const name = card.replace(/(w.)|(\/static\/)|(media.)|(\.)\w+/g, '');
        return name;
    }

    return (
        <div>
            <div className='card-display'>
                {cardArray.map((card, index) => {
                    return (
                        <div key={card}>
                            <a
                                href={linksArray[index]}
                                target={'_blank'}
                                rel={'noreferrer'}
                                onMouseEnter={() => {
                                    setHovered(index);
                                }}
                                onMouseLeave={() => {
                                    setHovered(false);
                                }}
                            >
                                <div className='cards'>
                                    <img
                                        className='card-images'
                                        src={card}
                                        alt={card}
                                    />
                                    {hovered === index ? (
                                        <Descriptions cardNumber={index} />
                                    ) : null}
                                    <h4>{getName(card)}</h4>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

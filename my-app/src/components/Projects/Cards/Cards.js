import './cards.css';
import { cardArray } from './cardsArray/cardsArray.js';
import { linksArray } from './cardsArray/cardsArray.js';

export default function Cards() {
    console.log(cardArray);
    // example of card string"/static/media/project-card-1.84747e47feb7636cfa6e.png"

    //function to find name of file as saved (without file extention etc as above) and append to card
    function getName(card) {
        const name = card.replace(/(w.)|(\/static\/)|(media.)|(\.)\w+/g, '');
        console.log(name);
        return name;
    }

    return (
        <div>
            <div className='card-display'>
                {cardArray.map((card, index) => {
                    return (
                        <div className='cards' key={card}>
                            <a
                                href={linksArray[index]}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <img
                                    className='card-images'
                                    src={card}
                                    alt={card}
                                    key={card}
                                />
                            </a>
                            <h4>{getName(card)}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

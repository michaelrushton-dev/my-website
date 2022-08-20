import './cards.css';
import cardArray from './cardsArray/cardsArray.js';

export default function Cards() {
    console.log(cardArray);
    // example of card string"/static/media/project-card-1.84747e47feb7636cfa6e.png"
    function getName(card) {
        const name = card.replace(/(w.)|(\/static\/)|(media.)|(\.)\w+/g, '');
        console.log(name);
        return name;
    }

    return (
        <div>
            <div className='card-display'>
                {cardArray.map((card) => {
                    return (
                        <div className='cards' key={card}>
                            <img
                                className='card-images'
                                src={card}
                                alt={card}
                                key={card}
                            />
                            <h4>{getName(card)}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

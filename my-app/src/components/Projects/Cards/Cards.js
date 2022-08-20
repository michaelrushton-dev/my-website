import './cards.css';
import cardArray from './cardsArray/cardsArray.js';

export default function Cards() {
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

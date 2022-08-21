import './descriptions.css';
import descriptionArray from './descriptionsArray.js';

export default function Descriptions({ cardNumber }) {
    return (
        <div id='description-div'>
            <div id='description-text'>{descriptionArray[cardNumber]}</div>
        </div>
    );
}

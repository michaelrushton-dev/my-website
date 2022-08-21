import './descriptions.css';
import descriptionArray from './descriptionsArray.js';

export default function Descriptions({ cardNumber }) {
    return (
        <div id='description-div'>
            <div>{descriptionArray[cardNumber]}</div>
        </div>
    );
}

import './techStack.css';
import techArray from './techStackArray/techStackArray.js';

export default function TechStack() {
    return (
        <div>
            <h3>Technologies I have worked with</h3>
            <br />
            <br />
            <div className='tech-map'>
                {techArray.map((img) => {
                    return (
                        <img
                            className='tech-images'
                            src={img}
                            alt={img}
                            key={img}
                        />
                    );
                })}
            </div>
        </div>
    );
}

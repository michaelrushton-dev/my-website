import './techStack.css';
import techArray from './techStackArray/techStackArray.js';

export default function TechStack() {
    return (
        <div>
            <div>Technologies I have worked with</div>
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

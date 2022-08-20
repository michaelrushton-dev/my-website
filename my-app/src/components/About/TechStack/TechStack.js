import './techStack.css';
import techArray from './techStackArray/techStackArray.js';
//loops over imported array of tech stack pics to populate "tech-map"div
export default function TechStack() {
    return (
        <div>
            <h3>Technologies I have worked with:</h3>
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

import './App.css';
import Intro from './components/Intro/Intro.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import useScroll from './hooks/useScroll.js';

function App() {
    // custom hook to capture scroll position for styling
    const { scrollPosition } = useScroll();

    return (
        <div className='App'>
            <Navbar scrollPosition={scrollPosition} />
            <Intro scrollPosition={scrollPosition} />
            <About scrollPosition={scrollPosition} />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;

import "./App.css";
import Intro from "./components/Intro/Intro.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <div className="App">
            <h1>Mike</h1>
            <Intro />
            <Navbar />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

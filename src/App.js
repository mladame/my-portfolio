import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

// Render Portfolio components
function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Resume />
            <Footer />
        </div>
    );
}

export default App;

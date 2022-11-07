import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"

// Render Portfolio components
function App() {
    return (
        <div className="master-container">
            <div>
                <Header /> 
            </div>
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './styles/Navigation.css';

import AboutMe from "./pages/AboutMe";
import Project from './pages/Project';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Navigation() {
    return (

        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 nav-tabs"
            fill
        >
            <Tab eventKey="home" title="About Me">
                <AboutMe />
            </Tab>
            <Tab eventKey="profile" title="Projects">
                <Project />
            </Tab>
            <Tab eventKey="longer-tab" title="Contact Me">
                {/* <Contact /> */}
            </Tab>
            <Tab eventKey="contact" title="Resume">
                <Resume />
            </Tab>
        </Tabs>
    );
}

export default Navigation;
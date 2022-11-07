import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AboutMe from "./pages/AboutMe";
import Project from './pages/Project';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Navigation() {
    return (
        <Tabs
            defaultActiveKey="resume"
            id="fill-tab-example"
            className="mb-3 nav-tabs"
            fill>
            <Tab eventKey="home" title="About Me">
                <AboutMe />
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <Project />
            </Tab>
            <Tab eventKey="contact" title="Contact Me">
                <Contact />
            </Tab>
            <Tab eventKey="resume" title="Resume">
                <Resume />
            </Tab>
        </Tabs>
    );
}

export default Navigation;
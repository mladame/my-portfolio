import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

import AboutMe from "./pages/AboutMe";
import ProjectContainer from "./pages/ProjectContainer";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Navbar() {
    return (

        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="home" title="About Me">
                <AboutMe />
            </Tab>
            <Tab eventKey="profile" title="Projects">
                {/* <ProjectContainer /> */}
            </Tab>
            <Tab eventKey="longer-tab" title="Contact Me">
                <Contact />
            </Tab>
            <Tab eventKey="contact" title="Resume">
                {/* <Resume /> */}
            </Tab>
        </Tabs>
    );
}

export default Navbar;
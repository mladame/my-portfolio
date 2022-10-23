import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AboutMe from "./AboutMe";
import ProjectContainer from "./ProjectContainer";
import Contact from "./Contact";
import Resume from "./Resume";

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
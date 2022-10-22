import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function MyNavbar() {
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
            <Tab eventKey="profile" title="Portfolio">
                {/* <Portfolio /> */}
            </Tab>
            <Tab eventKey="longer-tab" title="Contact Me">
                {/* <Contact /> */}
            </Tab>
            <Tab eventKey="contact" title="Resume">
                {/* <Resume /> */}
            </Tab>
        </Tabs>
    );
}

export default MyNavbar;
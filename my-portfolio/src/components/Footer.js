import React from "react";
import Card from 'react-bootstrap/Card';
// import github from '../assets/images/GitHub-Mark-32px.png';
// import linkedin from "../assets/images/LI-In-Bug.png";

function Footer() {
    return (
        <Card className="footer-container">
            <Card.Body className="footer-body">
                <Card.Title className="footer-title">Made with React and ❤️</Card.Title>
                <Card.Text className="footer-item">
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* add links: github, linkedin, etc. */}
                {/* <Card.Img src={github} href="https://github.com/mladame" alt="Github Profile"/>
                <Card.Img src={linkedin} href="https://www.linkedin.com/in/martha-adame-00ba98252/" alt="LinkedIn Profile"/> */}
            </Card.Body>
        </Card>
    );
}

export default Footer;
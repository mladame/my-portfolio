import React from "react";
import Card from 'react-bootstrap/Card';
import github from '../assets/images/GitHub-Mark-32px.png';
import linkedin from "../assets/images/LI-In-Bug.png";

function Footer() {
    return (
        <Card className="footer-container">
            <Card.Body className="footer-body">
                <div className="footer-content">
                    <Card.Title className="footer-title">Made with React and ❤️</Card.Title>
                    <Card.Text className="footer-item">
                        Unsplash Background <a className="unsplash-link" href="https://unsplash.com/@bencium">Bence Csernak</a>
                    </Card.Text>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/mladame"><Card.Img className="footer-icon" src={github} alt="Github Profile" /></a>
                    <a href="https://www.linkedin.com/in/martha-adame-00ba98252/"><Card.Img className="footer-icon" src={linkedin} alt="LinkedIn Profile" /></a>
                </div>

            </Card.Body>
        </Card>
    );
}

export default Footer;
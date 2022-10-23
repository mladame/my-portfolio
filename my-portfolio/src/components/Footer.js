import React from "react";
import Card from 'react-bootstrap/Card';
import '../styles/Footer.css';

function Footer() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Made with React and ❤️</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* add links: github, linkedin, etc. */}
            </Card.Body>
        </Card>
    );
}

export default Footer;
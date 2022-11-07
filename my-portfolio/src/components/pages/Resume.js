import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Resume() {
    return (
        <div className="resume-main-container">
            <Card className="resume-card">
                <Card.Body className="resume-link">Download My Resume</Card.Body>
                <Button className="resume-download-btn" variant="outline-secondary">Download</Button>{' '}
            </Card>
            <h2 className="skills-title">My Skills</h2>
            <ListGroup variant="flush" className="listed-skills">
                <ListGroup.Item className="individual-skill">React</ListGroup.Item>
                <ListGroup.Item className="individual-skill">Javascript</ListGroup.Item>
                <ListGroup.Item className="individual-skill">CSS</ListGroup.Item>
                <ListGroup.Item className="individual-skill">HTML</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Resume;
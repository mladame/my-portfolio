import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Resume() {
    return (
        <div>
            <Card>
                <Card.Body>Download My Resume</Card.Body>
            </Card>
            <h2>Skills</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Resume;
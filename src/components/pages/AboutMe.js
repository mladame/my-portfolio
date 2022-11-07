import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioImage from "../../assets/images/IMG_PORTFOLIO.jpg";

function AboutMe() {

    return (
        <Container className="about-me-container">
            <h1 className="about-me-title">About Me</h1>
            <Row className="about-me-content">
                <Col className="about-me-img-container">
                    <img className="about-me-img" src={PortfolioImage} alt="Martha Adame" />
                </Col>
                <Col className="about-me-des-container my-auto">
                    <p className="about-me-description">
                    Detail-oriented and creative Full Stack Web Developer apply an ever-evolving 
                    technical skill set into creating functional and beautiful front-end, back-end, 
                    and full-stack apps. Experienced working with fellow full-stack app developers 
                    using languages such as Javascript, CSS, and HTML as well as back-end databases 
                    such as MySql2 and MongoDB. Graduated with a Bachelors in Psychology and Social 
                    Behavior, and a certificate in Full Stack Web Development.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
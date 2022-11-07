import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioImage from "../../assets/images/user-image.jpg";

function AboutMe() {

    return (
        <Container className="about-me-container">
            <h1 className="about-me-title">About Me</h1>
            <Row>
                <Col className="about-me-img-container">
                    <img className="about-me-img" src={PortfolioImage} alt="Martha Adame" />
                </Col>
                <Col className="about-me-des-container my-auto">
                    <p className="about-me-description">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                        voluptas nulla pariatur?
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo from "../pro.png";

function Projects() {
  return (
    <div className="CoralColor  pt-5">
      <Container className=" ">
        <Row className="">
          <Col className="Row d-flex justify-content-center">
            <h1>Keletas projektu</h1>
          </Col>
        </Row>
        <Row className="pt-5 ">
          <Col sm={12} md={4} lg={4} xl={4} className="p-1">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="p-1">
            <Card>
              <Card.Img variant="top" src={logo} className="yep" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="p-1">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

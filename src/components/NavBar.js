import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function NavBar() {
  return (
    <div className=" background-image  ">
      <Navbar expand="lg" className=" mb-4 py-4  ">
        <Container className="Row d-flex justify-content-center ">
          <Nav.Link>
            <text className="Navbar-text">Home</text>
          </Nav.Link>
          <Nav.Link>
            <text className="Navbar-text">About</text>
          </Nav.Link>
          <Nav.Link>
            <text className="Navbar-text">Projects</text>
          </Nav.Link>
          <Nav.Link>
            <text className="Navbar-text">Contact</text>
          </Nav.Link>
        </Container>
      </Navbar>
      <Container className="pt-4">
        <Row>
          <Col className="Row d-flex justify-content-center ">
            <h1 className="h1-up Name-border">Arūnas Martinaitis</h1>
          </Col>
        </Row>
        <Row>
          <Col className="Row d-flex justify-content-center">
            <h1 className="Name-border-1">Web Developer</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;

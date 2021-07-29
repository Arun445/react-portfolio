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
    <Navbar expand="lg" className=" mb-4 py-4 Navbar background-image">
      <Container>
        <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Link</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;

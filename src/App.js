import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SearchBox from "./components/SearchBox";
import {
  Row,
  Col,
  Card,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import logo from "./36659662.jpg";
function App() {
  return (
    <div>
      <Navbar expand="lg" className=" Navbar background-image ">
        <Container>
          <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Link</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

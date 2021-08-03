import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

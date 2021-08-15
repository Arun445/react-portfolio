import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBarCss from "./components/NavBarCss";
import About from "./components/About";
import ProjectsCss from "./components/ProjectsCss";
import HomePage from "./components/HomePage";
import ContactsCss from "./components/ContactsCss";
import FooterCss from "./components/FooterCss";
/*
<NavBar />
<Home />
<Projects />
<Contact />
<Footer />
*/

function App() {
  return (
    <div>
      <NavBarCss />
      <HomePage />
      <About />
      <ProjectsCss />
      <ContactsCss />
      <FooterCss />
    </div>
  );
}

export default App;

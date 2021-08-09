import { useRef, useEffect } from "react";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import { gsap } from "gsap";

function NavBar() {
  document.addEventListener("DOMContentLoaded", () => {
    let autohideToggled = document.querySelector(".autohide");

    if (autohideToggled) {
      let lastScrollTop = 0;
      let lastScrollTops = 0;
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        if (scrollTop === lastScrollTops) {
          autohideToggled.classList.remove("scrolled-up");
          autohideToggled.classList.add("scrolled-top");
        } else if (scrollTop < lastScrollTop) {
          autohideToggled.classList.remove("scrolled-down");
          autohideToggled.classList.remove("scrolled-top");
          autohideToggled.classList.add("scrolled-up");
        } else {
          autohideToggled.classList.remove("scrolled-up");
          autohideToggled.classList.remove("scrolled-top");
          autohideToggled.classList.add("scrolled-down");
        }

        lastScrollTop = scrollTop;
      });
    }
  });

  const nameRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    gsap.from(nameRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
    gsap.from(developerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 2,
    });
  });

  return (
    <div id="Home">
      <Navbar expand="lg" fixed="top" className=" autohide ">
        <Container className="Row d-flex justify-content-center " fluid>
          <Nav.Link href={"#Home"}>
            <h2 className="Navbar-text">Home</h2>
          </Nav.Link>
          <Nav.Link href="#About">
            <h2 className="Navbar-text">About</h2>
          </Nav.Link>
          <Nav.Link href="#Projects">
            <h2 className="Navbar-text">Projects</h2>
          </Nav.Link>
          <Nav.Link href="#Contacts">
            <h2 className="Navbar-text">Contact</h2>
          </Nav.Link>
        </Container>
      </Navbar>
      <div className=" background-image  ">
        <Container className="pt-10">
          <Row>
            <Col className="Row d-flex justify-content-center ">
              <h1 className="h1-up Name-border p-1 text-center" ref={nameRef}>
                Arūnas Martinaitis
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="Row d-flex justify-content-center">
              <h1 className="Name-border-1 p-1" ref={developerRef}>
                Web Developer
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;

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

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
  }, [headerRef]);

  return (
    <div id="Home">
      <Navbar expand="lg" fixed="top" className=" autohide ">
        <Container className="Row d-flex justify-content-center " fluid>
          <Nav.Link href={"#Home"}>
            <text className="Navbar-text">Home</text>
          </Nav.Link>
          <Nav.Link href="#About">
            <text className="Navbar-text">About</text>
          </Nav.Link>
          <Nav.Link href="#Projects">
            <text className="Navbar-text">Projects</text>
          </Nav.Link>
          <Nav.Link href="#Contacts">
            <text className="Navbar-text">Contact</text>
          </Nav.Link>
        </Container>
      </Navbar>
      <div className=" background-image  ">
        <Container className="pt-10" ref={headerRef}>
          <Row>
            <Col className="Row d-flex justify-content-center ">
              <h1 className="h1-up Name-border p-1 text-center">
                Arūnas Martinaitis
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="Row d-flex justify-content-center">
              <h1 className="Name-border-1 p-1">Web Developer</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;

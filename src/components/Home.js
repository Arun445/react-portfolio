import { useRef, useEffect, useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { gsap } from "gsap";
import logo from "../36659662.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      x: "-90%",
      opacity: 0,
      duration: 1,
      autoAlpha: 1,

      ease: "none",
      scrollTrigger: {
        id: `section-${1}`,
        trigger: headerRef.current,
        start: "top center+=200",
        toggleActions: "play none none reverse",
      },
    });
  }, [headerRef]);
  return (
    <Container className="mb-5 " id="About">
      <Row>
        <Col md={12}></Col>
      </Row>
      <Row className="">
        <Col className="Row d-flex justify-content-center ">
          <Card ref={headerRef} style={{ width: "18rem" }} border="white">
            <Card.Img variant="top" src={logo} />
          </Card>
        </Col>
        <Col className=" d-flex  align-items-center  check">
          <div className="mt-5 p-1 text-center">
            <strong>
              Labas, aš esu Arūnas Martinaitis ir esu{" "}
              <strong className="text-color-lblue">backend developeris</strong>.
              Savo projektuose pagrinde naudoju{" "}
              <strong className="text-color-lblue">Python-Django</strong>{" "}
              framework. Tačiau taip pat turiu patirties naudojant,{" "}
              <strong className="text-color-lblue">React-Redux </strong>{" "}
              frontende.
            </strong>
            <p className=" text-center card-bg mt-4 p-1">
              Python, Javascript, React, Django, Git,
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

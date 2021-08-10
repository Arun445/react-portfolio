import { useRef, useEffect } from "react";
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
    <Container className="p-5 " id="About">
      <Row className=" pb-4">
        <Col className="check-purple-light">
          <h1 className="check-lblue p-1">About</h1>
        </Col>
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
              Hello, my name is Arūnas Martinaitis and i am a{" "}
              <strong className="text-color-lblue">backend developer</strong>.
              In my projects i mainly use{" "}
              <strong className="text-color-lblue">Python-Django</strong>{" "}
              framework. Also i have experience working with ,{" "}
              <strong className="text-color-lblue">React-Redux </strong> on the
              frontend.
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

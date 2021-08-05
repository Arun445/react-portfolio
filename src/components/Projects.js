import { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import projects from "../projects.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const revealRefs = useRef([]);
  const currentRefs = (revealRefs.current = []);

  const addToRefs = (ref) => {
    if (ref && !currentRefs.includes(ref)) {
      currentRefs.push(ref);
    }
  };

  useEffect(() => {
    currentRefs.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 0,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: ref,
            start: "top center +=100",
            toggleActions: "play none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="CoralColor  pt-5 pb-5" id="Projects">
      <Container className=" ">
        <Row className="">
          <Col className="check-purple-light">
            <h1 className="check-lblue p-1">Projects</h1>
          </Col>
        </Row>
        {projects.map(({ title, subtitle, cardText, image }) => (
          <Row className="pt-5 " ref={addToRefs}>
            <Col
              xm={10}
              md={6}
              lg={12}
              xl={6}
              className="check-purple-r pt-5"
              key={title}
            >
              <Card
                style={{ width: "21rem" }}
                className="card-background"
                border="#00f7ff"
              >
                <Card.Body>
                  <Card.Title>
                    <p className="text-purpl"> {title}</p>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <p className="">{subtitle}</p>
                  </Card.Subtitle>
                  <Card.Text>{cardText}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xm={10} md={6} lg={12} xl={6} className="p-1 ">
              <Card className="">
                <Card.Img variant="top" src={image} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Projects;

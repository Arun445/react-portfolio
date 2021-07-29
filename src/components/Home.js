import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
function Home() {
  return (
    <Container className="pb-5">
      <Row>
        <Col md={12}></Col>
      </Row>
      <Row>
        <Col md={6} className="Row d-flex justify-content-center">
          <SearchBox />
        </Col>
        <Col md={6} className="Row d-flex justify-content-center">
          <p></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

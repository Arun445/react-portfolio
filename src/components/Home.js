import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import SearchBox from "./SearchBox";
import logo from "../36659662.jpg";

function Home() {
  return (
    <Container className="mb-5 ">
      <Row>
        <Col md={12}></Col>
      </Row>
      <Row className="">
        <Col className="Row d-flex justify-content-center ">
          <Card style={{ width: "18rem" }} border="white">
            <Card.Img variant="top" src={logo} />
          </Card>
        </Col>
        <Col className=" d-flex  align-items-center  check">
          <div className="mt-5 p-1 text-center  ">
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

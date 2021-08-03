import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Card,
  Table,
} from "react-bootstrap";
function Contact() {
  return (
    <div className="pt-4 pb-5">
      <Container>
        <Row className="check-purple  mb-5">
          <Col lg={4} className="">
            <h2 className="p-1 check-lblue">Contacts</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <h5 className=" p-1">Susisiekite su manim per cia</h5>
            <Table className="mt-3">
              <tbody>
                <tr>
                  <td className="p-4">
                    <strong>Email</strong>: arunas.martinaitis@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <strong>LinkedIn</strong>:{" "}
                    <a
                      href={
                        "https://linkedin.com/in/arunas-martinaitis-28005120a"
                      }
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin fa-lg"
                        style={{ color: "blue" }}
                      ></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <strong>GitHub</strong>:{" "}
                    <a href={"https://github.com/Arun445"} target="_blank">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={8}>
            <h5 className="p-1 ">Arba cia</h5>

            <Form>
              <Row>
                <Col lg={6} className="pb-2">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Name"
                      className="p-3"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-3"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Message"
                  className="p-3"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="p-3 ">
                Send Mail <i className="far fa-paper-plane"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

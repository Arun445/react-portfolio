import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Table,
  Spinner,
  Alert,
} from "react-bootstrap";
import emailjs from "emailjs-com";
function Contact() {
  const [spinner, setSpinner] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAlertMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [spinner]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);
    setAlertMessage("");
    emailjs
      .sendForm(
        "service_pf6hizm",
        "template_1y446kk",
        e.target,
        "user_4NabnShHpRsaramdYIGSg"
      )
      .then(
        (result) => {
          setAlertMessage("Laišką gavau, ačiū!");
          setAlertVariant("success");
          setSpinner(false);
        },
        (error) => {
          setAlertMessage(
            "Laiško negavau, problema yra sprendžiama. Susiekite su manimi directly, ačiū!"
          );
          setAlertVariant("danger");
          setSpinner(false);
        }
      );
    e.target.reset();
  };

  return (
    <div className="pt-4 pb-5">
      <Container id="Contacts">
        <Row className="check-purple  mb-5">
          <Col lg={4} className="">
            <h2 className="p-1 check-lblue">Contacts</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <h5 className=" p-1">Mano duomenys:</h5>
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
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-linkedin fa-lg"
                        style={{ color: "#2867B2" }}
                      ></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <strong>GitHub</strong>:{" "}
                    <a
                      href={"https://github.com/Arun445"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <strong>Resume</strong>:{" "}
                    <a
                      href={"https://github.com/Arun445"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="far fa-file fa-lg"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={8}>
            <h5 className="p-1 ">
              {spinner && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {alertMessage && (
                <Alert variant={alertVariant}>{alertMessage}</Alert>
              )}
            </h5>

            <Form onSubmit={sendEmail}>
              <Row>
                <Col lg={6} className="pb-2">
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Name"
                      className="p-3"
                      name="name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3 ">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-3"
                      name="email"
                      required
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
                  name="message"
                  required
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

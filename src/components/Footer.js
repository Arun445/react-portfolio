import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="pb-2">
                <h3>Aron</h3>
              </div>
              <div className="footer__social">
                <a
                  href={"https://github.com/Arun445"}
                  target="_blank"
                  className="footer__icon"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  href={"https://linkedin.com/in/arunas-martinaitis-28005120a"}
                  target="_blank"
                  className="footer__icon"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
              <p className="text-center">
                &#169; 2021 copyright all right reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

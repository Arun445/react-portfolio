import React from "react";

function ContactsCss() {
  return (
    <div>
      <section className="contacts-section">
        <div className="contacts-container">
          <h1>Contact me directly</h1>
          <ul>
            <li>
              <strong>Email</strong>: arunas.martinaitis2@gmail.com
            </li>
            <li>
              <strong>LinkedIn</strong>:{" "}
              <a
                href={"https://linkedin.com/in/arunas-martinaitis-28005120a"}
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-linkedin fa-lg"
                  style={{ color: "#2867B2" }}
                ></i>
              </a>
            </li>
            <li>
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
            </li>
            <li>
              <strong>Resume</strong>:{" "}
              <a
                href={"https://github.com/Arun445"}
                target="_blank"
                rel="noreferrer"
              >
                <i className="far fa-file fa-lg" style={{ color: "black" }}></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-section">
          <h1 className="">Or use this custom form</h1>

          <form className="contact-form ">
            <div className="contact-content">
              <label for="" className="contact-label">
                Name
              </label>
              <input type="text" className="contact-input" />
            </div>
            <div className="contact-content">
              <label for="" className="contact-label">
                Email
              </label>
              <input type="email" className="contact-input" />
            </div>
            <div className="contact-content">
              <label for="" className="contact-label">
                Message
              </label>
              <textarea cols="0" rows="7" className="contact-input"></textarea>
            </div>
            <div className="button-flex">
              <a href="#" class="button">
                Send Message
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactsCss;

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function ContactsCss() {
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
          setAlertMessage("Message was delivered successfully, thanks!");
          setAlertVariant("success");
          setSpinner(false);
        },
        (error) => {
          setAlertMessage(
            "Message was not received, the problem is being solved. Please contact me directly"
          );
          setAlertVariant("danger");
          setSpinner(false);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section className="contacts-section" id="Contacts">
        <div className="contacts-container">
          <h1>Contact me directly</h1>
          <ul>
            <li>
              <strong>Email : </strong> <p>arunas.martinaitis2@gmail.com</p>
            </li>
            <li>
              <strong>LinkedIn : </strong>{" "}
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
              <strong>GitHub : </strong>{" "}
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
              <strong>Resume : </strong>{" "}
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

          {spinner && <div className="loader"></div>}
          {alertMessage && <p className={alertVariant}>{alertMessage}</p>}
          <form className="contact-form " onSubmit={sendEmail}>
            <div className="contact-content">
              <label className="contact-label">Name</label>
              <input
                type="text"
                className="contact-input"
                name="name"
                required
              />
            </div>
            <div className="contact-content">
              <label className="contact-label">Email</label>
              <input
                type="email"
                className="contact-input"
                name="email"
                required
              />
            </div>
            <div className="contact-content">
              <label className="contact-label">Message</label>
              <textarea
                cols="0"
                rows="7"
                className="contact-input"
                name="message"
              ></textarea>
            </div>
            <div className="button-flex">
              <button type="submit" className="button">
                <p>Send Message</p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactsCss;

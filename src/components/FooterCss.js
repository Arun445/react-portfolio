import React from "react";

function FooterCss() {
  return (
    <div>
      <footer className="footer">
        <h3 className="footer__title">Aron</h3>
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
            href={
              "https://www.linkedin.com/in/ar%C5%ABnas-martinaitis-28005120a/"
            }
            target="_blank"
            className="footer__icon"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
        <p className="text-center">&#169; 2021 copyright all right reserved</p>
      </footer>
    </div>
  );
}

export default FooterCss;

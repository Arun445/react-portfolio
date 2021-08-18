import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function About() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      x: "-90%",
      opacity: 0,
      duration: 1,
      autoAlpha: 1,
      ease: "power1",

      scrollTrigger: {
        id: `section-${1}`,
        trigger: headerRef.current,
        start: "top center+=200",
        toggleActions: "play none none reverse",
      },
    });
  }, [headerRef]);
  return (
    <div id="About">
      <section className="featured">
        <div className="left">
          <div ref={headerRef} className="inner">
            <img className="about-img" src={"/images/1.jpg"} alt="Arunas"></img>
          </div>
        </div>
        <div className="about-container">
          <p className="about-description">
            Hi! My name is Arūnas Martinaitis and I am a backend developer. My
            projects are mostly written in Python and Django framework. Moreover
            I have been working with React-Redux. Learning the ways of frontend
            and UI design. Always trying to find better and more efficient ways
            to implement my coding and developing skills.
          </p>
          <div className="about-stack">
            <div className="icon-container">
              <i className="fab fa-python one"></i>{" "}
              <i className="fab fa-js-square two"></i>
              <img className="four" src={"/images/Group 13.svg"} alt="DJ" />
              <i className="fab fa-react three"></i>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

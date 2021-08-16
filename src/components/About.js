import { useRef, useEffect } from "react";
import logo2 from "../36659662.jpg";
import logo3 from "../Group 13.svg";

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
    <div>
      <section className="featured">
        <div className="left">
          <div ref={headerRef} className="inner">
            <img className="about-img" src={logo2}></img>
          </div>
        </div>
        <div className="about-container">
          <p className="about-description">
            Hi, my name is Arūnas Martinaitis and i am a backend developer. In
            my projects I mainly use Python-Django framework. Also i have
            experience working with React-Redux.
          </p>
          <div className="about-stack">
            <div className="icon-container">
              <i className="fab fa-python one"></i>{" "}
              <i className="fab fa-js-square two"></i>
              <img className="four" src={logo3} />
              <i className="fab fa-react three"></i>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

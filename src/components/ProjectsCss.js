import { useRef, useEffect, useState } from "react";
import logo2 from "../todoapp.png";

import projects from "../projects.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectsCss() {
  const [onHover, setOnHover] = useState("");
  const [h, setH] = useState(0);

  const revealRefs = useRef([]);
  const currentRefs = (revealRefs.current = []);

  const addToRefs = (ref) => {
    if (ref && !currentRefs.includes(ref)) {
      currentRefs.push(ref);
    }
  };

  useEffect(() => {
    if (h === 0) {
      setH(1);
      currentRefs.forEach((ref, index) => {
        gsap.fromTo(
          ref,
          { autoAlpha: 0 },
          {
            duration: 1,
            autoAlpha: 1,
            ease: 0,
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: ref,
              start: "top center +=100",
              toggleActions: "play none none",
            },
          }
        );
      });
    }
  });

  const changeImageOnHover = (title) => {
    setOnHover(title);
    console.log("a");
  };
  return (
    <div id="Projects">
      <section className="projects">
        {projects.map(({ title, subtitle, cardText, image }) => (
          <div className="projects-container" ref={addToRefs} key={title}>
            <div className="projects-inner">
              <p className="subtitle">{title}</p>
              <p className="featured-title">{subtitle}</p>
              <p className="featured-desc">{cardText}</p>
            </div>

            <div className="image-container">
              <div
                className="image-content"
                onMouseOver={() => changeImageOnHover(title)}
                onMouseOut={(e) => console.log(e.target)}
              >
                {onHover === title ? (
                  <div>
                    <img src={image} className="onHoverBlur" />
                    <a
                      href={"https://github.com/Arun445"}
                      target="_blank"
                      rel="noreferrer"
                      className="first-txt"
                      onMouseOver={() => changeImageOnHover(title)}
                    >
                      <i
                        className="fab fa-github fa-2x"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href={"https://github.com/Arun445"}
                      target="_blank"
                      rel="noreferrer"
                      className="second-txt"
                    >
                      <i
                        className="fas fa-globe-europe fa-2x"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                ) : (
                  <img src={image} />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsCss;

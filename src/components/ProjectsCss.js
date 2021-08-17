import { useRef, useEffect, useState } from "react";

import projects from "../projects.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectsCss() {
  const [onHover, setOnHover] = useState("");
  const [times, setTimes] = useState(0);

  const imageRef = useRef(null);

  const revealRefs = useRef([]);
  const currentRefs = (revealRefs.current = []);

  const addToRefs = (ref) => {
    if (ref && !currentRefs.includes(ref)) {
      currentRefs.push(ref);
    }
  };
  useEffect(() => {
    if (onHover) {
      gsap.fromTo(
        imageRef.current,
        { filter: "blur(0px) brightness(1)" },
        {
          duration: 0.3,
          filter: "blur(3px) brightness(0.5)",
          delay: 0.1,
        }
      );
    }

    if (times === 0) {
      setTimes(1);
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
  }, [onHover]);

  const changeImageOnHover = (id = "") => {
    if (id) {
      setOnHover(id);
    } else {
      setOnHover("");
    }
  };
  return (
    <div id="Projects">
      <section
        className="projects"
        onMouseOver={(e) => {
          changeImageOnHover(e.target.id);
        }}
      >
        {projects.map(
          ({ id, title, subtitle, cardText, image, website, github }) => (
            <div className="projects-container" ref={addToRefs} key={title}>
              <div className="projects-inner">
                <p className="subtitle">{title}</p>
                <a href={website}>
                  <p className="featured-title">{subtitle}</p>
                </a>
                <p className="featured-desc">{cardText}</p>
              </div>

              <div className="image-container">
                <div className="image-content">
                  {Number(onHover) === id ? (
                    <div>
                      <img src={image} className="" id={id} ref={imageRef} />
                      <a
                        id={id}
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="first-txt"
                      >
                        <i
                          id={id}
                          className="fab fa-github fa-2x"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                      <a
                        id={id}
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                        className="second-txt"
                      >
                        <i
                          id={id}
                          className="fas fa-globe-europe fa-2x"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  ) : (
                    <img src={image} id={id} />
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default ProjectsCss;

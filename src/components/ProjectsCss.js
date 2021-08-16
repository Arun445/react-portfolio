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
    console.log("ayy");
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

            <a href="#">
              <img
                onMouseOver={() => changeImageOnHover(title)}
                src={image}
              ></img>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsCss;

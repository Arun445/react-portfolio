import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function HomePage() {
  const webRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(webRef.current, {
      y: "90%",
      opacity: 0,
      duration: 1,
      autoAlpha: 1,

      ease: "power1",
    });
    gsap.from(nameRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1.3,
    });
    gsap.from(imageRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
  });

  return (
    <div className="hero">
      <div className="content">
        <h1 ref={webRef}>Web Development Enthusiast</h1>
        <div className="meet">
          <p ref={nameRef}>Meet Arunas Martinaitis</p>
        </div>
      </div>
      <div className="homepage-img">
        <img src={"/images/loptop.png"} ref={imageRef}></img>
      </div>
    </div>
  );
}

export default HomePage;

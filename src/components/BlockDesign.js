import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function BlockDesign() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: "-90%",
      opacity: 0,
      duration: 2,
      autoAlpha: 1,

      ease: "power2",
    });
  }, [headerRef]);
  return (
    <div className="hero-try">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="282"
        height="1019"
        viewBox="0 0 282 1019"
        className="svg-block"
      >
        <rect
          id="Rectangle_15"
          data-name="Rectangle 15"
          width="200"
          height="879"
          rx="10"
          fill="#568f9f"
          ref={headerRef}
        />
      </svg>
    </div>
  );
}

export default BlockDesign;

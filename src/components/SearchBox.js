import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useSpring, animated as a } from "react-spring";
import logo from "../36659662.jpg";
function SearchBox() {
  const [searchStatus, displaySearch] = useState(false);

  const selecting = () => {
    displaySearch((search) => !search);
  };

  useEffect(() => {}, [searchStatus]);

  const springFromLeftToRight = useSpring({
    to: !searchStatus ? [{ opacity: 1, x: 100 }] : { opacity: 0, x: -250 },

    from: !searchStatus ? { opacity: 0, x: -250 } : { opacity: 1, x: 0 },
  });

  return (
    <a.div style={springFromLeftToRight}>
      {" "}
      <Image src={logo} height={300} />
    </a.div>
  );
}

export default SearchBox;

import React from "react";
import logo from "../loptop.png";
function HomePage() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Web Development Enthusiast</h1>
        <div className="meet">
          <p>Meet Arunas Martinaitis</p>
        </div>
      </div>
      <div className="homepage-img">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default HomePage;

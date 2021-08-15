import React from "react";
import logo2 from "../todoapp.png";
function ProjectsCss() {
  return (
    <div>
      <section className="projects">
        <div className="projects-container">
          <div className="projects-inner">
            <p className="subtitle">TODO APP</p>
            <p className="featured-title">to-do-app-heroku.com</p>
            <p className="featured-desc">
              Nulla ullamco sint cillum labore aliqua exercitation magna
              consectetur ut.
            </p>
          </div>

          <a href="#">
            <img src={logo2}></img>
          </a>
        </div>
        <div className="projects-container">
          <div className="projects-inner">
            <p className="subtitle">todo app</p>
            <p className="featured-title">to-do-app-heroku.com</p>
            <p className="featured-desc">
              Lorem mollit sunt commodo anim duis culpa proident voluptate magna
              mollit.
            </p>
          </div>

          <a href="#">
            <img src={logo2}></img>
          </a>
        </div>
        <div className="projects-container">
          <div className="projects-inner">
            <p className="subtitle">todo app</p>
            <p className="featured-title">to-do-app-heroku.com</p>
            <p className="featured-desc">
              Qui culpa consectetur non sit excepteur sit aute deserunt commodo
              reprehenderit.
            </p>
          </div>

          <a href="#">
            <img src={logo2}></img>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectsCss;

import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="content-container">
      <h1 className="education-title font-blue">Projects</h1>
      {projects.map(p => {
        return (
          <div className="project-container">
            <a className="project font-blue" href={p.url}>
              {p.title}
            </a>
            <h3>{p.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

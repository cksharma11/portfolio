import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <a className="project font-blue" href={project.url}>
        {project.title}
      </a>
      <h3>{project.description}</h3>
    </div>
  );
};

export default Project;

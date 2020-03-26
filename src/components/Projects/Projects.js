import React from "react";
import labels from "../../labels/labels";
import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <div className="content-container">
      <h1 className="education-title font-blue">{labels.projects}</h1>
      {projects.map(p => (
        <Project project={p} />
      ))}
    </div>
  );
};

export default Projects;

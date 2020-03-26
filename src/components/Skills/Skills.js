import React from "react";
import labels from "../../labels/labels";

const Skills = ({ skills }) => {
  return (
    <div className="content-container">
      <h1 className="font-blue">{labels.skills}</h1>
      {skills.map(s => {
        return <h2 className="skill font-blue">{s}</h2>;
      })}
    </div>
  );
};

export default Skills;

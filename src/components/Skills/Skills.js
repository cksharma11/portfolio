import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="content-container">
      <h1 className="font-blue">Skills</h1>
      {skills.map(s => {
        return <h2 className="skill font-blue">{s}</h2>;
      })}
    </div>
  );
};

export default Skills;

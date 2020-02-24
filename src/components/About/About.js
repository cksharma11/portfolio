import React from "react";

const About = ({ about }) => {
  return (
    <div className="about">
      <h1 className="font-blue">About Me</h1>
      <h4>Hey There,</h4>
      <h2 className="font-blue">I'm {about.name}</h2>
      <h3 className="font-blue">{about.profession}</h3>
      <p>{about.description}</p>
    </div>
  );
};

export default About;

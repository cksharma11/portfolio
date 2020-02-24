import React from "react";

const About = ({ about }) => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <h4>Hey There,</h4>
      <h2>I'm {about.name}</h2>
      <h3>{about.profession}</h3>
      <p>{about.description}</p>
    </div>
  );
};

export default About;

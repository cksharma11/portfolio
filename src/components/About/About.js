import React from "react";
import labels from "../../labels/labels";

const About = ({ about }) => {
  return (
    <div className="about">
      <h1 className="font-blue">{labels.aboutMe}</h1>
      <h4>{labels.heyThere}</h4>
      <h2 className="font-blue">{`${labels.iam} ${about.name}`}</h2>
      <h3 className="font-blue">{about.profession}</h3>
      <p>{about.description}</p>
    </div>
  );
};

export default About;

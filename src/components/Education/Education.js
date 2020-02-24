import React from "react";
import EducationPlate from "./EducationPlate/EducationPlate";

const Education = ({ educations }) => {
  return (
    <div className="content-container ">
      <h1 className="education-title font-blue">My Education</h1>
      {educations.map(e => {
        return <EducationPlate e={e} />;
      })}
    </div>
  );
};

export default Education;

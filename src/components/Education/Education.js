import React from "react";
import EducationPlate from "./EducationPlate/EducationPlate";
import labels from "../../labels/labels";

const Education = ({ educations }) => {
  return (
    <div className="content-container ">
      <h1 className="education-title font-blue">{labels.myEducation}</h1>
      {educations.map(e => {
        return <EducationPlate e={e} />;
      })}
    </div>
  );
};

export default Education;

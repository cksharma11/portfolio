import React from "react";
import EducationPlate from "./EducationPlate/EducationPlate";
import labels from "../../labels/labels";

const Education = ({ educations }) => {
  return (
    <div className='education-container '>
      <h1 className='education-label'>{labels.myEducation}</h1>
      <div className="box-wrapper">
        {educations.map((e) => {
          return <EducationPlate e={e} />;
        })}
      </div>
    </div>
  );
};

export default Education;

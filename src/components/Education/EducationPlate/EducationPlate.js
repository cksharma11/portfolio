import React from "react";

const EducationPlate = ({ e }) => {
  return (
    <div className="education">
      <h2>{e.title}</h2>
      <h3>
        {e.startYear} - {e.endYear}
      </h3>
      <h5>{e.place}</h5>
    </div>
  );
};

export default EducationPlate;

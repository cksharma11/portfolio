import React from "react";

const EducationPlate = ({ e }) => {
  return (
    <div className="education">
      <h2 className="font-blue">{e.title}</h2>
      <h3>
        {e.startYear} - {e.endYear}
      </h3>
      <h5 className="font-blue">{e.place}</h5>
    </div>
  );
};

export default EducationPlate;

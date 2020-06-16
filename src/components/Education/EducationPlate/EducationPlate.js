import React from 'react';

const EducationPlate = ({ e }) => {
  return (
    <div className='education'>
      <h2 className='education-title'>{e.title}</h2>
      <div className="dash"></div>
      <h5 className='place'>{e.place}</h5>
      <p className='year'>
        {e.startYear} - {e.endYear}
      </p>
    </div>
  );
};

export default EducationPlate;

import React from 'react';
import labels from '../../labels/labels';

const Skills = ({ skills }) => {
  return (
    <div className='education-container'>
      <h1 className='education-label'>{labels.skills}</h1>
      <div className='box-wrapper'>
        {skills.map((s) => {
          return (
            <div>
              <h2 className='skill'>{s.name}</h2>
              <div className='skills-content-bar'>
                <div
                  class='skills-content-bar-value'
                  style={{ width: `${s.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

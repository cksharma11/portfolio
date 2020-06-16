import React from 'react';
import labels from '../../labels/labels';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import educations from '../../resources/educations/educations';
import skills from '../../resources/skills/skills';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const About = ({ about }) => {
  return (
    <div className='content-container'>
      <HeaderTitle title={labels.aboutMe} />
      <p className='profession'>{about.description}</p>
      <div className='about-wrapper'>
        <Education educations={educations} />
        <Skills skills={skills} />
      </div>
    </div>
  );
};

export default About;

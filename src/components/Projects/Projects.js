import React from 'react';
import labels from '../../labels/labels';
import Project from './Project/Project';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const Projects = ({ projects }) => {
  return (
    <div className='content-container'>
      <HeaderTitle title={labels.projects} />
      <div className="showcase">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

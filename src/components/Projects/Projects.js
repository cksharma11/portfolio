import React from 'react';
import labels from '../../labels/labels';
import Project from './Project/Project';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const Projects = ({ projects }) => {
  return (
    <div className='content-container'>
      <HeaderTitle title={labels.projects} />
      <div className="project-list">
        <p className="list-item active">All</p>
        <p className="list-item">React</p>
        <p className="list-item">JavaScript</p>
        <p className="list-item">ClojureScript</p>
      </div>
      <div className="showcase">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

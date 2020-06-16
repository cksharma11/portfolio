import React from 'react';

const Project = ({ project }) => {
  return (
    <div className='project-container'>
      <img
        rel='preload'
        src={`${process.env.PUBLIC_URL}/static/${project.image}.png`}
        alt='project-snapshot'
        height='400px'
        width='500px'
      />
      <div class='projects-content-showcase-btns'>
        <a
          href={project.url}
          class='btn projects-content-showcase-btns-preview'
          target='_blank'
          rel='noopener noreferrer'
        >
          preview
        </a>
        <a
          href={project.github}
          class='btn projects-content-showcase-btns-code'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
      </div>
    </div>
  );
};

export default Project;

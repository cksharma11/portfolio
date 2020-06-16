import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import projects from '../../resources/projects/projects';
import About from '../About/About';
import about from '../../resources/about/about';
import labels from '../../labels/labels';
import Contact from '../Contact/Contact';
import profileLinks from '../../resources/profileLinks';

const getHeadings = (props) => {
  return [
    {
      title: labels.profile,
      content: () => <Profile name={about.name} {...props} />,
    },
    { title: labels.about, content: () => <About about={about} /> },
    { title: labels.projects, content: () => <Projects projects={projects} /> },
    {
      title: labels.contact,
      content: () => <Contact profileLinks={profileLinks} />,
    },
  ];
};

const Home = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const headings = getHeadings({ setContentIndex });

  return (
    <div className='container'>
      <div className='navbar'>
        <Navbar
          headings={headings}
          onClick={setContentIndex}
          selectedNav={contentIndex}
        />
      </div>
      <div className='content'>
        <Content content={headings[contentIndex].content} />
      </div>
    </div>
  );
};

export default Home;

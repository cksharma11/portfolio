import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
// import Education from "../Education/Education";
import Profile from "../Profile/Profile";
// import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
// import educations from "../../resources/educations/educations";
// import skills from "../../resources/skills/skills";
import projects from "../../resources/projects/projects";
import About from "../About/About";
import about from "../../resources/about/about";
import labels from "../../labels/labels";

const headings = [
  {
    title: labels.profile,
    content: () => <Profile name={about.name} profession={about.profession} />
  },
  { title: labels.about, content: () => <About about={about} /> },
  // {
  //   title: labels.education,
  //   content: () => <Education educations={educations} />
  // },
  // { title: labels.skills, content: () => <Skills skills={skills} /> },
  { title: labels.projects, content: () => <Projects projects={projects} /> }
];

const Home = () => {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div className="container">
      <div className="navbar">
        <Navbar
          headings={headings}
          onClick={setContentIndex}
          selectedNav={contentIndex}
        />
      </div>
      <div className="content">
        <Content content={headings[contentIndex].content} />
      </div>
    </div>
  );
};

export default Home;

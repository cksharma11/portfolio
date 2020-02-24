import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Education from "../Education/Education";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import educations from "../../resources/educations/educations";
import skills from "../../resources/skills/skills";
import projects from "../../resources/projects/projects";
import About from "../About/About";
import about from "../../resources/about/about";

const headings = [
  {
    title: "Profile",
    content: () => (
      <Profile name="Chandan Kumar" profession="Application Developer" />
    )
  },
  { title: "About", content: () => <About about={about} /> },
  { title: "Education", content: () => <Education educations={educations} /> },
  { title: "Skills", content: () => <Skills skills={skills} /> },
  { title: "Projects", content: () => <Projects projects={projects} /> }
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

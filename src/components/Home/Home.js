import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Education from "../Education/Education";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

const headings = [
  { title: "Profile", content: () => <Profile /> },
  { title: "Education", content: () => <Education /> },
  { title: "Skills", content: () => <Skills /> },
  { title: "Projects", content: () => <Projects /> }
];

const Home = () => {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div className="container">
      <div className="navbar">
        <Navbar headings={headings} onClick={setContentIndex} />
      </div>
      <div className="content">
        <Content content={headings[contentIndex].content} />
      </div>
    </div>
  );
};

export default Home;

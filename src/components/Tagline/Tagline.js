import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Tagline = ({ name, profession, speed, eraseDelay }) => {
  return (
    <ReactTypingEffect
      className="typingeffect name font-blue"
      text={[`I am ${name}`, `I am an ${profession}`]}
      speed={speed}
      eraseDelay={eraseDelay}
    />
  );
};

export default Tagline;

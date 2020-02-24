import React from "react";

const Icon = ({ src, size, href }) => {
  return (
    <a href={href} className="social-icon">
      <img
        className="icon"
        src={src}
        alt="profile"
        height={size}
        width={size}
      ></img>
    </a>
  );
};

export default Icon;

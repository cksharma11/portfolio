import React from "react";

const Icon = ({ src, size, href, circle }) => {
  return (
    <a href={href} className="social-icon">
      <img
        className={`icon ${circle ? "circle" : ""}`}
        src={src}
        alt="profile"
        height={size}
        width={size}
      ></img>
    </a>
  );
};

export default Icon;

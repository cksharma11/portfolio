import React from "react";

const Navbar = ({ headings, onClick, selectedNav }) => {
  return (
    <div className="headings">
      {headings.map((h, i) => (
        <div
        key={h}
        onClick={onClick.bind(null, i)}
        className={`${i === selectedNav ? "selected-nav heading" : "heading"}`}
        >
          {h.title}
        </div>
      ))}
    </div>
  );
};

export default Navbar;

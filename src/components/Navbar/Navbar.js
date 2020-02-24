import React from "react";

const Navbar = ({ headings, onClick }) => {
  return (
    <div className="headings">
      {headings.map((h, i) => (
        <div key={h} onClick={onClick.bind(null, i)} className="heading">
          {h.title}
        </div>
      ))}
    </div>
  );
};

export default Navbar;

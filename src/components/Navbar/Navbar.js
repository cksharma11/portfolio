import React from 'react';

const Navbar = ({ headings, onClick, selectedNav }) => {
  return (
    <div className='nav-container'>
      <h2 className='brand'>CK</h2>
      <div className='headings'>
        {headings.map((h, i) => (
          <div
            key={h}
            onClick={onClick.bind(null, i)}
            className={`${
              i === selectedNav ? 'selected-nav heading' : 'heading animated'
            }`}
          >
            {h.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

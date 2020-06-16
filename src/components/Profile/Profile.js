import React from 'react';

const Profile = ({ name, setContentIndex }) => {
  return (
    <div className='content-container profile'>
      <h2 className='profile-headline'>{`Hi, I'm ${name}`}</h2>
      <h1 className='profile-job'>I'm an Application Developer</h1>
      <p className='profile-desc'>
        Who love to work with new techs and designs.
      </p>
      <div className='profile-buttons-container'>
        <button
          className='profile-buttons'
          onClick={setContentIndex.bind(null, 2)}
        >
          Projects
        </button>
        <button
          className='profile-buttons'
          onClick={setContentIndex.bind(null, 3)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Profile;

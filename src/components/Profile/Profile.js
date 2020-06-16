import React from 'react';

const Profile = ({ name, profession }) => {
  return (
    <div className='content-container profile'>
      <h2 className='profile-headline'>{`Hi, I'm ${name}`}</h2>
      <h1 className='profile-job'>I'm an Application Developer</h1>
      <p className='profile-desc'>
        Who build things for the web. Specialize in web contents.
      </p>
      <div className='profile-buttons-container'>
        <button className='profile-buttons'>Projects</button>
        <button className='profile-buttons'>Contact</button>
      </div>
    </div>
  );
};

export default Profile;

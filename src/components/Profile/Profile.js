import React from 'react';
import about from '../../resources/about/about';
import labels from '../../labels/labels';

const Profile = ({ name, setContentIndex }) => {
  return (
    <div className='content-container profile'>
      <h2 className='profile-headline'>{`Hi, I'm ${name}`}</h2>
      <h1 className='profile-job'>{about.professionDesc}</h1>
      <p className='profile-desc'>{about.shortDesc}</p>
      <div className='profile-buttons-container'>
        <button
          className='profile-buttons'
          onClick={setContentIndex.bind(null, 2)}
        >
          {labels.projects}
        </button>
        <button
          className='profile-buttons'
          onClick={setContentIndex.bind(null, 3)}
        >
          {labels.contact}
        </button>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import GithubIcon from '../../Icons/GithubIcon/GithubIcon';
import LinkedInIcon from '../../Icons/LinkedInIcon/LinkedInIcon';
import urls from '../../resources/profileLinks';
import InstagramIcon from '../../Icons/InstagramIcon/InstagramIcon';
import TwitterIcon from '../../Icons/TwitterIcon/TwitterIcon';

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
      <div className='social-icon-wrapper'>
        <GithubIcon text={urls.github_url} />
        <LinkedInIcon text={urls.linkedin_url} />
        <TwitterIcon text={urls.twitter_url} />
        <InstagramIcon text={urls.instagram_url} />
      </div>
    </div>
  );
};

export default Navbar;

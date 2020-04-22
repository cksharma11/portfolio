import React from 'react';
import urls from '../../resources/profileLinks';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = ({ size }) => {
  return (
    <div className='social-icons'>
      <SocialIcon url={urls.github_url} />
      <SocialIcon url={urls.medium_url} />
      <SocialIcon url={urls.linkedin_url} />
      <SocialIcon url={urls.twitter_url} />
      <SocialIcon url={urls.instagram_url} />
      <SocialIcon url={urls.facebook_url} />
    </div>
  );
};

export default SocialLinks;

import React from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import EmailSvg from '../../Icons/EmailIcon/EmailIcon';
import LocationIcon from '../../Icons/LocationIcon/Icons/LocationIcon';
import GithubIcon from '../../Icons/GithubIcon/GithubIcon';
import LinkedInIcon from '../../Icons/LinkedInIcon/LinkedInIcon';
import TwitterIcon from '../../Icons/TwitterIcon/TwitterIcon';
import InstagramIcon from '../../Icons/InstagramIcon/InstagramIcon';

const Contact = ({ profileLinks }) => {
  const IconWrapper = ({ Icon, text }) => {
    return (
      <div className='contact-line'>
        <Icon size='medium' />
        <p className='education-title'>{text}</p>
      </div>
    );
  };

  return (
    <div className='content-container'>
      <HeaderTitle title='Contact Me' />
      <div className='contact-wrapper'>
        <IconWrapper Icon={LocationIcon} text={profileLinks.location} />
        <IconWrapper Icon={EmailSvg} text={profileLinks.email} />
        <IconWrapper Icon={GithubIcon} text={profileLinks.github_url} />
        <IconWrapper Icon={LinkedInIcon} text={profileLinks.linkedin_url} />
        <IconWrapper Icon={TwitterIcon} text={profileLinks.twitter_url} />
        <IconWrapper Icon={InstagramIcon} text={profileLinks.instagram_url} />
      </div>
    </div>
  );
};

export default Contact;

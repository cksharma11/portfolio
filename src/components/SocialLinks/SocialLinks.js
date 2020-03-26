import React from "react";
import Icon from "../Icon/Icon";
import urls from "../../resources/profileLinks";

const SocialLinks = ({ size }) => {
  return (
    <div className="social-icons">
      <Icon src={urls.facebook_logo} size={size} href={urls.facebook_url} />
      <Icon src={urls.instagram_logo} size={size} href={urls.instagram_url} />
      <Icon src={urls.github_logo} size={size} href={urls.github_url} />
      <Icon src={urls.linkedin_logo} size={size} href={urls.linkedin_url} />
      <Icon src={urls.medium_logo} size={size} href={urls.linkedin_url} />
    </div>
  );
};

export default SocialLinks;

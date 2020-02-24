import React from "react";
import Icon from "../Icon/Icon";
import urls from "../../resources/urls";
import ReactTypingEffect from "react-typing-effect";

const Profile = () => {
  return (
    <div className="content-container profile">
      <Icon src={urls.profile_pic} size="150" circle={true} />
      <ReactTypingEffect
        className="typingeffect name font-blue"
        text={["I am Chandan Kumar", "I am a Application Developer"]}
        speed={100}
        eraseDelay={700}
      />

      <div className="social-icons">
        <Icon src={urls.facebook_logo} size="40" href={urls.facebook_url} />
        <Icon src={urls.instagram_logo} size="40" href={urls.instagram_url} />
        <Icon src={urls.github_logo} size="40" href={urls.github_url} />
        <Icon src={urls.linkedin_logo} size="40" href={urls.linkedin_url} />
        <Icon src={urls.medium_logo} size="40" href={urls.linkedin_url} />
      </div>
    </div>
  );
};

export default Profile;

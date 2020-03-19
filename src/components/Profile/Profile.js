import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import ProfilePic from "../ProfilePic/ProfilePic";
import Tagline from "../Tagline/Tagline";
import config from "../../config/config";

const Profile = ({ name, profession }) => {
  return (
    <div className="content-container profile">
      <ProfilePic
        circle={config.CIRCLE_PROFILE_PIC}
        size={config.PROFILE_PIC_SIZE}
      />
      <Tagline
        name={name}
        profession={profession}
        speed={config.TAGLINE_SPEED}
        eraseDelay={config.TAGLINE_ERASEDELAY}
      />
      <SocialLinks size={config.SOCIAL_ICON_SIZE} />
    </div>
  );
};

export default Profile;

import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import ProfilePic from "../ProfilePic/ProfilePic";
import Tagline from "../Tagline/Tagline";

const Profile = ({ name, profession }) => {
  return (
    <div className="content-container profile">
      <ProfilePic circle={true} />
      <Tagline
        name={name}
        profession={profession}
        speed={100}
        eraseDelay={700}
      />
      <SocialLinks />
    </div>
  );
};

export default Profile;

import React from "react";
import Icon from "../Icon/Icon";
import urls from "../../resources/urls";

const ProfilePic = () => {
  return <Icon src={urls.profile_pic} size="150" circle={true} />;
};

export default ProfilePic;

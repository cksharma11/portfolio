import React from "react";
import Icon from "../Icon/Icon";
import urls from "../../resources/urls";

const ProfilePic = ({ circle, size }) => {
  return <Icon src={urls.profile_pic} size={size} circle={circle} />;
};

export default ProfilePic;

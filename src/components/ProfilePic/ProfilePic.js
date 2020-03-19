import React from "react";
import Icon from "../Icon/Icon";
import urls from "../../resources/urls";

const ProfilePic = ({ circle }) => {
  return <Icon src={urls.profile_pic} size="150" circle={circle} />;
};

export default ProfilePic;

import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { SetLogout } from "../../Reducers/AuthenticationReducer";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const Logout = () => {
    Cookies.remove("login");
    dispatch(SetLogout());
  };
  return <Button onClick={Logout}>Logout</Button>;
};

export default Profile;

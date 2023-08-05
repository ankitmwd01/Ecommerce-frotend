import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { SetLogout } from "../../Reducers/AuthenticationReducer";
import { useDispatch } from "react-redux";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const Logout = () => {
    Cookies.remove("login");
    dispatch(SetLogout());
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      className="ProfileAll"
      minHeight={"60vh"}
    >
      <Box className="box2">
        <Text className="text1">Hey Ankit !</Text>
      </Box>
      <Box className="box2">
        <Button onClick={() => Navigate("/profile/order")}>Orders</Button>
      </Box>
      <Box className="box2">
        <Button>Become A Seller</Button>
      </Box>
      <Box className="box2">
        <Button>Edit Profile</Button>
      </Box>
      <Box className="box2">
        <Button>Contact Us</Button>
      </Box>
      <Box className="box2">
        <Button onClick={Logout}>Logout</Button>
      </Box>
    </Box>
  );
};

export default Profile;

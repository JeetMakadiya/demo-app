import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../Components/UI/Button";
import Logo from "../Images/Logo";

const RootLayout = () => {
  return (
    <>
      <div
        className="h-14 text-white flex justify-between items-center pr-5 pl-5"
        style={{ backgroundColor: "#242F3A" }}
      >
        <div>
          <Logo />
        </div>
        <div>
          <Button variant="outlined-white" className="mr-3">
            Create Post
          </Button>
          <Button variant="outlined-white" className="mr-3">
            Login
          </Button>
          <Button variant="solid" className="mr-3">
            Register
          </Button>
          <span className="">
            <Avatar icon={<UserOutlined />} className="mr-2" />
            Darrell Steward
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;

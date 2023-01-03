import { Button } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
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
          <Button className="default-btn mr-3">Login</Button>
          <Button type="primary" className="primary-btn">
            Register
          </Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;

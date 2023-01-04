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
            Login
          </Button>
          <Button variant="solid">Register</Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;

import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import ProfileCard from "../Components/ProfileCard";
import ProfileForm from "../Components/ProfileForm";
import { Button } from "../Components/UI/Button";
import Cake from "../Images/Cake";

const Profile = () => {
  return (
    <div>
      <div className="p-3 flex items-center font-semibold">
        <Avatar icon={<UserOutlined />} className="mr-2 bg-orange-400" />
        <span>Profile</span>
      </div>
      <hr />
      <div className="pl-4 pr-4 flex ">
        <ProfileCard />
        <div className="ml-4 p-4 w-full bg-slate-300 shadow-2xl">
          <div style={{ width: "480px" }}>
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

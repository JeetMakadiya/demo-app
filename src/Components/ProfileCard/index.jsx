import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import Cake from "../../Images/Cake";
import { Button } from "../UI/Button";

const ProfileCard = () => {
  return (
    <div className="w-80 bg-slate-300 flex flex-col items-center pl-3 pr-3 pt-8 pb-8">
      <Avatar icon={<UserOutlined />} className="w-28 h-28" />
      <p>Darrell Steward</p>
      <div className="bg-slate-200 w-full mt-2">
        <div className="text-sm ml-3 mt-3">
          <MailOutlined className="mr-3" />
          jane.cooper@gmail.com
        </div>
        <div className="text-sm ml-3 mt-3">
          <PhoneOutlined className="mr-3" />
          987 654 3210
        </div>
        <div className="text-sm ml-3 mt-3">
          <WomanOutlined className="mr-3" />
          Female
        </div>
        <div className="text-sm ml-3 mt-3 mb-3">
          <Cake size={16} color="rgba(1,1,1,0.7)" className="mr-2" />
          12/12/1994
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <Button variant="outlined-orange" className="mb-6">
          Change Password
        </Button>
        <Button variant="outlined-orange">Logout</Button>
      </div>
    </div>
  );
};

export default ProfileCard;

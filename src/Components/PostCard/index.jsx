import {
  CalendarOutlined,
  ClockCircleOutlined,
  LikeOutlined,
  MoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useState } from "react";
import { Modal } from "./Modal";

const PostCard = ({ userImage, userName, date, time, description, media }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-3 bg-slate-400 shadow-2xl shadow-slate-400 p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              size={64}
              icon={userImage ? userImage : <UserOutlined />}
              className="mr-3"
            />
            <div className="">
              <span>{userName}</span>
              <div className="mt-2 opacity-30">
                <span className="mr-3">
                  <CalendarOutlined className="mr-1" />
                  {date}
                </span>
                <span className="mr-3">
                  <ClockCircleOutlined className="mr-1" />
                  {time}
                </span>
                <span className="mr-3 cursor-pointer" onClick={showModal}>
                  <LikeOutlined className="mr-1" />
                  Liked by John and 50 others
                </span>
              </div>
            </div>
          </div>
          <div>
            <MoreOutlined />
          </div>
        </div>
        <p className="">{description}</p>
        <div className="flex">
          <div className="w-24 h-16 mr-4 bg-slate-500 rounded"></div>
          <div className="w-24 h-16 mr-4 bg-slate-500 rounded"></div>
          <div className="w-24 h-16 mr-4 bg-slate-500 rounded"></div>
          <div className="w-24 h-16 mr-4 bg-slate-500 rounded"></div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default PostCard;

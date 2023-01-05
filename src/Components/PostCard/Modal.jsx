import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import React from "react";

const NewModal = ({ isModalOpen, handleCancel }) => {
  return (
    <Modal
      title="Liked By"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      modalRender={() => (
        <div className="">
          <div className="bg-blue-500 p-6 pt-3 pb-3 text-white font-bold text-lg flex justify-center rounded-t-xl relative">
            Liked By
          </div>
          <CloseOutlined
            className="absolute top-4 right-4 text-white font-bold cursor-pointer"
            onClick={handleCancel}
          />
          <div className="bg-white p-6 rounded-b-xl">
            <div className="pb-4">
              <Avatar icon={<UserOutlined />} className="mr-4" />
              Bessie Cooper
            </div>
            <div className="pb-4">
              <Avatar icon={<UserOutlined />} className="mr-4" />
              Bessie Cooper
            </div>
            <div className="pb-4">
              <Avatar icon={<UserOutlined />} className="mr-4" />
              Bessie Cooper
            </div>
            <div className="pb-4">
              <Avatar icon={<UserOutlined />} className="mr-4" />
              Bessie Cooper
            </div>
          </div>
        </div>
      )}
    />
  );
};

export { NewModal as Modal };

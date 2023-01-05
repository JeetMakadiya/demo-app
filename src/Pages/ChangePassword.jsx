import { Form } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";
import { Input } from "../Components/UI/Input";
import { PasswordInput } from "../Components/UI/PasswordInput";

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/12 flex flex-col">
        <h1 className="text-2xl font-bold mt-10 mb-1">Change Password</h1>
        <p className="mb-5 opacity-40">Please enter your new password.</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <PasswordInput
            name="oldPassword"
            label="Old Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            placeholder="Enter your password"
            hasFeedback
          />
          <PasswordInput
            name="password"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            placeholder="Enter your password"
            hasFeedback
          />
          <PasswordInput
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
            placeholder="Confirm your password"
          />
          <Form.Item>
            <Button variant="solid" htmlType="submit" block>
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;

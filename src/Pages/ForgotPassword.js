import { Form, Input } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-1/4 bg-blue-500"></div>
      <div className="w-3/4 mt-16 ml-16">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Forgot password?</h1>
          <p className="mb-2 opacity-40">
            Please enter your registered email address we'll send you reset
            instruction
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item>
              <Button variant="solid" htmlType="submit" block>
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

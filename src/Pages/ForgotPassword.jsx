import { Form } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";
import { Input } from "../Components/UI/Input";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-1/4 bg-blue-500"></div>
      <div className="w-3/4 mt-10 ml-10">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-1">Forgot password?</h1>
          <p className="mb-5 opacity-40">
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
            <Input
              type="email"
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
              placeholder="Enter your Email"
            />
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

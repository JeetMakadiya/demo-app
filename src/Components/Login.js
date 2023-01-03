import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-3/5 bg-blue-500"></div>
      <div className="w-2/5 flex-grow-1 flex justify-center items-center">
        <div className="w-3/6 flex flex-col">
          <h1 className="text-lg mb-2">Welcome Back!</h1>
          <p className="mb-2 opacity-40">Login to your account</p>
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
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input type="password" placeholder="Enter Your Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-orange-500">Remember Me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot text-orange-500" href="">
                Forgot password?
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="primary-btn"
                block
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

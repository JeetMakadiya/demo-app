import { Form } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";
import { Checkbox } from "../Components/UI/Checkbox";
import { Input } from "../Components/UI/Input";

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
            <Input
              type="email"
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
              placeholder="Enter your Email"
            />
            <Input
              type="password"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              placeholder="Enter Your Password"
            />
            <div className="flex justify-between">
              <div>
                <Form.Item>
                  <Checkbox
                    name="remember"
                    label="Remember Me"
                    valuePropName="checked"
                    noStyle
                  />
                </Form.Item>
              </div>
              <div className="pt-1">
                <a
                  className="login-form-forgot text-orange-500 hover:text-orange-500 hover:underline"
                  href=""
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <Form.Item>
              <Button variant="solid" htmlType="submit" block>
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

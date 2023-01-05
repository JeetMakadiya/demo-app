import { Form } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";
import { Input } from "../Components/UI/Input";
import { PasswordInput } from "../Components/UI/PasswordInput";

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-1/4 bg-blue-500"></div>
      <div className="w-3/4 mt-10 ml-10">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-1">Reset Password</h1>
          <p className="mb-5 opacity-40">Please enter your new password.</p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
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
    </div>
  );
};

export default ResetPassword;

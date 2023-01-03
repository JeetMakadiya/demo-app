import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import OtpInput from "react-otp-input";
import styled from "styled-components";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleOtpChange = (otp) => setOtp(otp);
  const Btn = styled(Button)`
    color: #ff7f00;
    border-color: #ff7f00;
    font-weight: normal;
    :focus {
      color: #ff7f00;
      border-color: #ff7f00;
    }
    :hover {
      color: #ff7f00 !important;
      border-color: #ff7f00 !important;
    }
  `;
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-1/4 bg-blue-500"></div>
      <div className="w-3/4 mt-16 ml-16">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Verification</h1>
          <p className="mb-2 opacity-40">
            We have sent you OTP on your email address
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="otp"
              rules={[{ required: true, message: "Please input your OTP!" }]}
            >
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                separator={<span>-</span>}
                inputStyle={{
                  border: "1px solid rgba(1,1,1,0.2)",
                  width: "38px",
                  height: "38px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Btn htmlType="submit" block>
                Verify
              </Btn>
              <Btn htmlType="submit" block>
                Change Email
              </Btn>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Verification;

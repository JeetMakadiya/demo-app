import React, { useState } from "react";
import { Form } from "antd";
import styled from "styled-components";
import { Button } from "../Components/UI/Button";
import { OtpInput } from "../Components/UI/OtpInput";

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
        <h1 className="text-2xl font-bold mb-2">Verification</h1>
        <p className="mb-2 opacity-40">
          We have sent you OTP on your email address
        </p>
        <div className="w-1/3 flex flex-col">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <OtpInput
              name="otp"
              rules={[{ required: true, message: "Please input your OTP!" }]}
              value={otp}
              onChange={handleOtpChange}
              numInputs={4}
            />
            <Form.Item>
              <Button variant="solid" htmlType="submit" block>
                Verify
              </Button>
              <Button
                variant="outlined-orange"
                className="mt-4"
                htmlType="submit"
                block
              >
                Change Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Verification;

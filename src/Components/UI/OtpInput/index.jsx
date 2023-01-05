import { Form } from "antd";
import React from "react";
import OtpInput from "react-otp-input";

const otpInputStyle = {
  border: "1px solid #FF7F00",
  width: "38px",
  height: "38px",
  marginLeft: "24px",
};

const NewOtpInput = ({
  name,
  rules,
  value,
  onChange,
  numInputs,
  separator,
  inputStyle = otpInputStyle,
}) => {
  return (
    <Form.Item name={name} rules={rules}>
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={numInputs}
        separator={separator}
        inputStyle={inputStyle}
      />
    </Form.Item>
  );
};

export { NewOtpInput as OtpInput };

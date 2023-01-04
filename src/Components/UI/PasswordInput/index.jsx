import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

const PasswordInput = ({ label, name, rules, type, placeholder, ...props }) => {
  const StyledPasswordInput = styled(Input.Password)`
    width: auto;
    &:hover {
      border-color: #ff7f00 !important;
    }
  `;
  return (
    <Form.Item label={label} name={name} rules={rules} {...props}>
      <StyledPasswordInput placeholder={placeholder} />
    </Form.Item>
  );
};

export { PasswordInput };

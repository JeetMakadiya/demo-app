import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

const NewInput = ({ label, name, rules, type, placeholder }) => {
  const StyledInput = styled(Input)`
    width: auto;
    /* .ant-col-sm-8 {
      max-width: 60% !important;
    } */
    &:hover {
      border-color: #ff7f00;
    }
  `;
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <StyledInput type={type} placeholder={placeholder} />
    </Form.Item>
  );
};

export { NewInput as Input };

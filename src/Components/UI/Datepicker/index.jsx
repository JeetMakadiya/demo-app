import { DatePicker, Form } from "antd";
import React from "react";
import styled from "styled-components";

const NewDatePicker = ({ label, name, rules, placeholder }) => {
  const StyledDatePicker = styled(DatePicker)`
    &:hover {
      border-color: #ff7f00 !important;
    }
  `;
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <StyledDatePicker placeholder={placeholder} />
    </Form.Item>
  );
};

export { NewDatePicker as DatePicker };

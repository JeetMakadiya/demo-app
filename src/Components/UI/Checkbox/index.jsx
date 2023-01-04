import { Checkbox, Form } from "antd";
import React from "react";

const NewCheckbox = ({ label, name, valuePropName, labelColor, ...props }) => {
  return (
    <Form.Item name={name} valuePropName={valuePropName} {...props}>
      <Checkbox
        style={{ color: `${labelColor ? `${labelColor}` : "#FF7F00"}` }}
      >
        {label}
      </Checkbox>
    </Form.Item>
  );
};

export { NewCheckbox as Checkbox };

import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const NewButton = ({ variant, children, ...props }) => {
  let btnTheme =
    variant === "outlined-orange"
      ? "#ff7f00"
      : variant === "outlined-white"
      ? "white"
      : "";
  const Btn = styled(Button)`
    background-color: ${(props) =>
      variant === "solid" ? "#ff7f00" : "transparent"};
    border-color: ${(props) => btnTheme};
    color: ${(props) => btnTheme};
    &:hover {
      background-color: ${(props) =>
        variant === "solid" ? "#ff7f00 !important" : "transparent !important"};
      color: ${(props) => `${btnTheme} !important`};
      border-color: ${(props) => `${btnTheme} !important`};
    }
  `;

  const type = variant === "solid" ? "primary" : "default";
  return (
    <Btn type={type} {...props}>
      {children}
    </Btn>
  );
};

export { NewButton as Button };

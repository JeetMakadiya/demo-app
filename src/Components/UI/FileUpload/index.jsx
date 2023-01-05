import { Form, Upload } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const FileUpload = ({ label, style, onChange }) => {
  const fileInputRef = useRef();
  const StyledUpload = styled(Upload)``;
  return (
    <>
      <input
        type="file"
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <Button variant="solid" onClick={() => fileInputRef.current.click()}>
        {label}
      </Button>
    </>
  );
};

export { FileUpload };

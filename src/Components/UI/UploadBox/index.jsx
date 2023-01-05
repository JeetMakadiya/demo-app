import { Form, Upload } from "antd";
import React from "react";
import styled from "styled-components";

const UploadBox = ({
  label,
  action,
  listType,
  fileList,
  onChange,
  onPreview,
}) => {
  const StyledUpload = styled(Upload)`
    /* &.ant-upload-wrapper.ant-upload-picture-card-wrapper.ant-upload.ant-upload-select {
      border: 4px solid red;
    } */
    /* width: 300px !important; */
    /* &&.ant-upload-wrapper {
      .ant-upload-list {
        .ant-upload .ant-upload-select {
          background-color: red;
        }
      }
    } */
  `;
  return (
    <StyledUpload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && `+ ${label}`}
    </StyledUpload>
  );
};

export { UploadBox };

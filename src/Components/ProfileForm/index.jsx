import { Col, Form, Radio, Row } from "antd";
import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Checkbox } from "../UI/Checkbox";
import { DatePicker } from "../UI/Datepicker";
import { Input } from "../UI/Input";
import { UploadBox } from "../UI/UploadBox";

const ProfileForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <Form
      // {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
      layout="vertical"
    >
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={24}>
          <UploadBox
            label="Upload Image"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input
            type="text"
            name="firstname"
            label="Firstname"
            rules={[
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
            placeholder="Enter your Firstname"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input
            type="text"
            name="lastname"
            label="Lastname"
            rules={[
              {
                required: true,
                message: "Please input your Lastname!",
              },
            ]}
            placeholder="Enter your Lastname"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input
            type="email"
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            placeholder="Enter your Email"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input
            type="text"
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
            placeholder="Enter your Phone number"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <DatePicker
            name="dob"
            label="Date of Birth"
            rules={[
              {
                type: "object",
                required: true,
                message: "Please select Date Of Birth!",
              },
            ]}
            placeholder="Select Date"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item>
            <Button variant="solid" htmlType="submit" block>
              Save
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileForm;

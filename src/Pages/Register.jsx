import {
  AutoComplete,
  Cascader,
  Col,
  Form,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";
import React, { useState } from "react";
import { Button } from "../Components/UI/Button";
import { Checkbox } from "../Components/UI/Checkbox";
import { DatePicker } from "../Components/UI/Datepicker";
import { Input } from "../Components/UI/Input";
import { PasswordInput } from "../Components/UI/PasswordInput";
import { UploadBox } from "../Components/UI/UploadBox";

const { Option } = Select;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const Register = () => {
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
    <div className="flex h-[calc(100vh-56px)]">
      <div className="w-1/3 bg-blue-500"></div>
      <div className="flex-grow-1 mt-10 ml-10" style={{ width: "480px" }}>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="mb-2 opacity-40">
            We need some details to setup your account
          </p>
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
            {/* <Form.Item name="upload" valuePropName="fileList">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload Image"}
              </Upload>
            </Form.Item> */}
            <UploadBox
              label="Upload Image"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            />
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
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
                <PasswordInput
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  placeholder="Enter your password"
                  hasFeedback
                />
              </Col>
              <Col className="gutter-row" span={12}>
                <PasswordInput
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                  placeholder="Confirm your password"
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
              <Col className="gutter-row" span={24}>
                <Checkbox
                  name="agreement"
                  valuePropName="checked"
                  label="I agree to the tearms of services"
                  labelColor={"rgba(1, 1, 1, 0.6)"}
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                  // {...tailFormItemLayout}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                <Form.Item>
                  <Button variant="solid" htmlType="submit" block>
                    Get Started
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

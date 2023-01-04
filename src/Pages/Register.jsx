import {
  AutoComplete,
  Cascader,
  Col,
  Form,
  InputNumber,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";
import React, { useState } from "react";
import { Button } from "../Components/UI/Button";
import { Checkbox } from "../Components/UI/Checkbox";
import { DatePicker } from "../Components/UI/Datepicker";
import { Input } from "../Components/UI/Input";
import { PasswordInput } from "../Components/UI/PasswordInput";

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

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

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
      <div className="w-2/3 flex-grow-1 mt-8 ml-8">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="mb-2 opacity-40">
            We need some details to setup your account
          </p>
          <Form
            {...formItemLayout}
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
            <Form.Item name="upload" valuePropName="fileList">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload Image"}
              </Upload>
            </Form.Item>
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
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>I agree to the tearms of services</Checkbox>
            </Form.Item>
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
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            />
            <Form.Item {...tailFormItemLayout}>
              <Button variant="solid" htmlType="submit" block>
                Get Started
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

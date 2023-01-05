import { Form, Input, Upload } from "antd";
import React from "react";
import { Button } from "../Components/UI/Button";
import { FileUpload } from "../Components/UI/FileUpload";
const fileList = [
  {
    uid: "0",
    name: "xxx.png",
    status: "uploading",
    percent: 33,
  },
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "zzz.png",
    status: "error",
  },
];
const CreatePost = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="mt-10 ml-10" style={{ width: "480px" }}>
      <h1 className="text-2xl font-bold mb-2">Create Post</h1>
      <p className="mb-2 opacity-40">Add a Description</p>
      <Form
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
        <Form.Item
          name="postDescription"
          rules={[
            {
              required: true,
              message: "Please input Description",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={200}
            autoSize={{ minRows: 10 }}
          />
        </Form.Item>
        <FileUpload label={"Add Media"} />
        <div className="w-28 h-20 mt-6 bg-slate-500"></div>
        <Form.Item>
          <div className="flex justify-center mt-12">
            <Button variant="outlined-orange" className="mr-5">
              Cancel
            </Button>
            <Button variant="solid">Create Post</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;

import { Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LoginInput = ({ user }) => {
  const Navigate = useNavigate();
  const onFinish = (values) => {
    if (user.email === values.email && user.password === values.password) {
      Navigate("/");
    } else console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="Login-form"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "The input is not a valid email ",
          },
        ]}
        className="label"
      >
        <Input autoComplete="off" className="input-field" />
      </Form.Item>

      <Form.Item
        label="Password"
        className="label"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password className="input-field" autoComplete="new-password" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button htmlType="submit" className="btn">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginInput;

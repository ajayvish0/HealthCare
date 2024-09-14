import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginInput = ({ user }) => {
  const Navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const onFinish = (values) => {
    if (user.email === values.email && user.password === values.password) {
      Navigate("/");
    } else {
      setAlert(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {alert && (
        <Alert
          message="Wrong Credentials "
          type="warning"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "23rem",
            backgroundColor: "#588157",
            color: "#ffffff",
            border: "none",
          }}
          closable
          onClose={() => setAlert(false)}
        />
      )}
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

        <Form.Item>
          <Button htmlType="submit" className="login-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginInput;

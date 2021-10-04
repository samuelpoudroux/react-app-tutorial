import React, { useContext } from "react";
import { UserContext } from "./../../contextes/UserContext";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import { Form, Input, Button } from "antd";

const InformUser = () => {
  const { user, setUser } = useContext(UserContext);

  const onFinish = ({ pseudo }) => {
    setUser(pseudo);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FlexWrapper direction="column">
      <h1>
        {user
          ? `Bienvenue ${user}`
          : "Informez le nom de votre utilisateur pour le chat"}
      </h1>
      {!user && (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Pseudo"
            name="pseudo"
            rules={[{ required: true, message: "Please input your pseudo!" }]}
          >
            <Input />
          </Form.Item>
          <FlexWrapper justifyContent="center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Valider
              </Button>
            </Form.Item>
          </FlexWrapper>
        </Form>
      )}
    </FlexWrapper>
  );
};

export default InformUser;

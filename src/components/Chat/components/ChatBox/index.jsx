import React, { memo, useContext } from "react";
import { UserContext } from "./../../../../contextes/UserContext";
import { Form, Input, Button } from "antd";
import Message from "./Message/index";

const ChatBox = ({ messages, sendMessage, closeChat }) => {
  const onFinish = (values) => {
    console.log(values.message);
    sendMessage(values.message);
  };

  return (
    <div style={{ maxHeight: "200px", overflow: "scroll" }}>
      {messages.map((msg, index) => (
        <Message key={index} msg={msg} />
      ))}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Message" name="message">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default memo(ChatBox);

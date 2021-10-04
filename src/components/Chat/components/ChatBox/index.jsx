import React, { memo } from "react";
import { Form, Input, Button } from "antd";
import Message from "./Message/index";
import { FlexWrapper } from "./../../../../Wrappers/FlexWrapper/index";
import { CloseCircleFilled } from "@ant-design/icons";
import { MarginWrapper } from "../../../../Wrappers/MarginWrapper";
import { PaddingWrapper } from "./../../../../Wrappers/PaddingWrapper/index";

const ChatBox = ({ messages, sendMessage, closeChat }) => {
  const onFinish = (values) => {
    sendMessage(values.message);
  };

  return (
    <div>
      <div style={{ background: "black", color: "white", height: "50px" }}>
        <PaddingWrapper global="10">
          <FlexWrapper
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <b>Mon Chat</b>
            <CloseCircleFilled />
          </FlexWrapper>
        </PaddingWrapper>
      </div>
      <MarginWrapper top="25">
        <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
          {messages.map((msg, index) => (
            <Message key={index} msg={msg} />
          ))}
        </div>
      </MarginWrapper>
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

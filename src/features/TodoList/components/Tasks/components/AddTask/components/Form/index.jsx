import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import useAddTaskForm from "../../../../hooks/useAddTaskForm";
import { FlexWrapper } from "../../../../../../../../Wrappers/FlexWrapper";

const TaskForm = (props) => {
  const { onFinish, onFinishFailed } = useAddTaskForm();
  return (
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your task name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your task description!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="isChecked"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>fait</Checkbox>
      </Form.Item>
      <FlexWrapper justifyContent="center">
        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </FlexWrapper>
    </Form>
  );
};

export default TaskForm;

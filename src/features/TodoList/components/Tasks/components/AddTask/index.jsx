import React, { useState } from "react";
import { FlexWrapper } from "../../../../../../Wrappers/FlexWrapper";
import { PlusCircleOutlined } from "@ant-design/icons";
import Title from "../../../../../../components/Title";
import { Tooltip, Modal } from "antd";
import useAddTaskForm from "../../hooks/useAddTaskForm";
import TaskForm from "./components/Form";

const AddTask = () => {
  const { isOpenForm, setIsOpenForm } = useAddTaskForm();

  return (
    <FlexWrapper
      width="50%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Title title="Ajouter une tâche" />
      <Tooltip placement="top" title={"ajouter une tâche"}>
        <PlusCircleOutlined
          onClick={() => setIsOpenForm(true)}
          style={{ fontSize: "40px", color: "#08c" }}
        />
      </Tooltip>
      <Modal
        title="Ajouter une tâche"
        visible={isOpenForm}
        footer={null}
        onCancel={() => setIsOpenForm(!isOpenForm)}
      >
        <TaskForm />
      </Modal>
    </FlexWrapper>
  );
};

export default AddTask;

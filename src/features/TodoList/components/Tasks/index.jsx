import React, { memo } from "react";
import useTasks from "../hooks/useTasks";
import TaskCard from "./components/TaskCard";
import { LayoutWrapper } from "../../../../Wrappers/LayoutWrapper";
import { FlexWrapper } from "../../../../Wrappers/FlexWrapper";
import Title from "../../../../components/Title";
import { Spin } from "antd";

const Tasks = () => {
  const { data: tasks, isLoading, error } = useTasks();

  return (
    <LayoutWrapper width="100%" height="100%">
      <FlexWrapper
        direction="column"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Title title="Liste des tâches" />
        {isLoading && <Spin />}
        {error && <p>error is occured</p>}
        <FlexWrapper justifyContent="start">
          {tasks?.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </LayoutWrapper>
  );
};

export default memo(Tasks);

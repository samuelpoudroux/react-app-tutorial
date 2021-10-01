import React, { memo } from "react";
import useTasks from "../hooks/useTasks";
import TaskCard from "./components/TaskCard";
import { LayoutWrapper } from "../../../../Wrappers/LayoutWrapper";
import { FlexWrapper } from "../../../../Wrappers/FlexWrapper";
import Title from "../../../../components/Title";
import { Spin } from "antd";
import AddTask from "./components/AddTask";

const Tasks = () => {
  const { data: tasks, isLoading, error } = useTasks();

  return (
    <LayoutWrapper width="100%" height="100%">
      <FlexWrapper width="100%" height="100%" justifyContent="space-evenly">
        <FlexWrapper
          direction="column"
          width="50%"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Title title="Liste des tâches" />
          {isLoading && <Spin />}
          {error && <p>error is occured</p>}
          <FlexWrapper justifyContent="center">
            {tasks?.map((task, index) => (
              <TaskCard task={task} index={index} key={index} />
            ))}
          </FlexWrapper>
        </FlexWrapper>
        <AddTask />
      </FlexWrapper>
    </LayoutWrapper>
  );
};

export default memo(Tasks);

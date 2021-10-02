import React, { memo } from "react";
import useTasks from "../hooks/useTasks";
import { LayoutWrapper } from "../../../../Wrappers/LayoutWrapper";
import { FlexWrapper } from "../../../../Wrappers/FlexWrapper";
import Title from "../../../../components/Title";
import { Spin } from "antd";
import AddTask from "./components/AddTask";
import { PaddingWrapper } from "./../../../../Wrappers/PaddingWrapper/index";
import TaskTabs from "./components/Tabs";

const Tasks = () => {
  const { data: tasks, isLoading, error } = useTasks();

  return (
    <LayoutWrapper width="100%" height="100%">
      <PaddingWrapper global="16">
        <FlexWrapper width="100%" height="100%">
          <FlexWrapper
            direction="column"
            width="50%"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            height="100%"
          >
            <Title title="Liste des tâches" />
            {(isLoading && <Spin />) || <TaskTabs tasks={tasks} />}
            {error && <p>error is occured</p>}
          </FlexWrapper>
          <AddTask />
        </FlexWrapper>
      </PaddingWrapper>
    </LayoutWrapper>
  );
};

export default memo(Tasks);

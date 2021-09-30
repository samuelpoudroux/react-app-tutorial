import React from "react";
import Home from "../../../../components/Home";
import { Button } from "antd";
import BackButton from "../../../../components/BackButton";
import FlexWrapper from "../../../../Wrappers/FlexWrapper";

const TaskListHome = () => {
  return (
    <Home>
      <FlexWrapper>
        <Button type="primary" ghost>
          Voir la liste des tâches
        </Button>
        <Button type="primary" ghost>
          Voir la liste des tâches
        </Button>
      </FlexWrapper>
      <BackButton />
    </Home>
  );
};

export default TaskListHome;

import React from "react";
import Home from "../../../../components/Home";
import { Button } from "antd";
import BackButton from "../../../../components/BackButton";
import { FlexWrapper } from "../../../../Wrappers/FlexWrapper";
import { useHistory } from "react-router";

const ActionListHome = () => {
  const history = useHistory();
  return (
    <Home>
      <FlexWrapper width="100%" justifyContent="space-evenly">
        <Button
          type="primary"
          ghost
          onClick={() => history.push("/todolist/information/tasks")}
        >
          Voir la liste des tâches
        </Button>
        <Button
          type="primary"
          ghost
          onClick={() => history.push("/actionHistory/information/tasks")}
        >
          Voir l'historique des actions
        </Button>
      </FlexWrapper>
      <BackButton />
    </Home>
  );
};

export default ActionListHome;

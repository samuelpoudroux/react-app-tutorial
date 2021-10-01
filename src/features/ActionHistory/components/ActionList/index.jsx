import React from "react";
import { formatDate } from "../../../../services";
import { FlexWrapper } from "../../../../Wrappers/FlexWrapper";
import Title from "../../../../components/Title";
import useActions from "../../hooks/useActions";
import { LayoutWrapper } from "../../../../Wrappers/LayoutWrapper";

const ActionList = () => {
  const { data: actions } = useActions();

  return (
    <LayoutWrapper width="100%" height="100%">
      <FlexWrapper
        justifyContent="start"
        direction="column"
        width="100%"
        height="100%"
      >
        <Title title="Historique des actions" />
        <ul style={{ listStyle: "none" }}>
          {actions?.map((action) => (
            <li>
              {action.actionType} {action.name}" {formatDate(action.date)}
            </li>
          ))}
        </ul>
      </FlexWrapper>
    </LayoutWrapper>
  );
};

export default ActionList;

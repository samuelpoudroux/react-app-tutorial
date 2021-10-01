import React from "react";
import { Card, Avatar, Switch } from "antd";
import { MarginWrapper } from "../../../../../../Wrappers/MarginWrapper";
import DeleteTask from "../DeleteTask";
import { useDispatch } from "react-redux";
import { handleCheckedTask } from "../../../../slice";
import PropTypes from "prop-types";
import { addActionToHistory } from "../../../../../ActionHistory/slice";
import {
  CHECK_TASK,
  UNCHECKED_TASK,
} from "../../../../../ActionHistory/slice/constants";

const { Meta } = Card;
const TaskCard = ({ task, index }) => {
  const dispatch = useDispatch();
  const { id, name, isChecked, description } = task;
  const handleSwitch = (checked) => {
    dispatch(handleCheckedTask({ id, checked }));
    dispatch(
      addActionToHistory({
        actionType: checked ? CHECK_TASK : UNCHECKED_TASK,
        task,
      })
    );
  };

  return (
    <MarginWrapper global="10">
      <Card
        hoverable
        style={{ width: 240 }}
        extra={
          <>
            <DeleteTask task={task} />{" "}
            <Switch defaultChecked={isChecked} onChange={handleSwitch} />
          </>
        }
        title={`Tâche ${index + 1}: ${name}`}
      >
        <Meta
          description={description}
          avatar={<Avatar src="/assets/taskboardmono_105883.png" />}
        />
      </Card>
    </MarginWrapper>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;

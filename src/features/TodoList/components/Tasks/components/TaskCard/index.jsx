import React from "react";
import { Card, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { MarginWrapper } from "../../../../../../Wrappers/MarginWrapper";

const { Meta } = Card;

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../../slice";

const TaskCard = ({ task }) => {
  const { id, name, isChecked, description } = task;
  const dispatch = useDispatch();

  return (
    <MarginWrapper global="10">
      <Card
        hoverable
        style={{ width: 240 }}
        extra={<DeleteOutlined onClick={() => dispatch(removeTask(id))} />}
        title={`Tâche ${id + 1}: ${name}`}
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

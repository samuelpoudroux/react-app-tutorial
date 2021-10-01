import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { removeTask } from "../../../../slice";
import { useDispatch } from "react-redux";
import { Popconfirm } from "antd";
import { addActionToHistory } from "../../../../../ActionHistory/slice";
import { REMOVE_TASK } from "../../../../../ActionHistory/slice/constants";
import PropTypes from "prop-types";

const DeleteTask = ({ task }) => {
  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(removeTask(task.id));
    dispatch(
      addActionToHistory({
        actionType: REMOVE_TASK,
        task,
      })
    );
  };

  return (
    <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined />
    </Popconfirm>
  );
};

DeleteTask.propTypes = {
  task: PropTypes.object,
};

export default DeleteTask;

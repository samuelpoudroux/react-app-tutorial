import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { removeTask } from "../../../../slice";
import { useDispatch } from "react-redux";
import { Popconfirm } from "antd";

import PropTypes from "prop-types";

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();
  const confirm = () => dispatch(removeTask(id));

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
  id: PropTypes.number,
};

export default DeleteTask;

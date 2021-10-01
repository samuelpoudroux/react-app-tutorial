import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActionToHistory } from "../../../../../ActionHistory/slice";
import { ADD_TASK } from "../../../../../ActionHistory/slice/constants";
import { addTask } from "../../../../slice";

const useAddTaskForm = () => {
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onFinish = (values) => {
    dispatch(addTask(values));
    dispatch(
      addActionToHistory({
        actionType: ADD_TASK,
        task: values,
      })
    );
  };

  return {
    isOpenForm,
    setIsOpenForm,
    onFinishFailed,
    onFinish,
  };
};

export default useAddTaskForm;

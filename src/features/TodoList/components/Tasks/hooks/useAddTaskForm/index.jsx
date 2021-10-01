import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../slice";

const useAddTaskForm = () => {
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onFinish = (values) => {
    console.log(values);
    dispatch(addTask(values));
  };

  return {
    isOpenForm,
    setIsOpenForm,
    onFinishFailed,
    onFinish,
  };
};

export default useAddTaskForm;

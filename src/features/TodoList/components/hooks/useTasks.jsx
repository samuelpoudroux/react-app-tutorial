import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getTasksApi } from "../../slice";

const useTasks = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.todoList);

  useEffect(() => {
    if (error) {
      notification.error({
        key: `error${Date.now()}`,
        description: "error while getting tasks",
      });
    }
  }, [error]);

  useEffect(async () => {
    !data && dispatch(getTasksApi());
  }, []);

  return { data, isLoading, error };
};

export default useTasks;

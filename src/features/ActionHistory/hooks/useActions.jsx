import { useSelector } from "react-redux";

const useActions = () => {
  const { data, isLoading, error } = useSelector((state) => state.actionList);
  return { data, isLoading, error };
};

export default useActions;

import Home from "./components/Home";
import ActionHistory from "./features/ActionHistory";
import TodoList from "./features/TodoList";

export const ROUTER = {
  HOME: {
    url: "",
    component: <Home isMainHome />,
    exact: true,
  },
  TASK_LIST: {
    url: "todolist",
    component: <TodoList />,
  },
  HISTORY_LIST: {
    url: "actionHistory",
    component: <ActionHistory />,
  },
};

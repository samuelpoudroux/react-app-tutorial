import React from "react";

const Home = React.lazy(() => import("./components/Home"));
const ActionHistory = React.lazy(() => import("./features/ActionHistory"));
const TodoList = React.lazy(() => import("./features/TodoList"));

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

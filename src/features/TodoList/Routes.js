import React from "react";

const TaskListHome = React.lazy(() => import("./components/Home"));
const Tasks = React.lazy(() => import("./components/Tasks"));

export const TODO_LIST_ROUTER = {
  TASK_LIST_HOME: {
    url: ":homeTitle",
    component: TaskListHome,
  },
  TASKS: {
    url: "information/tasks",
    component: Tasks,
  },
};

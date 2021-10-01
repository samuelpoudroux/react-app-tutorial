import TaskListHome from "./components/Home";
import Tasks from "./components/Tasks";

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

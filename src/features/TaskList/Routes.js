import TaskListHome from "./components/Home";
import TodoList from "./components/TodoList";

export const TASK_LIST_ROUTER = {
  TASK_LIST_HOME: {
    url: ":homeTitle",
    component: TaskListHome
  },
  TASKS: {
    url: "information/list",
    component: TodoList
  }
};

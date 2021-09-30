import Home from "./components/Home";
import ActionHistory from "./features/ActionHistory";
import TaskList from "./features/TaskList";

export const ROUTER = {
  HOME: {
    url: "",
    component: Home,
    exact: true
  },
  TASK_LIST: {
    url: "taskList",
    component: TaskList
  },
  HISTORY_LIST: {
    url: "actionHistory",
    component: ActionHistory
  }
};

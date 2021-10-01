import ActionList from "./components/ActionList";
import ActionListHome from "./components/Home";

export const ACTION_HISTORY_ROUTER = {
  ACTION_HISTORY_HOME: {
    url: ":homeTitle",
    component: ActionListHome,
  },
  ACTIONS: {
    url: "information/tasks",
    component: ActionList,
  },
};

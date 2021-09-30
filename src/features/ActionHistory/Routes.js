import Home from "../../components/Home";
import ActionList from "./components/ActionList";

export const ACTION_HISTORY_ROUTER = {
  ACTION_HISTORY_HOME: {
    url: ":homeTitle",
    component: Home
  },
  ACTIONS: {
    url: "information/list",
    component: ActionList
  }
};

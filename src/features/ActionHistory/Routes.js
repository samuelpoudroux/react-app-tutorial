import React from "react";
const ActionList = React.lazy(() => import("./components/ActionList"));
const ActionListHome = React.lazy(() => import("./components/Home"));

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

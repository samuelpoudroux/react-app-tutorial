import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { TASK_LIST_ROUTER } from "./Routes.js";

const TaskList = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {Object.keys(TASK_LIST_ROUTER).map((key) => {
        return (
          <Route
            key={key}
            path={`${path}/${TASK_LIST_ROUTER[key].url}`}
            component={TASK_LIST_ROUTER[key].component}
            exact
          />
        );
      })}
    </Switch>
  );
};

export default TaskList;

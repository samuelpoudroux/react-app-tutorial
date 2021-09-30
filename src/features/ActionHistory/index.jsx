import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ACTION_HISTORY_ROUTER } from "./Routes.js";

const ActionHistory = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {Object.keys(ACTION_HISTORY_ROUTER).map((key) => {
        return (
          <Route
            key={key}
            path={`${path}/${ACTION_HISTORY_ROUTER[key].url}`}
            component={ACTION_HISTORY_ROUTER[key].component}
            exact
          />
        );
      })}
    </Switch>
  );
};

export default ActionHistory;

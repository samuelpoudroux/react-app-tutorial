import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { TODO_LIST_ROUTER } from "./Routes.js";

const TodoList = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {Object.keys(TODO_LIST_ROUTER).map((key) => {
        return (
          <Route
            key={key}
            path={`${path}/${TODO_LIST_ROUTER[key].url}`}
            component={TODO_LIST_ROUTER[key].component}
            exact
          />
        );
      })}
    </Switch>
  );
};

export default TodoList;

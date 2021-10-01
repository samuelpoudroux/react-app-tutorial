import { configureStore } from "@reduxjs/toolkit";
import todoList from "./features/TodoList/slice";
import actionList from "./features/ActionHistory/slice";

export const store = configureStore({
  initialState: { todoList, actionList },
  reducer: {
    todoList,
    actionList,
  },
});

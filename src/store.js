import { configureStore } from "@reduxjs/toolkit";
import todoList from "./features/TodoList/slice";

export const store = configureStore({
  initialState: { todoList },
  reducer: {
    todoList,
  },
});

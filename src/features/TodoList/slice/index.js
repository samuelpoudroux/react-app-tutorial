import { createSlice, current } from "@reduxjs/toolkit";
import { getTasks } from "../services";
import {
  getListWithNewElement,
  getListWithoutOldElement,
  getListWithNewCheckedElements,
} from "./services";

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState: {
    data: null,
    error: false,
    isLoading: false,
  },
  reducers: {
    getAllTasksRequest: (state) => {
      return { ...state, isLoading: true };
    },
    getAllTasksSuccess: (state, action) => {
      const data = action.payload;
      return { ...state, data, isLoading: false };
    },
    getAllTasksError: (state) => {
      return { ...state, error: true, isLoading: false };
    },
    removeTask: (state, action) => {
      const data = getListWithoutOldElement(
        action.payload,
        current(state.data)
      );
      return { ...state, data };
    },
    addTask: (state, action) => {
      const data = getListWithNewElement(action.payload, current(state.data));
      return { ...state, data };
    },
    handleCheckedTask: (state, action) => {
      const data = getListWithNewCheckedElements(
        action.payload,
        current(state.data)
      );
      return { ...state, data };
    },
  },
});

export const {
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksError,
  removeTask,
  addTask,
  handleCheckedTask,
} = todoListSlice.actions;

export const getTasksApi = () => async (dispatch) => {
  try {
    dispatch(getAllTasksRequest());
    const data = await getTasks();
    dispatch(getAllTasksSuccess(data));
  } catch (error) {
    dispatch(getAllTasksError());
  }
};

// On exporte le reducer pour l'intégrer au REDUCER global
export default todoListSlice.reducer;

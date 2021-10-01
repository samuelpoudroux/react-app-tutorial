import { createSlice } from "@reduxjs/toolkit";
import { addAction } from "./services";

const actionHistorySlice = createSlice({
  name: "actionHistorySlice",
  initialState: {
    data: [],
  },
  reducers: {
    addActionToHistory: (state, action) => ({
      ...state,
      data: addAction(action.payload, state.data),
    }),
  },
});

export const { addActionToHistory } = actionHistorySlice.actions;

// On exporte le reducer pour l'intégrer au REDUCER global
export default actionHistorySlice.reducer;

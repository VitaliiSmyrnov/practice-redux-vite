import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filters: {
    status: "all",
  },
};

const rootReducer = (state = initialState) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});

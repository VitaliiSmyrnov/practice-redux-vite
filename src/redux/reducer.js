import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // return [...state, action.payload];
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // return state.filter((task) => task.id !== action.payload);
    const index = state.findIndex((task) => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    // return state.map((task) => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return { ...task, completed: !task.completed };
    // });
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // return { ...state, status: action.payload };
    state.status = action.payload;
  },
});

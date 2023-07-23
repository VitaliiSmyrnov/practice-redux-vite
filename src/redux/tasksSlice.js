import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  state: tasksInitialState,
  reducers: {
    addTask(state, action) {
      // return [...state, action.payload];
      state.push(action.payload);
    },
    deleteTask(state, action) {
      // return state.filter(task => task.id !== action.payload);
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
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
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducers;

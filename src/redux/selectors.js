import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks;

export const selectFilters = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilters],
  (tasks, filter) => {
    switch (filter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);

      case statusFilters.completed:
        return tasks.filter((task) => task.completed);

      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});

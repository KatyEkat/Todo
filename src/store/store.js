import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
});

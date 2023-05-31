import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reduxSlice/CounterSlice";

export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("Inside increment");
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

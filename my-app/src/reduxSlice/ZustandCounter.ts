import { create } from "zustand";

interface CounterState {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

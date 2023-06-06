import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reduxSlice/CounterSlice";
import ShoppingCartReducer from "../reduxSlice/ShoppingCarSlice";
import productsApi from "../API/api";

//https://dev.to/ifeanyichima/what-is-createasyncthunk-in-redux--mhe

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterReducer,
    shoppingcart: ShoppingCartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;

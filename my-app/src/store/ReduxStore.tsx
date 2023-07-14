import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reduxSlice/CounterSlice";
import ShoppingCartReducer from "../reduxSlice/ShoppingCarSlice";
import ProductReducer from "../reduxSlice/ProductSlice";
import UserReducer from "../reduxSlice/UserSlice";
import productsApi from "../API/api";

//https://dev.to/ifeanyichima/what-is-createasyncthunk-in-redux--mhe
//middleware is added for productsApi
//Rootstate carries the entire state in store

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterReducer,
    shoppingcart: ShoppingCartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    productData: ProductReducer,
    userData: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;

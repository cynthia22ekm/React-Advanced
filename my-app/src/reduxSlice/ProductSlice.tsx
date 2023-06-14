import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "../data/DataType";

export interface ProductState {
  products: Products[];
}

const initialState: ProductState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Products>) => {
      state.products.push(action.payload);
    },
  },
});

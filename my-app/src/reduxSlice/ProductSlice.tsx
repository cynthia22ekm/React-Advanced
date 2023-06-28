import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../data/DataType";

export interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

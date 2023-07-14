import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIProductType } from "../data/DataType";

interface ProductApiState {
  productApiData: APIProductType[];
}

const initialState: ProductApiState = {
  productApiData: [],
};

export const fetchProductsData = createAsyncThunk("productsApi", async () => {
  const response = await axios.get("https://fakestoreapi.com/Products");
  console.log("Product data is " + response);
  return response?.data;
});

export const ProductApiSlice = createSlice({
  name: "productsApi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.productApiData = action.payload;
    });
    builder.addCase(fetchProductsData.pending, (state, action) => {
      console.log("Loading");
    });
  },
});

export default ProductApiSlice.reducer;

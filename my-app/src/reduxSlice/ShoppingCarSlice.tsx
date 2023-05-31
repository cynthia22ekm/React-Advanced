import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../pages/Store/Store";

interface ShoppingCartState {
  cartItems: CartItemType[];
}

const initialState: ShoppingCartState = {
  cartItems: [],
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../API/api";

export interface ShoppingCartState {
  cartItems: Products[];
}

const initialState: ShoppingCartState = {
  cartItems: [],
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addToCart: (state) => {
      console.log("Action started");
      state.cartItems.push(...state.cartItems);
      console.log("Cart length is " + state.cartItems.length);
      state.cartItems.map((cartItem) =>
        console.log("Cart items are " + cartItem)
      );
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;

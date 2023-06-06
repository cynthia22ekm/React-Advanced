import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "../API/api";
import { CartItemType } from "../pages/Store/Store";

export interface ShoppingCartState {
  cartItems: CartItemType[];
}

const initialState: ShoppingCartState = {
  cartItems: [],
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      state.cartItems.push({
        id: action.payload.id,
        title: action.payload.title,
        quantity: 1,
        image: action.payload.image,
      });
      state.cartItems.map((cartItem) => {});
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;

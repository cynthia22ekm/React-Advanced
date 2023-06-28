import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../pages/Store/Store";
import { ProductType } from "../data/DataType";

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
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cartItems.length
        ? state.cartItems.filter(
            (cartItem) => cartItem.id === action.payload.id
          ).length
          ? state.cartItems.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                cartItem.quantity = cartItem.quantity + 1;
              }
            })
          : state.cartItems.push({
              id: action.payload.id,
              title: action.payload.title,
              quantity: 1,
              image: action.payload.image,
            })
        : state.cartItems.push({
            id: action.payload.id,
            title: action.payload.title,
            quantity: 1,
            image: action.payload.image,
          });
    },
    removeFromCart: (state, action: PayloadAction<CartItemType>) => {
      if (action.payload.quantity > 1) {
        state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem.quantity = cartItem.quantity - 1;
          }
        });
      } else if (action.payload.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
    },
    addMoreQuantity: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity = cartItem.quantity + 1;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, addMoreQuantity } =
  ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;

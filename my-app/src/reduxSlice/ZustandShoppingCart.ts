import { create } from "zustand";
import { CartItemType } from "../pages/Store/Store";
import { ProductType } from "../data/DataType";

interface ShoppingCartState {
  cartItems: CartItemType[];
  addToCart: (cartItem: ProductType) => void;
  removeFromCart: (cartItem: CartItemType) => void;
  addMoreQuantity: (cartItem: CartItemType) => void;
}

export const useShoppingCartStore = create<ShoppingCartState>((set, get) => ({
  cartItems: [],
  addToCart: (cartItem) => {
    let carItems = get().cartItems;
    if (get().cartItems.filter((item) => item.id === cartItem.id).length > 0) {
      carItems.map((item) => {
        if (item.id === cartItem.id) {
          item.quantity = item.quantity + 1;
        }
      });
      set({ cartItems: [...carItems] });
    } else {
      set({
        cartItems: [
          ...carItems,
          {
            id: cartItem.id,
            title: cartItem.title,
            quantity: 1,
            image: cartItem.image,
          },
        ],
      });
    }
    if (get().cartItems.length == 0) {
      set((state) => ({
        cartItems: [
          ...state.cartItems,
          {
            id: cartItem.id,
            title: cartItem.title,
            quantity: 1,
            image: cartItem.image,
          },
        ],
      }));
    }
  },
  removeFromCart: (cartItem) => {
    if (cartItem.quantity === 1) {
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== cartItem.id),
      }));
    } else {
      let carItems = get().cartItems;
      carItems.map((item) => {
        if (item.id === cartItem.id) {
          item.quantity = item.quantity - 1;
        }
      });
      set({ cartItems: [...carItems] });
    }
  },
  addMoreQuantity: (cartItem) => {
    let carItems = get().cartItems;
    carItems.map((item) => {
      if (item.id === cartItem.id) {
        item.quantity = item.quantity + 1;
      }
    });
    set({ cartItems: [...carItems] });
  },
}));

//Reference: https: //tsh.io/blog/zustand-react/
//Reference: https: //dev.to/franklin030601/using-zustand-with-react-js-9di
import { create } from "zustand";
import { ProductType } from "../data/DataType";

interface ProductState {
  products: ProductType[];
  addProducts: (product: ProductType) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  addProducts: (newProduct: ProductType) =>
    set((state) => ({ products: [...state.products, newProduct] })),
}));

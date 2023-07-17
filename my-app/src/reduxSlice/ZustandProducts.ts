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

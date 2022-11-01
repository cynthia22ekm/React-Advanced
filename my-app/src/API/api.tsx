import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], void>({
      query: () => ({ url: `/Products` }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

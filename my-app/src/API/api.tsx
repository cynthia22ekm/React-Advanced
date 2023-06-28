import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../data/DataType";

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
export default productsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIProductType } from "../data/DataType";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<APIProductType[], void>({
      query: () => ({ url: `/Products` }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export default productsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, category, sort, page, limit, minPrice, maxPrice, rating, brands }) => ({
        url: '/products',
        params: { search, category, sort, page, limit, minPrice, maxPrice, rating, brands },
      }),
    }),
    getBrands: builder.query({
      query: () => '/products/brands',
    }),
    getCategories: builder.query({
      query: () => '/products/categories',
    }),
  }),
});

export const { useGetProductsQuery, useGetBrandsQuery, useGetCategoriesQuery } = productApi;

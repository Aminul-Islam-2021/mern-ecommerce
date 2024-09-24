import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, category, sort, page, limit, minPrice, maxPrice }) => {
        let queryStr = `products?page=${page || 1}&limit=${limit || 10}`;
        if (search) queryStr += `&search=${search}`;
        if (category) queryStr += `&category=${category}`;
        if (sort) queryStr += `&sort=${sort}`;
        if (minPrice) queryStr += `&price[gte]=${minPrice}`;
        if (maxPrice) queryStr += `&price[lte]=${maxPrice}`;
        return queryStr;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/product" }),
  tagTypes: ["Product"], // This tag will allow invalidation
  endpoints: (builder) => ({
    // Create a new product
    createProduct: builder.mutation({
      query: (product) => ({
        url: "create-product",
        method: "POST",
        body: product,
        headers: {
          // 'Content-Type': 'multipart/form-data' is automatically set by the browser when using FormData
        },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    // Get/Fetch all products
    getProducts: builder.query({
      query: ({ search, category, sort, page, limit, minPrice, maxPrice }) => {
        // Define the base API endpoint for products
        let queryStr = `all-products?page=${page || 1}&limit=${limit || 10}`;

        // Append filters and sorting options if provided
        if (search) queryStr += `&search=${search}`;
        if (category) queryStr += `&category=${category}`;
        if (sort) queryStr += `&sort=${sort}`;
        if (minPrice) queryStr += `&price[gte]=${minPrice}`;
        if (maxPrice) queryStr += `&price[lte]=${maxPrice}`;

        // Return the complete URL
        return {
          url: queryStr, // URL is now correctly formatted
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    getAllProducts: builder.query({
      query: ({
        search,
        category,
        sort,
        page,
        limit,
        minPrice,
        maxPrice,
        rating,
        brands,
      }) => {
        // Filter out undefined parameters
        const params = {
          ...(search && { search }),
          ...(category && { category }),
          ...(sort && { sort }),
          ...(page && { page }),
          ...(limit && { limit }),
          ...(minPrice && { minPrice }),
          ...(maxPrice && { maxPrice }),
          ...(rating && { rating }),
          ...(brands && { brands }),
        };

        return {
          url: "all-products",
          params,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    // Get single Product
    getSingleProductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    updateProductById: builder.mutation({
      query: ({ id, productData }) => ({
        url: `update-product/${id}`,
        method: "PUT",
        body: productData,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `delete-product/${id}`, // DELETE request to the backend
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }], // Invalidate cache to refresh product list after deletion
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSingleProductByIdQuery,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} = productApi;

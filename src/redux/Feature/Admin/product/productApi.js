import baseApi from '../../../Api/baseApi';
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product-key/create",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Product')
    }),

    // Get Products
    getProduct: builder.query({
      query: () => ({
        url: "/product-key",
      }),
      providesTags: getTagsByModuleName('Product')
    }),

    // Update Product
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product-key/update/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Product')
    }),

    // Delete Product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product-key/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: getTagsByModuleName('Product')
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

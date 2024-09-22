import baseApi from '../../../Api/baseApi'; 
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Order
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/create", // Updated to /orders/create
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Order'), // Updated to 'Order'
    }),

    // Get Orders
    getOrder: builder.query({
      query: () => ({
        url: "/orders", // Updated to /orders
      }),
      providesTags: getTagsByModuleName('Order'), // Updated to 'Order'
    }),

    // Update Order
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/update/${id}`, // Updated to /orders/update/{id}
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Order'), // Updated to 'Order'
    }),

    // Delete Order
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/delete/${id}`, // Updated to /orders/delete/{id}
        method: "DELETE",
      }),
      invalidatesTags: getTagsByModuleName('Order'), // Updated to 'Order'
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;

export default orderApi;

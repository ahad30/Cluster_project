import { getTagsByModuleName } from '@/redux/Tag/Tag';
import baseApi from '../../Api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        url: "/admins/login",
        headers: {
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Admin'), 
    }),

    getAdmin: builder.query({
      query: (id) => {
        const token = localStorage.getItem('authToken'); 
        return {
          url: `/admins/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: getTagsByModuleName('Admin'), 
    }),

    updateAdmin: builder.mutation({
      query: ({ id, data }) => {
        const token = localStorage.getItem('authToken');
        return {
          url: `/admins/update/${id}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: getTagsByModuleName('Admin'), 
    }),

    changePassword: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem('authToken');
        return {
          url: "/admins/change-password",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: getTagsByModuleName('Admin'), 
    }),

  }),
});

export const {
  useLoginMutation,
  useGetAdminQuery,
  useUpdateAdminMutation,
  useChangePasswordMutation,
} = authApi;

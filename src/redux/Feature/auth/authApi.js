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
    }),

    getAdmin: builder.query({
      query: (id) => {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        return {
          url: `/admins/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Add Authorization header
          },
        };
      },
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
    }),

  }),
});

export const {
  useLoginMutation,
  useGetAdminQuery,
  useUpdateAdminMutation,
  useChangePasswordMutation,
} = authApi;

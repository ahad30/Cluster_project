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

  }),
});

export const { 
  useLoginMutation, 
} = authApi;

import baseApi from '../../../Api/baseApi';
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const trialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create Trial
    addTrial: builder.mutation({
      query: (data) => ({
        url: "/free-trials/create",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: getTagsByModuleName('Trial'),
    }),

    // Get Trials
    getTrials: builder.query({
      query: () => ({
        url: "/free-trials",
      }),
      providesTags: getTagsByModuleName('Trial'),
    }),
  }),
});

export const {
  useAddTrialMutation,
  useGetTrialsQuery,
} = trialApi;

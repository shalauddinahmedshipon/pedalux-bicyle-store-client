import { baseApi } from "@/redux/api/baseApi";


const userApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({  
    getAllUsers: builders.query({
      query: ({ page = 1, limit = 10, filters }) =>{
        let url = `/users?page=${page}&limit=${limit}`;
        if (filters?.status) url += `&status=${filters.status}`;
        if (filters?.role) url += `&role=${filters.role}`;
          return  {
              url:url,
              method:"GET"
              }    
      },
      providesTags: ['user'],
    }),
    getSingleUser: builders.query({
      query: (userId) =>{
          return  {
              url:`/users/${userId}`,
              method:"GET"
      }    
      },
      providesTags: ['user'],
    }),
    getMyProfile: builders.query({
      query: () =>{
          return  {
              url:`/users/my-profile`,
              method:"GET"
      }    
      },
      providesTags: ['user'],
    }),
    changeUserStatus: builders.mutation({
      query: ({ userId, status }) => ({
        url: `/users/change-status`,
        method: 'PATCH',
        body: { userId, status },
      }),
      invalidatesTags: ['user'],
    }),
    updateProfile: builders.mutation({
      query: ({name}) => ({
        url: `/users/update-profile`,
        method: 'PATCH',
        body: {name},
      }),
      invalidatesTags: ['user'],
    }),
    updateUserRole: builders.mutation({
      query: ({ userId, role }) => ({
        url: `/users/update-role`,
        method: 'PATCH',
        body: { userId, role },
      }),
      invalidatesTags: ['user'],
    }),
    deleteUser: builders.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['user'],
    }),
  }),
})

export const {useUpdateProfileMutation,useGetAllUsersQuery,useGetSingleUserQuery,useGetMyProfileQuery,useChangeUserStatusMutation,useUpdateUserRoleMutation,useDeleteUserMutation}=userApi
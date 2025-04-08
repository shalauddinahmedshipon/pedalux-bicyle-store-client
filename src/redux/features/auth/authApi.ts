import { baseApi } from "@/redux/api/baseApi";

const authApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({  
    signUp: builders.mutation({
      query: (userInfo) =>{
          return  {
              url:'/users/register',
              method:"POST",
              body:userInfo
              }    
      }
    }),
    signIn: builders.mutation({
      query: (userInfo) =>{
          return  {
              url:'/auth/login',
              method:"POST",
              body:userInfo
              }    
      }
    }),
    changePassword: builders.mutation({
      query: (data) =>{
          return  {
              url:'/auth/change-password',
              method:"POST",
              body:data
              }    
      }
    }),
  }),
})

export const {useSignUpMutation,useSignInMutation,useChangePasswordMutation}=authApi
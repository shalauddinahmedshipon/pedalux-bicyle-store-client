import { baseApi } from "@/redux/api/baseApi";

const orderApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({  
    createOrder: builders.mutation({
      query: (orderData) =>{
          return  {
              url:'/orders/create-order',
              method:"POST",
              body:orderData
              }    
      }
    }),
    verifyOrder: builders.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    // signIn: builders.mutation({
    //   query: (userInfo) =>{
    //       return  {
    //           url:'/auth/login',
    //           method:"POST",
    //           body:userInfo
    //           }    
    //   }
    // }),
  }),
})

export const {useCreateOrderMutation,useVerifyOrderQuery}=orderApi
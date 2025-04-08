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
      },
      invalidatesTags:['order']
    }),
    getAllOrders: builders.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags:['order']
    }),
    verifyOrder: builders.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
      providesTags:['order']
    }),
    updateOrderStatus: builders.mutation({
      query: ({orderId,status}) =>{
          return  {
              url:`/orders/${orderId}`,
              method:"PATCH",
              body:{status}
              }    
      },
      invalidatesTags:['order']
    }),
    deleteOrder: builders.mutation({
      query: (id) =>{
          return  {
              url:`/orders/${id}/soft-delete`,
              method:"PATCH",
              }    
      },
      invalidatesTags:['order']
    }),
  }),
})

export const {useDeleteOrderMutation,useCreateOrderMutation,useVerifyOrderQuery,useGetAllOrdersQuery,useUpdateOrderStatusMutation}=orderApi
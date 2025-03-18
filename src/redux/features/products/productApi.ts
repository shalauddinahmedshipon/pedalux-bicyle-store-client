import { baseApi } from "@/redux/api/baseApi";

const productApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({
    getAllProducts: builders.query({
      query: ({page=1,limit=9}) => (
        {
        url:`/products?page=${page}&limit=${limit}`,
        method:"GET"
        }
      ),
      transformResponse:(response)=>{
        return{
          data:response?.data,
          meta:response?.meta
        }
      }
    }),
  }),
})

export const {useGetAllProductsQuery}=productApi
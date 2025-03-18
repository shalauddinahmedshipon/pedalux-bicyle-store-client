import { baseApi } from "@/redux/api/baseApi";

const productApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({
    getAllProducts: builders.query({
      query: ({page=1,limit=9,search,filters}) =>{
 let queryString=`/products?page=${page}&limit=${limit}&search=${search}`;
 if(filters?.category) queryString+=`&category=${filters.category}`
         console.log(queryString) 
          return  {
              url:queryString,
              method:"GET"
              }
          
   
      },
      transformResponse:(response)=>{
        return{
          data:response?.data,
          meta:response?.meta
        }
      }
    }),
    getAllCategory: builders.query({
      query: () =>{

          return  {
              url:'/categories',
              method:"GET"
              }
          
   
      },
      transformResponse:(response)=>{
        return{
          data:response?.data,
 
        }
      }
    }),
  }),
})

export const {useGetAllProductsQuery,useGetAllCategoryQuery}=productApi
import { baseApi } from "@/redux/api/baseApi";

const productApi =baseApi.injectEndpoints({
  endpoints: (builders) => ({
    getAllProducts: builders.query({
      query: ({page=1,limit=9,search,filters}) =>{
 let queryString=`/products?page=${page}&limit=${limit}&search=${search}`;
 if(filters?.category) queryString+=`&category=${filters.category}`
 if(filters?.brand) queryString+=`&brand=${filters.brand}`
 if(filters?.price?.gte) queryString+=`&price[gte]=${filters.price.gte}`
 if(filters?.price?.lte) queryString+=`&price[lte]=${filters.price.lte}`
 if(filters?.models?.length){
  queryString+=filters.models.map((model:string)=>`&model=${model}`).join("");
 }
 if (filters?.stock) {
  if (filters.stock === "inStock") queryString += `&stock[gte]=1`;
  if (filters.stock === "outOfStock") queryString += `&stock[lte]=0`;
}
         console.log(queryString) 
          return  {
              url:queryString,
              method:"GET"
              }
      },
      transformResponse:(response:any)=>{
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
      transformResponse:(response:any)=>{
        return{
          data:response?.data,
 
        }
      }
    }),
  }),
})

export const {useGetAllProductsQuery,useGetAllCategoryQuery}=productApi
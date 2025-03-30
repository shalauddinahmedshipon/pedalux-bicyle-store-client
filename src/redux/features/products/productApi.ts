import { baseApi } from "@/redux/api/baseApi";

const productApi =baseApi.injectEndpoints({
endpoints: (builders) => ({
createProduct: builders.mutation({
    query: (productData) =>{
        return {
            url:'/products/create-product',
            method:"POST",
            body:productData
            }    
    }
  }),
getAllProducts: builders.query({
query: ({page=1,limit=9,search="",filters}) =>{
 let queryString=`/products?page=${page}&limit=${limit}&search=${search}`;
 if(filters?.category) queryString+=`&category=${filters.category}`
 if(filters?.brand) queryString+=`&brand=${filters.brand}`
 if(filters?.sort) queryString+=`&sort=${filters.sort}`
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
getSingleProduct: builders.query({
      query: (id) =>{

          return  {
              url:`/products/${id}`,
              method:"GET"
              }
          
   
      },
      transformResponse:(response:any)=>{
        return{
          data:response?.data,
 
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
updateProduct: builders.mutation({
      query: ({ productId,updatedData}) => ({
        url: `/products/${productId}`,
        method: 'PATCH',
        body:updatedData,
      }),
      invalidatesTags: ['user'],
    }),
deleteProduct: builders.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['product'],
    }), 
  }),
  })


export const {useGetAllProductsQuery,useGetSingleProductQuery,useGetAllCategoryQuery,useDeleteProductMutation,useUpdateProductMutation,useCreateProductMutation}=productApi
import { baseApi } from "@/redux/api/baseApi";

const categoryApi =baseApi.injectEndpoints({
endpoints: (builders) => ({
createCategory: builders.mutation({
    query: (categoryData) =>{
        return {
            url:'/categories/create-category',
            method:"POST",
            body:categoryData
            }    
    },
    invalidatesTags:["category"]
  }),
getAllCategory: builders.query({
query: () =>{
 
          return  {
              url:"/categories",
              method:"GET"
              }
      },
      providesTags:["category"],
      transformResponse:(response:any)=>{
        return{
          data:response?.data,
        }
      }
    }),

getSingleCategory: builders.query({
      query: (id) =>{
          return  {
              url:`/categories/${id}`,
              method:"GET"
              }
      },
      transformResponse:(response:any)=>{
        return{
          data:response?.data,
        }
      }
      ,providesTags:["category"]
    }),
updateCategory: builders.mutation({
      query: ({ categoryId,updatedData}) => ({
        url: `/categories/${categoryId}`,
        method: 'PATCH',
        body:updatedData,
      }),
      invalidatesTags: ["category"],
    }),
deleteCategory: builders.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'Delete',
      }),
      invalidatesTags: ["category"],
    }), 
  }),
  })


export const {useCreateCategoryMutation,useGetAllCategoryQuery,useGetSingleCategoryQuery,useUpdateCategoryMutation,useDeleteCategoryMutation}=categoryApi
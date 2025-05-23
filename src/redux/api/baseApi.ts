import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';

const baseQuery =fetchBaseQuery({
  baseUrl:import.meta.env.VITE_PROJECT_URL,
  // baseUrl:"https://pedaluxe-bicyle-store-server-b4-a4.vercel.app/api",
  credentials:'include',
  prepareHeaders:(headers,{getState})=>{
    const token =(getState() as RootState).auth?.token;
    if(token){
      headers.set('authorization',`${token}`);
    }
    return headers;
  }
});



export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
  tagTypes:["product","user","category","order"]
})


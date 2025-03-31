import AppForm from "@/components/forms/AppForm"
import AppInput from "@/components/forms/AppInput"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { useGetSingleCategoryQuery, useUpdateCategoryMutation } from "@/redux/features/category/categoryApi"
import { categorySchema } from "@/schema/productSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { toast } from "sonner"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"
import Loader from "@/components/share/Loader"

export function UpdateCategory({id}:{id:string}) {
  const [open, setOpen] = useState(false); 
  const {data:categoryData,isLoading}=useGetSingleCategoryQuery(id);
  const [updateCategory]=useUpdateCategoryMutation();

  const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>,defaultValues:Record<string,unknown>|undefined)=>{

//get updated fields value only 
const updatedData = Object.keys(data).reduce((acc,key)=>{

if(defaultValues&&data[key]!==defaultValues[key]&&data[key]!==""){
 acc[key]=data[key]
}
return acc
},{} as Record<string,unknown>) 
     
     if(!Object.keys(updatedData).length){
       toast.info("No Change detected!...")
       return
     }
     
     const args ={
       categoryId:categoryData?.data?._id,updatedData
     }

      const id = toast.loading("Creating...")
      try {
       const res=await updateCategory(args).unwrap();
       toast.success(res.message,{id:id})
       methods.reset(); 
       setOpen(false);   
      } catch (error:any) {
        console.log(error)
        toast.error(error.data.message,{id:id})
      }
    }
if(isLoading) {
  return <Loader/>
}
const previousData = categoryData?.data
const defaultValues={
  name:previousData?.name
}
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger>  <span className="text-2xl text-violet-700 active:scale-95"><CiEdit /></span></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription>

        <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(categorySchema)}>
 
 <AppInput label="Category Name" name="name" type="text" placeholder="Category Name"/>
 <div className="flex justify-end gap-5 mt-5">
 <Button onClick={()=>setOpen(false)} variant="outline">Cancel</Button>
 <Button   type="submit">Update</Button>
 </div>
 </AppForm> 
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

{/* 
*/}
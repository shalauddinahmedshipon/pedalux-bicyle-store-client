import AppForm from "@/components/forms/AppForm"
import AppInput from "@/components/forms/AppInput"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { useCreateCategoryMutation } from "@/redux/features/category/categoryApi"
import { categorySchema } from "@/schema/productSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { IoIosAdd } from "react-icons/io"
import { toast } from "sonner"
import { useState } from "react"


export function CreateCategory() {
  const [open, setOpen] = useState(false); 
  const [createCategory]=useCreateCategoryMutation();
  const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
    console.log(data)
      const id = toast.loading("Creating...")
      try {
       const res=await createCategory(data).unwrap();
       toast.success(res.message,{id:id})
       methods.reset(); 
       setOpen(false);   
      } catch (error:any) {
        console.log(error)
        toast.error(error.data.message,{id:id})
      }
    }
const defaultValues={
  name:""
}
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger><Button variant={"outline"} className="text-rose-500 border-rose-500"><span><IoIosAdd/></span>Add New Category</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription>
        <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(categorySchema)}>
 
 <AppInput label="Category Name" name="name" type="text" placeholder="Category Name"/>
 <div className="flex justify-end gap-5 mt-5">
 <Button onClick={()=>setOpen(false)} variant="outline">Cancel</Button>
 <Button   type="submit">Create</Button>
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
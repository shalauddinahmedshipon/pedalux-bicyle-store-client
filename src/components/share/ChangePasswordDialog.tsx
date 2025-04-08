import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import { IoIosArrowForward } from "react-icons/io"
import AppForm from "../forms/AppForm"
import AppInput from "../forms/AppInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { changePasswordSchema } from "@/schema/authSchemaValidation"
import { useChangePasswordMutation } from "@/redux/features/auth/authApi"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "@/redux/features/auth/authSlice"

export function ChangePasswordDialog() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [changePassword]=useChangePasswordMutation();
      const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
      const id = toast.loading("please! wait a few second...")
      try {
       const res=await changePassword(data).unwrap();
       toast.success(res.message,{id:id})
       methods.reset();
       dispatch(logout());
       navigate('/sign-in')
       
      } catch (error:any) {
        console.log(error)
        toast.error(error.data.message,{id:id})
      }
    
    }
    
    const defaultValues={oldPassword:"",newPassword:"",confirmPassword:""}
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className="flex justify-between items-center w-full border rounded-md p-2 font-semibold">
    <p>Change Password</p>
    <IoIosArrowForward />
  </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Make changes to your password here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(changePasswordSchema)}>
      <div className="space-y-4 md:space-y-6  " >
                 
                  
                  <div>
                  <AppInput label="Old Password" name="oldPassword" type="password" placeholder="Old Password ****"/>
                  </div>
                  <div>
                  <AppInput label="New Password" name="newPassword" type="password" placeholder="New Password ****"/>
                  </div>
                  <div>
                  <AppInput label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password ****"/>
                  </div>
                  
          <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
                 
              </div>
              </AppForm>
       
      </DialogContent>
    </Dialog>
  )
}

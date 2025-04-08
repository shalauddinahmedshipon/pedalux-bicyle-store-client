import AppForm from "@/components/forms/AppForm";
import AppInput from "@/components/forms/AppInput";
import Loader from "@/components/share/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetMyProfileQuery, useUpdateProfileMutation } from "@/redux/features/users/userApi";
import {  updateProfileSchema } from "@/schema/authSchemaValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";


const ProfileSetting = () => {
  const {data:myProfile,isLoading}=useGetMyProfileQuery(undefined);
  const [updateProfile]=useUpdateProfileMutation();

  const onSubmit=async(data:FieldValues)=>{
    const id = toast.loading("please! wait a few second...")
    try {
     const res=await updateProfile({name:data?.name}).unwrap();
     toast.success(res.message,{id:id})

   
    } catch (error:any) {
      console.log(error)
      toast.error(error.data.message,{id:id})
    }
  
  }
  if(isLoading)return <div className="w-full h-full left-[5%] fixed"> <Loader/></div>
  const defaultValues={email:myProfile?.data?.email,name:myProfile?.data?.name}
  return (
    <div>
       <Card className="md:w-[550px] w-[300px] p-5 mx-5 my-5 lg:mt-10 lg:mx-10 shadow-lg">
      <CardHeader>
        <CardTitle>Profile Account</CardTitle>
        <CardDescription>you can update your name and password</CardDescription>
      </CardHeader>
      <CardContent>
      <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(updateProfileSchema)}>
      <div className="space-y-4 md:space-y-6  " >
                 
                   <div className="relative">
                   <CiEdit className="absolute right-5 text-xl top-10"/>
                  <AppInput label={`Name`} name="name" type="text" placeholder="Your Name"/>
                  </div>
                   <div>
                  <AppInput disabled label="Email" name="email" type="email" placeholder="Your Email"/>
                  </div>
                
                
        <div className="flex justify-end">
      <Button type="submit">Save Changes</Button>
      </div>
                 
              </div>
              </AppForm>
      </CardContent>
    
    </Card>
    </div>
  );
};

export default ProfileSetting;
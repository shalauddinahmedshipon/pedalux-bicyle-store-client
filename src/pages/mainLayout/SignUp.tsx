import AppForm from "@/components/forms/AppForm";
import AppInput from "@/components/forms/AppInput";
import { signupSchema } from "@/schema/authSchemaValidation";
import { Button } from "@/components/ui/button";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { setUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const navigate=useNavigate();
  const [signUp]=useSignUpMutation();
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
  const id = toast.loading("please wait a few second!...")
  try {
   const res=await signUp(data).unwrap();
   if(!res?.data?.accessToken){
    throw new Error("Invalid response")
   };
   const user = verifyToken(res?.data?.accessToken);
   dispatch(setUser({
    token:res?.data?.accessToken,
    user:user
   }))
   toast.success(res.message,{id:id})
   methods.reset();
   navigate('/')
  } catch (error:any) {
    console.log(error)
    toast.error(error.data.message,{id:id})
  }

}

const defaultValues={name:"",email:"",password:""}
if(token){
  return <Navigate to={"/"}/>
}
  return (
    <section className="lg:flex lg:flex-row items-center justify-between  bg-white w-full ">
      {/* image  */}
      <div className="w-1/2 lg:block h-screen hidden ">
<img src="/src/assets/login.jpg" className="h-full w-full object-cover" alt="" />
      </div>

      {/* content */}
      <div className="lg:w-1/2 w-full my-12 lg:my-0">
            <div className="w-full flex justify-center">
            <div className=" space-y-4 md:space-y-6 sm:p-8 w-lg">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Create an account
              </h1>
      <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(signupSchema)}>
          <div className="space-y-4 md:space-y-6  ">
          <div>
            <AppInput label="Name" name="name" type="text" placeholder="Your Name"/>
                    
                  </div>
                  <div>
                  <AppInput label="Email" name="email" type="email" placeholder="Your Email"/>
                  </div>
                  <div>
                  <AppInput label="Password" name="password" type="password" placeholder="Password ****"/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                    
                  </div>
         <Button type="submit" className="w-full">
         Sign in
         </Button>
         <Link to={'/sign-in'}>
         <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <span  className="font-medium hover:underline text-rose-500">Sign In</span>
                  </p>
         </Link>


            </div>       
                 
              </AppForm>
              </div>
            </div>
      </div>
    </section>
  );
};

export default SignUp;
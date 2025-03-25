import AppForm from "@/components/forms/AppForm";
import AppInput from "@/components/forms/AppInput";
import { signinSchema } from "@/components/schema/authSchemaValidation";
import { Button } from "@/components/ui/button";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { setUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignIn = () => {
    
    const navigate = useNavigate();
    const token = useAppSelector(useCurrentToken);
    const { state: locationState } = useLocation();
    const [signIn]=useSignInMutation();
    const dispatch = useAppDispatch();

    const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
    const id = toast.loading("please! wait a few second...")
    try {
     const res=await signIn(data).unwrap();
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
     if (locationState) {
      const { redirectTo } = locationState ;
      navigate(`${redirectTo.pathname}`);
    }else{
      navigate('/');
    }
    // if(token)
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
    <div className="bg-[url('/src/assets/signup.webp')] bg-cover py-24 flex justify-center">
       <div className="  lg:my-0 bg-white/80 backdrop-blur-xs w-sm">
            <div className="w-full flex justify-center">
            <div className=" space-y-4 md:space-y-6  w-full p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
              Sign in to your account
              </h1>
  <AppForm  onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(signinSchema)}>
      <div className="space-y-4 md:space-y-6  " >
                 
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
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
         <Button className="w-full">
         Sign in
         </Button>
         <Link to={'/sign-up'}>
         <p className="text-sm font-light text-gray-950 ">
         Don’t have an account yet?<a href="#" className="font-medium hover:underline text-rose-500 ml-1">Sign up</a>
                  </p>
         </Link>
                 
              </div>
              </AppForm>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SignIn;
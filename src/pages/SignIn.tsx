import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="bg-[url('/src/assets/signup.webp')] bg-cover py-24 flex justify-center">
       <div className="  lg:my-0 bg-white/80 backdrop-blur-xs w-sm">
            <div className="w-full flex justify-center">
            <div className=" space-y-4 md:space-y-6  w-full p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
              Sign in to your account
              </h1>
      <form className="space-y-4 md:space-y-6  " action="#">
                 
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
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
                 
              </form>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SignIn;
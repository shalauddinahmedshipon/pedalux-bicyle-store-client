import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({children}:{children:ReactNode}) => {
  const token=useAppSelector(useCurrentToken);
  if(!token){
    return <Navigate to={'/sign-in'} replace={true}/>
  }
  return children
};

export default ProtectedRoutes;
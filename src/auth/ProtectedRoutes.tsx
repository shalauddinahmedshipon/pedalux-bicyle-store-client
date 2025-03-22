import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = ({children}:{children:ReactNode}) => {
  const location=useLocation();
  const token=useAppSelector(useCurrentToken);
  if(!token){
    return <Navigate to={'/sign-in'} replace={true} state={{redirectTo: location }} />
  }
  return children
};

export default ProtectedRoutes;
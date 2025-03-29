import { useCurrentToken, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = ({children,role}:{children:ReactNode,role?:"admin"|"customer"}) => {
  const location=useLocation();
  const token=useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);
  if(!token){
    return <Navigate to={'/sign-in'} replace={true} state={{redirectTo: location }} />
  }
  if(role && user?.role!==role){
    return <Navigate to={"/"} />
  }
  return children
};

export default ProtectedRoutes;
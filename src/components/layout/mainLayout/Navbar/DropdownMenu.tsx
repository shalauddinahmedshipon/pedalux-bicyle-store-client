import { FaRegCircleUser } from "react-icons/fa6";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { LogOutIcon } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

export function Menu() {
  const dispatch = useDispatch();
  const user = useAppSelector(useCurrentUser);
  const navigate=useNavigate();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
            <span className="text-4xl text-white bg-rose-500 rounded-full hidden lg:flex"> <FaRegCircleUser /></span>
        </MenubarTrigger>
        <MenubarContent className="bg-white/70 backdrop-blur-xs ">
       <Link to={`/dashboard/${user?.role}`}>
       <MenubarItem>
          <RxDashboard /> Dashboard
          </MenubarItem>
       </Link>
          <MenubarItem onClick={()=>{dispatch(logout());
            navigate('/sign-in')
          }}>
          <LogOutIcon className="text-red-500"/> Logout
          </MenubarItem>  
        </MenubarContent>
      </MenubarMenu>
  
    </Menubar>
  )
}

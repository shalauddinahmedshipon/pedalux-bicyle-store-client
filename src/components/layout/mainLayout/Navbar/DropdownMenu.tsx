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
import { logout } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
            <span className="text-4xl text-white bg-rose-500 rounded-full hidden lg:flex"> <FaRegCircleUser /></span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
          <RxDashboard /> Dashboard
          </MenubarItem>
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

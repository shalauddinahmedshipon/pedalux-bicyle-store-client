import { Sidebar, SidebarContent,  SidebarGroup, SidebarGroupContent,  SidebarHeader,  SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CiSettings, CiShoppingBasket } from "react-icons/ci";
import { FaBox, FaJediOrder, FaList, FaUsers } from "react-icons/fa6";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { RxDashboard, RxHome } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from './../../../assets/Black and White Modern Bicycle Shop Logo (3) (1).png'

const AppSidebar = () => {
  const user = useAppSelector(useCurrentUser);
  const location=useLocation();
  const dispatch = useAppDispatch();
  const adminLinks = [
    { path: "/dashboard/admin", label: "Dashboard", icon: <RxDashboard /> },
    { path: "/dashboard/admin/manage-users", label: "Manage Users", icon: <FaUsers /> },
    { path: "/dashboard/admin/manage-category", label: "Manage Category", icon: <FaList /> },
    { path: "/dashboard/admin/manage-products", label: "Manage Products", icon: <FaBox /> },
    { path: "/dashboard/admin/manage-orders", label: "Manage Orders", icon: <FaJediOrder /> },
    { path: "/dashboard/admin/profile-settings", label: "Profile Settings", icon: <CiSettings /> },
  ];

  const userLinks = [
    { path: "/dashboard/customer/my-orders", label: "My Orders", icon: <CiShoppingBasket /> },
    { path: "/dashboard/customer/profile-settings", label: "Profile Settings", icon: <IoMdSettings /> },
  ];

  const links = user?.role === "admin" ? adminLinks : userLinks;
  return (
    <div >
        <Sidebar className="bg-white">
          <SidebarHeader>    
          <div className="mx-auto">
          <Link to={"/"}>
            <img className="w-32" src={logo}/>
            </Link>
            </div>
        

          </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
        
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem onClick={()=>item.label==="Profile Settings"&&window.location.reload()}  key={item.label}>
                  <SidebarMenuButton  className="text-sm p-5" isActive={location.pathname===item.path}  asChild>
                    <NavLink  to={item.path}>
                    <span>{item.icon}</span>
                      <span >{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
               <NavLink to={"/"}>
               <SidebarMenuItem >
                  <SidebarMenuButton asChild>
                  <div className="text-lg p-5">
                <span ><RxHome/></span>
                <span>Back To Home</span>
                </div>    
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </NavLink>
              <SidebarMenuItem >
                  <SidebarMenuButton asChild>
                   
                <div className="text-lg p-5" onClick={()=>dispatch(logout())}>
                <span className="text-red-500"><IoMdLogOut/></span>
                <span>Logout</span>
                </div>
                  
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </div>
  );
};

export default AppSidebar;
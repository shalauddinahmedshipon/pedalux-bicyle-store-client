
import { CiMenuBurger } from "react-icons/ci";
import "../../../../styles/navbar.css"
import { IoCartOutline } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "react-router-dom";





const Navbar = () => {


const routes =[
  {path:"/",label:"Home"},
  {path:"/products",label:"Products"},
  {path:"/About",label:"About"},
  {path:"/contact",label:"Contact"},
]

  return (
   
<nav className="flex justify-between items-center mx-2 md:mx-8 my-1">
         {/* nav start  */}
     <div>
      {/* logo  */}
     <div className="w-32">
     <img  src="/src/assets/Black and White Modern Bicycle Shop Logo (3) (1).png" alt="" />
     </div>
     </div>
      
      {/* nav center*/}
     <div >
  <ul className="lg:flex gap-8 hidden">
    {
      routes.map(route=>(
      <NavLink key={route.path}
      className={({isActive})=>isActive? "active-link":"nav-link"}
        to={route.path}><li >{route.label}</li></NavLink>
      ))
    }
    
    
    
  </ul>
     </div>


    {/* nav end  */}
    <div className="flex justify-center items-center gap-6">
   
    <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full hidden lg:flex">
    Sign Up
    </button>
    </div>

    
    <Sheet>
    <SheetTrigger asChild className="flex lg:hidden">
  <button className="text-2xl" aria-label="Open Navigation Menu">
    <CiMenuBurger />
  </button>
  </SheetTrigger>

      <SheetContent className="pr-10">
      <SheetClose  asChild> 
<div>
<ul className="pl-5 mt-8 text-rose-500 text-lg">
    {
      routes.map(route=>(
        <NavLink 
        key={route.path}
        className={({ isActive }) => 
          isActive ? "py-2 text-rose-700 font-semibold " : "py-2  text-rose-500"
        } 
        to={route.path}>
        <li className="my-2">{route.label}</li>
      </NavLink>
  
      ))
    }
 
 
     
    </ul>
    
  <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-2 font-medium rounded-full w-full mt-5 mx-5">
    Sign Up
    </button>
</div>
  </SheetClose> 
      </SheetContent>
    </Sheet>

               
</nav>
  

  );
};

export default Navbar;
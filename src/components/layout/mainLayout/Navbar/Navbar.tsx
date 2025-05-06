import { CiMenuBurger } from "react-icons/ci";
import "../../../../styles/navbar.css"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { useCurrentToken, useCurrentUser } from "@/redux/features/auth/authSlice";
import { Menu } from "./DropdownMenu";
import { LogOutIcon, SearchIcon } from "lucide-react";
import logo from "../../../../assets/Black and White Modern Bicycle Shop Logo (3) (1).png"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/types/Product.types";

const Navbar = () => {
 const [search,setSearch]=useState("");
 const [searchProducts,setSearchProducts]=useState<null|IProduct[]>(null);
 const {data:products,isLoading}=useGetAllProductsQuery({search});

useEffect(()=>{
if(search){
setSearchProducts(products?.data);
}else{
  setSearchProducts(null)
}
 },[search])




const token = useAppSelector(useCurrentToken);
const user = useAppSelector(useCurrentUser);
const routes =[
  {path:"/",label:"Home"},
  {path:"/products",label:"Products"},
  {path:"/About",label:"About"},
  {path:"/contact",label:"Contact"},
]

  return (
   
   <div onClick={()=>setSearchProducts(null)} className="sticky top-0 z-50 bg-white shadow-lg py-1" >
      <nav className="flex justify-between items-center mx-2 md:mx-8  ">
         {/* nav start  */}
     <div>
      {/* logo  */}
     <div className="w-24">
     <img  src={logo} alt="logo" />
     </div>
     </div>
      
      {/* nav center*/}
     <div >
  <ul className="xl:flex gap-8 hidden">
    {
      routes.map(route=>(
      <NavLink key={route.path}
      className={({isActive})=>isActive? "active-link":"nav-link"}
        to={route.path}><li >{route.label}</li></NavLink>
      ))
    }
    
  </ul>
     </div>

        {/* search input  */}
 <div className="relative">
  <SearchIcon className="absolute text-gray-600 right-5 top-1.5 font-light"/>
 <Input value={search} onChange={(e)=>setSearch(e.target.value)}  className="lg:w-[350px] md:w-[350px] rounded-full" type="text"  placeholder="Search bicycles..." />

<div onClick={()=>setSearchProducts(null)} className="w-full absolute z-50 bg-white  mt-2  rounded-2xl">
{
  !isLoading&&
  searchProducts?.map((product:IProduct)=>
  <Link to={`/product-details/${product._id}`}>
  <div className="  p-0.5 flex relative hover:bg-gray-200 hover:rounded-2xl">
    <span className="absolute top-2 right-2">
      <SearchIcon size={15}/>
    </span>
    <div className="flex items-stretch gap-2">
      <img className="md:w-16 md:h-10 w-10 h-8 rounded-2xl" src={product.imageUrl} alt={product.name} />
     <div>
     <h1 className="text-sm">{product.name}</h1>
    <div className="flex gap-3">
    <span className="text-xs text-gray-600  ">{product.category.name}</span>
    <span className="text-xs text-gray-600 hidden md:flex">{product.model}</span>
    <span className="text-xs text-gray-600 hidden md:flex">{product.brand}</span>
    </div>
     </div>
    </div>
  
  </div>
  </Link>
  )
}
</div>

 </div>



    {/* nav end  */}
    <div className="flex justify-center items-center gap-6">
      {
        token?   
       
      <Menu/>
        :
        <Link to={'/sign-up'}>
        <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full hidden xl:flex">
          Sign Up
          </button></Link>
      }


    </div>

    {/* sm and md device  */}
    <Sheet>
    <SheetTrigger asChild className="flex xl:hidden">
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
 {
 token && user?.role==="customer"&&
<div>
<NavLink 
        className={({ isActive }) => 
          isActive ? "py-2 text-rose-700 font-semibold " : "py-2  text-rose-500"
        } 
        to={`/dashboard/${user?.role}/my-orders`}>
        <li className="my-2">My Orders</li>
    </NavLink>
<NavLink 
        className={({ isActive }) => 
          isActive ? "py-2 text-rose-700 font-semibold " : "py-2  text-rose-500"
        } 
        to={`/dashboard/${user?.role}/profile-settings`}>
        <li className="my-2">Settings</li>
    </NavLink>

</div>
}
 {token && user?.role==="admin"&&
   <NavLink 
        className={({ isActive }) => 
          isActive ? "py-2 text-rose-700 font-semibold " : "py-2  text-rose-500"
        } 
        to={`/dashboard/${user?.role}`}>
        <li className="my-2">Dashboard</li>
    </NavLink>
 }

     
    </ul>
    {
      token?
      <Link to={'/sign-in'}> 
  <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-2 font-medium rounded-full w-full mt-5 mx-5 flex items-center justify-center gap-4">
    <LogOutIcon/>
    Logout
    </button>
    </Link>:
    <Link to={'/sign-up'}> 
    <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-2 font-medium rounded-full w-full mt-5 mx-5">
      Sign Up
      </button>
      </Link>

    }
    
</div>
  </SheetClose> 
      </SheetContent>
    </Sheet>

               
</nav>
   </div>
  

  );
};

export default Navbar;
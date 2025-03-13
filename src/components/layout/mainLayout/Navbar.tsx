import { Input } from "@/components/ui/input";
import { CiSearch, CiUser } from "react-icons/ci";
import "../../../styles/Navbar.css"
import { IoCartOutline, IoMenuSharp } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [openSidebar,setOpenSideBar] = useState<boolean>(false);
  return (
   
<nav className="flex justify-between items-center  mx-8 my-1">
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
    
      <li className="active-link">Home</li>
      <li className="nav-link">Products</li>
      <li className="nav-link">About</li>
      <li className="nav-link">Contact</li>
    
    
  </ul>
     </div>


    {/* nav end  */}
    <div className="flex justify-between items-center gap-6">
      {/* input field  lg*/}
    <div className="relative hidden lg:block">
    <CiSearch className="absolute right-2 text-2xl top-1.5 text-gray-900"/>
    <Input type="text" placeholder="Search" className="pl-6"/>
    </div>
    <div className="block lg:hidden">
    <CiSearch className=" text-3xl text-gray-900"/>
    </div>
    <div>
    <GrFavorite className="text-2xl " />
    </div>
    <div>
    <IoCartOutline className="text-3xl" />
    </div>
    <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full hidden lg:block">
    Sign Up
    </button>
    </div>



               {/* nav item for small device  */}
<div onClick={()=>setOpenSideBar(!openSidebar)} className='block lg:hidden '>
 {/* Overlay */}
 <div className={`  ${openSidebar?'fixed inset-0 bg-black/10 bg-opacity-50 ':' '}`}></div>

{
  !openSidebar&& <IoMenuSharp onClick={()=>setOpenSideBar(!openSidebar)} className='text-3xl text-gray-600 relative z-10' />
}

  <div   className={`bg-white shadow-2xl fixed transition-all duration-1000 z-50 top-0   flex flex-col   py-2  w-[300px]   ${openSidebar?'right-0 ':'-right-[300px]'} h-screen`}>
  

   <div >
  <ul className="pl-5">
    
      <li className="active-link-small py-2">Home</li>
      <li className="nav-link-small py-2">Products</li>
      <li className="nav-link-small py-2">About</li>
      <li className="nav-link-small py-2">Contact</li>
     
    </ul>
 
  <div className="pl-5 ">
  <li className=" py-2 flex items-center justify-baseline border-b-[3px] mt-4 border-rose-500 font-semibold"><CiUser className="text-2xl"/> Sign Up</li>
  </div>
     </div>
 
    
  </div>


</div>  

</nav>
  

  );
};

export default Navbar;

import { CiMenuBurger } from "react-icons/ci";
import "../../../../styles/navbar.css"
import { IoCartOutline } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"





const Navbar = () => {

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
    
      <li className="active-link">Home</li>
      <li className="nav-link">Products</li>
      <li className="nav-link">About</li>
      <li className="nav-link">Contact</li>
    
    
  </ul>
     </div>


    {/* nav end  */}
    <div className="flex justify-center items-center gap-6">
    <div>
    <IoCartOutline className="text-3xl" />
    </div>
    <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full hidden lg:flex">
    Sign Up
    </button>
    </div>

    
    <Sheet>
    <SheetTrigger asChild className="flex lg:hidden">
        <button className="text-2xl"><CiMenuBurger/></button>
    </SheetTrigger>

      <SheetContent className="pr-10">
   
   <ul className="pl-5 mt-8 text-rose-500 text-lg">
   <SheetClose asChild>
   <li className=" py-2 text-red-700 font-semibold">Home</li>
  </SheetClose> 
   <SheetClose asChild>
   <li className=" py-2 text-red-700 font-semibold">Products</li>
  </SheetClose> 
 
   
   <SheetClose asChild>
    <li className=" py-2"><li className=" py-2">About</li></li>
  </SheetClose> 
   <SheetClose asChild>
    <li className=" py-2"> <li className=" py-2">Contact</li></li>
  </SheetClose> 
     
    </ul>
    <SheetClose asChild>
  <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full mx-10">
    Sign Up
    </button>
  </SheetClose> 
      </SheetContent>
    </Sheet>

               
</nav>
  

  );
};

export default Navbar;
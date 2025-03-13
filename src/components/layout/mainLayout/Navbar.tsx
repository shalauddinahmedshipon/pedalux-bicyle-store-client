import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import "../../../styles/Navbar.css"
import { IoCartOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";


const Navbar = () => {
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
  <ul className="flex gap-8">
    
      <li className=" active-link">Home</li>
      <li className="nav-link">Products</li>
      <li className="nav-link">About</li>
      <li className="nav-link">Contact</li>
    
  </ul>
     </div>


    {/* nav end  */}
    <div className="flex justify-between items-center gap-6">
    <div className="relative">
    <CiSearch className="absolute right-2 text-2xl top-1.5 text-gray-900"/>
    <Input type="text" placeholder="Search" className="pl-6"/>
    </div>
    <div>
    <GrFavorite className="text-2xl " />
    </div>
    <div>
    <IoCartOutline className="text-3xl" />
    </div>
    <button className="text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white border-rose-500 border-[1.5px] active:scale-95 px-6 py-1 font-medium rounded-full">
    Sign Up
    </button>
    </div>
</nav>
  

  );
};

export default Navbar;
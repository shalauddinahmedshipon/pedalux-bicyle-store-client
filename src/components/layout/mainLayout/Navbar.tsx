import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
  return (
   
<nav className="flex justify-between items-center">
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
    
      <li>Home</li>
      <li>Products</li>
      <li>About</li>
      <li>Contact</li>
    
  </ul>
     </div>



    {/* nav end  */}
    <div className="flex justify-between items-center gap-6">
    <div className="relative">
    <CiSearch className="absolute right-2 text-2xl top-1.5 text-gray-500"/>
    <Input type="text" placeholder="Search" className="pl-6"/>
    </div>
    <button className="text-rose-600 hover:bg-rose-500 hover:text-white border-rose-600 border px-6 py-1 font-medium rounded-full">
    Sign Up
    </button>
    </div>
</nav>
  

  );
};

export default Navbar;
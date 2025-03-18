import { useState } from "react";
// import { TProduct } from "../ui/homePage/ProductFeatured";
import { CiSearch } from "react-icons/ci";



const ProductCard = ({item}) => {
  console.log(item)
const [isHover,setIsHover]=useState(false)
  return (
  <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="max-w-72 shadow-xl border relative">
    {/* opacity  */}
    <div className={`w-full h-[300px] absolute ${isHover&&"bg-white/90   z-20 transition-all duration-200"}  flex justify-center items-center`}>
   {
    isHover&&
    <button className=" px-6 py-1  border text-rose-600 border-rose-600 flex items-center gap-2  rounded-full active:scale-95">
     <CiSearch className="text-lg"/> View Detail</button>
   } 
    </div>
    {/* image  */}
    <div className="w-full h-[300px] overflow-hidden relative p-5">
      {/* logo  */}
     <div className="w-12 absolute z-10 top-0.5 left-0.5">
     <img  src="/src/assets/Black and White Modern Bicycle Shop Logo (3) (1).png" alt="" />
     </div>
      <img src={item?.imageUrl} alt={item?.name} className={`w-full h-full bg-cover  ${isHover&&"scale-125 transition-all duration-200"}`} />
    </div>
    {/* card body  */}
    <div className="p-5">
      <h3 className="font-semibold">{item?.name}</h3>
      <p>{item?.brand}</p>
      <p>{item?.category?.name}</p>
      <small className="text-rose-500">TK.{item?.price}</small>
  
    </div>
  </div>
  );
};

export default ProductCard;

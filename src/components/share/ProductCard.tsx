import { useState } from "react";
// import { TProduct } from "../ui/homePage/ProductFeatured";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


export interface TCategory {
  _id?: string;
  name: string;
  slug: string;
  isDeleted:boolean
  createdAt?: Date;
  updatedAt?: Date;
}


export interface IProduct  {
  _id?: string;
  name: string;
  brand: string;
  model: string;
  category:TCategory;
  price: number;
  stock: number;
  description?: string;
  imageUrl: string;
  isDeleted?:boolean
  createdAt?: Date;
  updatedAt?: Date;
}

type TProps ={
  item:IProduct
}

const ProductCard = ({item}:TProps) => {
const [isHover,setIsHover]=useState(false)
  return (
  <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="max-w-72 shadow-xl border relative">
    {/* opacity  */}
    <div className={`w-full h-[300px] absolute ${isHover&&"bg-white/80   z-20 transition-all duration-200"}  flex justify-center items-center`}>
   {
    isHover&&
    <Link to={`/product-details/${item?._id}`}>
    <button className=" px-6 py-1  border-2 text-rose-500 border-rose-500 flex items-center gap-2  rounded-full active:scale-95 font-medium">
    <CiSearch className="text-2xl"/> View Detail</button>
    </Link>
   } 
    </div>
    {/* image  */}
    <div className="w-full h-[300px] overflow-hidden relative p-5">
      {/* logo  */}
     <div className="w-12 absolute z-10 top-0.5 left-0.5">
     <img  src="/src/assets/Black and White Modern Bicycle Shop Logo (3) (1).png" alt="" />
     </div>
     {
   item?.stock===0&&
   <div className="w-20 absolute z-10 top-0 right-0">
   <img  src="https://previews.123rf.com/images/123vector/123vector1506/123vector150600044/41490808-illustration-of-red-sold-stamp-design-icon.jpg" alt="" />
   </div>
     }
    
      <img src={item?.imageUrl} alt={item?.name} className={`w-full h-full bg-cover  ${isHover&&"scale-110 transition-all duration-200"}`} />
    </div>
    {/* card body  */}
    <div className="p-5">
      <h3 className="font-semibold">{item?.name}</h3>
      <p>{item?.brand}</p>
      <p>{item?.category?.name}</p>
      <small className="text-rose-500"><span className="text-xl">&#2547;</span>{item?.price}</small>
  
    </div>
  </div>
  );
};

export default ProductCard;

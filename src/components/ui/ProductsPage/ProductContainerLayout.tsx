import ProductCard from "@/components/share/ProductCard";

import { Input } from "../input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import Pagination from "@/components/share/Pagination";


const ProductContainerLayout = () => {
  const [search,setSearch]=useState("");
  const [page,setPage]=useState(1);
  const limit=3
const {data:products,isLoading}=useGetAllProductsQuery({page,limit});

// {page,limit,search,...filter}
console.log(products?.data)
if(isLoading)return <div>Loading...</div>
  return (
    <section className="w-full flex mt-24 min-h-screen gap-10">
      {/* lg device  */}
      <aside className="lg:w-1/3  shadow-lg hidden lg:flex bg-white">
        sidebar
      </aside>
      <main className="lg:w-2/3 w-full  shadow-lg pb-10 bg-white">
      <header>
<div className="flex justify-between items-center py-5 px-5">
  <h3 className="text-2xl font-semibold">Product List</h3>
 <div className="relative">
  <SearchIcon className="absolute right-5 top-1.5 text-rose-500"/>
 <Input className="lg:w-[350px] w-[200px]" type="text"  placeholder="Search bicycles..." />
 </div>
  <div>
    Short by
  </div>
</div>

      </header>
      {/* container  */}
  <div>
  <div className="flex justify-center px-6">
     <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
        {products?.data?.map((item) => (
          <div key={item._id}>
            <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>
  </div>
  


  {/* pagination  */}
 <div className="my-10">
 <Pagination
        currentPage={page} 
        totalPages={products?.meta?.totalPage} 
        onPageChange={setPage} 
      />
 </div>
      </main>
    </section>
  );
};

export default ProductContainerLayout;
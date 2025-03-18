import ProductCard, { IProduct } from "@/components/share/ProductCard";
import { Input } from "../input";
import { FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useGetAllCategoryQuery, useGetAllProductsQuery } from "@/redux/features/products/productApi";
import Pagination from "@/components/share/Pagination";
import { InputSelect } from "@/components/share/InputSelect";



const ProductContainerLayout = () => {
  const [search,setSearch]=useState("");
  const [page,setPage]=useState(1);
  const [category,setCategory]=useState("")
  const limit=15
const {data:products,isLoading}=useGetAllProductsQuery({page,limit,search,filters:{
  category
}});
const {data:categoryData}=useGetAllCategoryQuery(undefined);

const options =[{label:"All",value:"all"},...(categoryData?.data.map((item)=>(
  {
    label:item?.name,
    value:item?._id
  }
))||[])]


console.log(category)
console.log(options)
if(isLoading)return <div>Loading...</div>

  return (
    <section className="w-full flex mt-24 min-h-screen gap-10">
      {/* lg device  sidebar*/}
      <aside className="lg:w-1/3  shadow-lg hidden lg:block bg-white px-8">
      <p className="flex items-center gap-2 text-2xl font-semibold text-center my-5">Filters <FilterIcon/></p>

      {/*filter by category  */}
  <div>
  <InputSelect label="Select a category" options={options} onSelected={setCategory}/>
  </div>
      </aside>
      <main className="lg:w-2/3 w-full  shadow-lg pb-10 bg-white">
      <header>
<div className="flex justify-between items-center py-5 px-5">
  <h3 className="text-2xl font-semibold">Product List</h3>
 <div className="relative">
  <SearchIcon className="absolute right-5 top-1.5 text-rose-500"/>
 <Input value={search} onChange={(e)=>setSearch(e.target.value)} className="lg:w-[350px] w-[200px]" type="text"  placeholder="Search bicycles..." />
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
        {products?.data?.map((item:IProduct) => (
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
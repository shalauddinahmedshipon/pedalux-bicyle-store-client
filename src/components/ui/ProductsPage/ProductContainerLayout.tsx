import ProductCard, { IProduct } from "@/components/share/ProductCard";
import { Input } from "../input";
import { FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useGetAllCategoryQuery, useGetAllProductsQuery } from "@/redux/features/products/productApi";
import Pagination from "@/components/share/Pagination";
import { InputSelect } from "@/components/share/InputSelect";
import PriceRangeSlider from "./PriceRangeSlider";
import InputCheckbox from "@/components/share/InputCheckbox";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../sheet";



const ProductContainerLayout = () => {
  const [search,setSearch]=useState("");
  const [page,setPage]=useState(1);
  const [category,setCategory]=useState("");
  const [brand,setBrand]=useState("");
  const [priceRange, setPriceRange] = useState({ gte: 0, lte: 5000 });
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState(""); 
  const [sort, setSort] = useState(""); 
  const limit=15
const {data:products,isLoading}=useGetAllProductsQuery({page,limit,search,filters:{
  category,
  price:priceRange,
  brand,
  models:selectedModels,
  stock:selectedStock,
  sort
}});
const {data:categoryData}=useGetAllCategoryQuery(undefined);

const categoryOptions =[{label:"All",value:"all"},...(categoryData?.data.map((item:any)=>(
  {
    label:item?.name,
    value:item?._id
  }
))||[])]

const brandOptions=[
  {"label":"All","value":"all"},
  { "label": "Trek", "value": "Trek" },
  { "label": "Giant", "value": "Giant" },
  { "label": "Schwinn", "value": "Schwinn" },
  { "label": "Huffy", "value": "Huffy" },
  { "label": "Cannondale", "value": "Cannondale" },
  { "label": "Specialized", "value": "Specialized" },
  { "label": "Rad Power", "value": "Rad Power" },
  { "label": "Mongoose", "value": "Mongoose" },
  { "label": "Haro", "value": "Haro" }
]

const modelOptions = [
  { label: "SP-2900", value: "SP-2900" },
  { label: "RCX-500", value: "RCX-500" },
  { label: "SC-200", value: "SC-200" },
  { label: "CW-100", value: "CW-100" },
  { label: "UE-700", value: "UE-700" },
  { label: "MG-550", value: "MG-550" },
  { label: "CG-300", value: "CG-300" },
  { label: "PB-500", value: "PB-500" },
  { label: "SS-360", value: "SS-360" },
  { label: "FPX-250", value: "FPX-250" },
];
const stockOptions = [
  { label: "All", value: "all" },
  { label: "In Stock", value: "inStock" },
  { label: "Out Of Stock", value: "outOfStock" },
];

const sortOptions = [

  { label: "Price: Low to High", value: "priceAsc" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Stock: Low to High", value: "stockAsc" },
  { label: "Stock: High to Low", value: "stockDesc" },
];


console.log(category)

if(isLoading)return <div className="bg-black">Loading...</div>

  return (
    <section className="w-full flex mt-10 lg:mt-24 min-h-screen gap-10">
                    {/* lg device  sidebar*/}
      <aside className="lg:w-1/3  shadow-lg hidden lg:block bg-white px-8">
      <p className="flex items-center gap-2 text-2xl font-semibold text-center my-5">Filters <FilterIcon/></p>

      {/*filter by category  */}
  <div>
  <InputSelect label="Select a category" options={categoryOptions} onSelected={setCategory}/>
  </div>
  {/* filter by price range  */}
  <div className="mt-10">
    <PriceRangeSlider onChange={setPriceRange}/>
  </div>

   {/* filter by brand  */}
   <div className="mt-10">
  <InputSelect label="Filter by Brand Name" options={brandOptions} onSelected={setBrand}/>
  </div>
   {/* filter by multiple model using checkbox   */}
   <div className="mt-10">
 <InputCheckbox label="Model" onSelected={setSelectedModels} options={modelOptions} values={selectedModels}/>
  </div>

    {/*filter by stock  */}
    <div className="my-10">
  <InputSelect label="Available" options={stockOptions} onSelected={setSelectedStock}/>
  </div>
      </aside>


        {/* product container  */}

  <main className="lg:w-2/3 w-full  shadow-lg pb-10 bg-white">
<header className="w-full">



   {/* sm device slider  */}
   <div className="lg:hidden flex justify-end mr-5">
  <Sheet >
    <SheetTrigger asChild className="block lg:hidden ">
  <button  className="text-2xl px-5 py-0.5 border border-rose-500 " >
  <p className="flex items-center gap-2  text-lg font-semibold text-center ">Filters <FilterIcon className="text-rose-500"/></p>

  </button>
</SheetTrigger>

      <SheetContent side="left" >

     
      <aside className="lg:w-1/3 overflow-y-scroll my-10 block lg:hidden bg-white px-8 ">
     
     
      <div>
     
 <InputSelect label="Select a category" options={categoryOptions} onSelected={setCategory}/>

 </div>
     
     {/*filter by category  */}

 {/* filter by price range  */}
 <div className="mt-10">
   <PriceRangeSlider onChange={setPriceRange}/>
 </div>

  {/* filter by brand  */}
  <div className="mt-10">
 <InputSelect label="Filter by Brand Name" options={brandOptions} onSelected={setBrand}/>
 </div>
  {/* filter by multiple model using checkbox   */}
  <div className="mt-10">
<InputCheckbox label="Model" onSelected={setSelectedModels} options={modelOptions} values={selectedModels}/>
 </div>

   {/*filter by stock  */}
   <div className="my-10">
 <InputSelect label="Available" options={stockOptions} onSelected={setSelectedStock}/>
 </div>
     </aside>
  
      </SheetContent>

    </Sheet>
  </div>
<div className="flex flex-col lg:flex-row justify-between items-center py-5 px-5 gap-5 w-full">
                   


 <div >
 <h3 className="text-2xl font-semibold">Product List</h3>
  
 </div>
    {/* search  */}
 <div className="relative">
  <SearchIcon className="absolute right-5 top-1.5 "/>
 <Input value={search} onChange={(e)=>setSearch(e.target.value)} className="lg:w-[250px] w-[300px] rounded-full" type="text"  placeholder="Search bicycles..." />
 </div>

    {/* filter by sorting  */}
    <div className="">

  <InputSelect label="Sort By" options={sortOptions} onSelected={setSort}/>
            
  </div>
</div>

      </header>
      {/* container  */}
  <div className="mt-10">
  <div className="flex justify-center px-6">
     <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8 ">
        {products?.data?.map((item:IProduct) => (
          <div key={item._id}>
            <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>
  </div>
  


  {/* pagination  */}
 <div className="my-14">
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
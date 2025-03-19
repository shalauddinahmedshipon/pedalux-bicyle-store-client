import ProductCard, { IProduct } from "@/components/share/ProductCard";
import { Input } from "../input";
import { FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useGetAllCategoryQuery, useGetAllProductsQuery } from "@/redux/features/products/productApi";
import Pagination from "@/components/share/Pagination";
import { InputSelect } from "@/components/share/InputSelect";
import PriceRangeSlider from "./PriceRangeSlider";
import { Checkbox } from "../checkbox";
import InputCheckbox from "@/components/share/InputCheckbox";



const ProductContainerLayout = () => {
  const [search,setSearch]=useState("");
  const [page,setPage]=useState(1);
  const [category,setCategory]=useState("");
  const [brand,setBrand]=useState("");
  const [priceRange, setPriceRange] = useState({ gte: 0, lte: 5000 });
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const limit=15
const {data:products,isLoading}=useGetAllProductsQuery({page,limit,search,filters:{
  category,
  price:priceRange,
  brand,
  models:selectedModels
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



console.log(category)

if(isLoading)return <div className="bg-black">Loading...</div>

  return (
    <section className="w-full flex mt-24 min-h-screen gap-10">
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
   <div className="my-10">
 <InputCheckbox label="Model" onSelected={setSelectedModels} options={modelOptions} values={selectedModels}/>
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
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useGetAllProductsQuery, useGetSingleProductQuery } from "@/redux/features/products/productApi";
import ProductCard, { IProduct } from "@/components/share/ProductCard";
import Loader from "@/components/share/Loader";



const ProductDetails = () => {
  const { id } = useParams();
  const {data:bicycleData}=useGetSingleProductQuery(id);
  const bicycle=bicycleData?.data
  const { data: relatedBicyclesData,isLoading} = useGetAllProductsQuery(
    { filters: { category: bicycle?.category } },
    { skip: !bicycle?.category } 
  );

const relatedBicycles=relatedBicyclesData?.data

console.log(relatedBicycles,bicycle)
  if (isLoading) return <Loader/>

  return (
    <div className=" mx-auto md:px-10 px-5 py-10 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:items-stretch items-center ">
        {/* Bicycle Image */}
        <motion.img 
          src={bicycle?.imageUrl} 
          alt={bicycle?.name} 
          className="rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Bicycle Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{bicycle?.name}</h1>
          <p className="text-lg text-gray-600 mb-2">Brand: {bicycle?.brand}</p>
          <p className="text-lg text-gray-600 mb-2">Model: {bicycle?.model}</p>
          <p className="text-lg text-gray-600 mb-2">Category: {bicycle?.category}</p>
          <p className="text-xl font-semibold text-rose-500 mb-4"><span className="text-3xl">&#2547;</span>{bicycle?.price}</p>
          <p className="text-lg text-gray-700 mb-6">{bicycle?.description.slice(0,600)}</p>
          
          {/* Buy Now Button  and quantity button*/}
          <div className="flex  gap-5">
            <div className="flex ">
      <button className="w-10 text-3xl active:scale-95 bg-gray-100">-</button>
      <span className=" text-xl flex items-center justify-center w-10  bg-gray-100">1</span>
      <button className="w-10 text-3xl active:scale-95 bg-gray-100">+</button>
            </div>
        <div className="w-full">
       <Link to={'/cart'}>
       <Button className="bg-rose-500 hover:bg-rose-600 text-white  py-3 w-full text-lg">
            Buy Now
          </Button></Link>
        </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
    
      <section className=" mt-24">
      <h6 className="text-rose-500 mb-1">Top Picks for You</h6>
      <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">Related Products</h2>
       {/* Grid Layout for Cards */}
     <div className="flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {relatedBicycles?.map((item:IProduct) => (
          <div key={item?._id}>
          <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>

     
    </section>
    </div>
  );
};

export default ProductDetails;
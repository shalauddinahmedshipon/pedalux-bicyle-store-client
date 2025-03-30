import ProductCard from "@/components/share/ProductCard";
import { Button } from "../button";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import Loader from "@/components/share/Loader";
import { Link } from "react-router-dom";
import { IProduct } from "@/types/Product.types";


const ProductFeatured = () => {
const {data:products,isLoading}=useGetAllProductsQuery({});
console.log(products?.data)
if(isLoading) return <Loader/>
  return (
    <section className="md:px-10 px-5 mt-24">
      <h6 className="text-rose-500 mb-1">Top Picks for You</h6>
      <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">Explore our most loved bicycles</h2>
       {/* Grid Layout for Cards */}
     <div className="flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {products?.data?.slice(0,8)?.map((item:IProduct) => (
          <div key={item?._id}>
          <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
      <Link to={"/products"}> <Button > View All Bicycles →</Button></Link>
      </div>
    </section>
  );
};

export default ProductFeatured;



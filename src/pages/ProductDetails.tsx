import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGetAllProductsQuery, useGetSingleProductQuery } from "@/redux/features/products/productApi";
import ProductCard, { IProduct } from "@/components/share/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import classNames from "embla-carousel-class-names"
import React from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const {data:bicycleData,isLoading}=useGetSingleProductQuery(id);
  const bicycle=bicycleData?.data
  const { data: relatedBicyclesData } = useGetAllProductsQuery(
    { filters: { category: bicycle?.category } },
    { skip: !bicycle?.category } 
  );
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
   
  )  
const relatedBicycles=relatedBicyclesData?.data

console.log(relatedBicycles,bicycle)
  if (isLoading) return <div className="text-center my-20 text-lg">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
          <p className="text-xl font-semibold text-rose-500 mb-4">Price: ${bicycle?.price}</p>
          <p className="text-lg text-gray-700 mb-6">{bicycle?.description}</p>
          
          {/* Buy Now Button */}
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-lg">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedBicycles?.length > 0 && (
        <div className="mt-16">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedBicycles?.map((bike:IProduct) => (
              <Card key={bike?._id} className="overflow-hidden rounded-lg shadow-lg">
                <CardContent>
                  <img src={bike?.imageUrl} alt={bike?.name} className="w-full h-48 object-cover" />
                  <h3 className="text-lg font-semibold mt-4">{bike?.name}</h3>
                  <p className="text-gray-600">${bike?.price}</p>
                  <Button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
       <section className="md:px-10 px-5 mt-24">
 <h6 className="text-rose-500 mb-1">Related Products</h6>
 <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">Hear from our happy riders!</h2>

<div>
<Carousel
opts={{loop:true}}
  plugins={[plugin.current, classNames()]}
className="w-full px-16 mt-10">
      <CarouselContent className="-ml-1">
        {relatedBicycles?.map((item:IProduct, index:number) => (
          <CarouselItem key={index} className="pl-5 md:basis-1/2   lg:basis-1/3">
            <Card className="mt-10">
           <ProductCard item={item}/>
            </Card>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
    </section>
    </div>
  );
};

export default ProductDetails;
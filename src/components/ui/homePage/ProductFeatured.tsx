import ProductCard from "@/components/share/ProductCard";
import { Button } from "../button";



export type TProduct={

    name: string;
    brand: string;
    model: string;
    category: string;
    price: number;
    stock: number;
    description: string;
    imageUrl: string;

}

const ProductFeatured = () => {
  console.log(products)
  return (
    <section className="md:px-10 px-5 mt-24">
      <h6 className="text-rose-500 mb-1">Top Picks for You</h6>
      <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">Explore our most loved bicycles</h2>
       {/* Grid Layout for Cards */}
     <div className="flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {products.slice(0,8)?.map((item:TProduct, index:number) => (
          <div key={index}>
            <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
       <Button > View All Bicycles →</Button>
      </div>
    </section>
  );
};

export default ProductFeatured;


 const products =[
  {
    "name": "Summit Pro 29",
    "brand": "Trek",
    "model": "SP-2900",
    "category": "Mountain Bikes",
    "price": 1299.99,
    "stock": 10,
    "description": "A rugged mountain bike designed for tough terrains and steep trails.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741951972/41EiL_o9mWL_hxhrop.jpg"
  },
  {
    "name": "Rock Climber X",
    "brand": "Giant",
    "model": "RCX-500",
    "category": "Mountain Bikes",
    "price": 1499.99,
    "stock": 8,
    "description": "A full-suspension mountain bike for high-adrenaline adventures.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741951894/611a82a675538602e76156395a798d0d_uzlyk5.jpg"
  },
  {
    "name": "Sunset Cruiser",
    "brand": "Schwinn",
    "model": "SC-200",
    "category": "Cruiser Bike",
    "price": 799.99,
    "stock": 12,
    "description": "A stylish and comfortable cruiser bike for relaxed rides along the beach or city streets.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741950933/bc2_i4gkce.webp"
  },
  {
    "name": "Classic Wave",
    "brand": "Huffy",
    "model": "CW-100",
    "category": "Cruiser Bike",
    "price": 699.99,
    "stock": 14,
    "description": "A smooth-riding cruiser bike with vintage aesthetics and modern comfort.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741950904/bc5_vu0rqm.jpg"
  },
  {
    "name": "Urban Explorer",
    "brand": "Cannondale",
    "model": "UE-700",
    "category": "Hybrid Bikes",
    "price": 899.99,
    "stock": 10,
    "description": "A versatile hybrid bike perfect for both city commuting and weekend trail rides.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741951847/forevar-x-baike_kwzvol.png"
  },
  {
    "name": "Metro Glide",
    "brand": "Specialized",
    "model": "MG-550",
    "category": "Hybrid Bikes",
    "price": 949.99,
    "stock": 9,
    "description": "A lightweight and efficient hybrid bike designed for urban and suburban rides.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741950904/bc5_rvku2m.webp"
  },
  {
    "name": "City Glide E-Bike",
    "brand": "Trek",
    "model": "CG-300",
    "category": "Electric Bikes",
    "price": 1999.99,
    "stock": 15,
    "description": "A lightweight electric bike perfect for long city rides with pedal-assist technology.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  },
  {
    "name": "PowerBoost 500",
    "brand": "Rad Power",
    "model": "PB-500",
    "category": "Electric Bikes",
    "price": 2199.99,
    "stock": 7,
    "description": "An all-terrain electric bike with a powerful motor and long battery life.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  },
  {
    "name": "Street Stunt 360",
    "brand": "Mongoose",
    "model": "SS-360",
    "category": "BMX Bikes",
    "price": 599.99,
    "stock": 20,
    "description": "A high-performance BMX bike built for tricks, jumps, and skatepark action.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  },
  {
    "name": "Freestyle Pro X",
    "brand": "Haro",
    "model": "FPX-250",
    "category": "BMX Bikes",
    "price": 699.99,
    "stock": 15,
    "description": "A top-tier BMX bike with reinforced frame and smooth maneuverability.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  },
  {
    "name": "Trail King",
    "brand": "Santa Cruz",
    "model": "TK-800",
    "category": "Mountain Bikes",
    "price": 1699.99,
    "stock": 5,
    "description": "An advanced mountain bike with precision handling and shock absorption for extreme trails.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  },
  {
    "name": "Electro Glide X",
    "brand": "Aventon",
    "model": "EGX-750",
    "category": "Electric Bikes",
    "price": 2399.99,
    "stock": 6,
    "description": "A premium electric bike with a sleek design, built for speed and comfort.",
    "imageUrl": "https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg"
  }
]

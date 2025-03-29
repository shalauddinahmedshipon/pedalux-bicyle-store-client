import HeroSection from "@/components/share/HeroSection";
import product from "../../assets/hero3.jpg";
import ProductContainerLayout from "@/components/ui/ProductsPage/ProductContainerLayout";


const Products = () => {

  return (
    <div className="bg-white/50 mb-24">
      <HeroSection imageUrlLg={product} title={"Shop Now"}/>
      <ProductContainerLayout/>
    </div>
  );
};

export default Products;
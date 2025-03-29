
import { Banner } from "@/components/ui/Banner";

import { CustomerReview } from "@/components/ui/homePage/CustomerReviewSection";
import ProductFeatured from "@/components/ui/homePage/ProductFeatured";



const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductFeatured/>
      <CustomerReview/>
    </div>
  );
};

export default Home;
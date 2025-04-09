
import { Banner } from "@/components/ui/Banner";

import { CustomerReview } from "@/components/ui/homePage/CustomerReviewSection";
import OfferSection from "@/components/ui/homePage/OfferSection";
import ProductFeatured from "@/components/ui/homePage/ProductFeatured";



const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductFeatured/>
      <OfferSection/>
      <CustomerReview/>
    </div>
  );
};

export default Home;
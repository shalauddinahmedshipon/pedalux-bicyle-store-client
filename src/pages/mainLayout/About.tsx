import HeroSection from "@/components/share/HeroSection"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from './../../assets/aboutbanner.jpg'
import aboutImage from './../../assets/about2.jpg'

const About = () => {
  return (
    <div>
        {/* Header Section */}
        <HeroSection imageUrlLg={heroImage} title="About"/>
 <div className="min-h-screen bg-white px-4 py-16 lg:px-20">
    
    <div className="max-w-6xl mx-auto text-center mb-16">
    
      <p className="text-lg text-gray-600">
        Welcome to <span className="font-semibold text-rose-500">Peralux</span> — your destination for high-performance bicycles and unbeatable service.
      </p>
    </div>

    {/* Two Column Section */}
    <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-6 text-gray-700">
        <h2 className="text-3xl font-semibold text-rose-500">
          Who We Are
        </h2>
        <p>
          At Peralux, we’re passionate about helping riders of all levels find their perfect bike. From rugged mountain trails to smooth city streets, our curated selection of bicycles delivers performance, comfort, and cutting-edge technology.
        </p>
        <p>
          Since launching in 2024, our mission has been to make quality bicycles more accessible with competitive pricing, full custom accessories, and reliable customer service.
        </p>
        <ul className="list-disc pl-6">
          <li>Expertly curated bicycle collections</li>
          <li>Affordable pricing with seasonal discounts</li>
          <li>Off-road ready, tubeless tires, GPS support, and more</li>
          <li>Bangladesh-wide fast delivery</li>
        </ul>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 w-full">
        <img
          src={aboutImage}
          alt="Bicycle Store"
          className="rounded-2xl shadow-lg object-cover w-full h-96"
        />
      </div>
    </div>
  {/* Mission & Vision */}
  <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
        <div className="p-10 bg-blue-50 rounded-2xl shadow-md ">
          <h3 className="text-3xl font-semibold text-rose-500 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg">
            To empower individuals through mobility. We aim to provide top-quality, eco-friendly bicycles that enhance freedom, health, and adventure.
          </p>
        </div>
        <div className="p-10 bg-purple-50 rounded-2xl shadow-md ">
          <h3 className="text-3xl font-semibold text-rose-500 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg">
            To become the leading bicycle retailer in South Asia by offering exceptional products, excellent service, and a lifestyle of sustainability and fun.
          </p>
        </div>
      </div>
    {/* Stats Section */}
    <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-3xl font-bold text-rose-500">5000+</h3>
        <p className="text-gray-600 mt-2">Happy Riders</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-rose-500">50+</h3>
        <p className="text-gray-600 mt-2">Top Brands</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-rose-500">4.9/5</h3>
        <p className="text-gray-600 mt-2">Customer Satisfaction</p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="max-w-4xl mx-auto mt-24 text-center bg-rose-50 p-10 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Ready to Ride with Us?
      </h2>
      <p className="text-gray-600 mb-6">
        Explore our collection or contact us to learn more about your perfect ride.
      </p>
    <Link to={'/products'}>
    <Button>
        Shop Now
      </Button></Link>
    </div>
  </div>
    </div>
   
  );
};

export default About;

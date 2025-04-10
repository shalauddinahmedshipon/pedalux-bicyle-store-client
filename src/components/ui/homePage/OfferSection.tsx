import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";

const OfferSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const images =['https://res.cloudinary.com/dplg1mhic/image/upload/v1741950904/bc5_vu0rqm.jpg'
    ,'https://res.cloudinary.com/dplg1mhic/image/upload/v1741950933/bc2_i4gkce.webp','https://res.cloudinary.com/dplg1mhic/image/upload/v1741951847/forevar-x-baike_kwzvol.png','https://res.cloudinary.com/dplg1mhic/image/upload/v1741951972/41EiL_o9mWL_hxhrop.jpg','https://res.cloudinary.com/dplg1mhic/image/upload/v1741952022/Photoroom-20240519_175141_20_Large_20_1__CDe-87hvx_chfonw.jpg'
  ]
 

  return (
    <section className="my-24 mx-10 shadow-lg lg:pr-5">
      <div className="flex gap-10 flex-col-reverse lg:flex-row items-center justify-between ">
        
        {/* Left content */}
        <div className="w-full lg:w-3/6 text-gray-700  lg:h-96  p-6 lg:p-10  ">
          <h2 className="text-2xl lg:text-3xl   font-medium leading-tight mb-2">
            For Summer Ride
          </h2>
          <p className="text-rose-600 text-5xl  italic mb-6 font-bold">SALE UP TO 40%</p>
          <p className=" mb-2">
            With full custom accessories – Power Booster, Gaming GPS Support, Tubeless Tires for better riding,
            off-road capable strong tire & metal body. Stylish and strong, ready for any terrain.
          </p>
          <p className=" mb-6">
            Whether you're navigating city streets or taking on mountain trails, our bikes are equipped to elevate your summer experience.
          </p>
         <Link to={'/products'}>
         <Button >
            Shop Now
          </Button></Link>
        </div>

        {/* Right carousel */}
        <div className="w-full lg:w-3/6 ">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current, classNames()]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((url,idx) => (
                <CarouselItem
                  key={idx}
                  className="flex justify-center items-center"
                >
                  <div className="overflow-hidden   ">
                    <img
                      src={url}
                      alt='bicyles'
                      className="w-full h-96 object-contain transition-transform duration-500 hover:scale-105"
                    />
                   
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import banner1 from "../../assets/banner4.jpg"
import banner2 from "../../assets/hero1.jpg"
import banner3 from "../../assets/hero2.jpg"
import banner4 from "../../assets/small4.jpg"
import banner5 from "../../assets/small1.jpeg"
import banner6 from "../../assets/small2.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
   
  )

  return (
    <div className="relative w-full container mx-auto  h-[calc(100vh-80px)]">
      <Carousel
        plugins={[plugin.current, Fade()]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="hidden md:flex">
          {[banner1,banner2,banner3].map((banner,idx) => (
            <CarouselItem key={idx}>
             <div>
             <img className=" h-[calc(100vh-80px)] w-full bg-cover" src={banner} alt="" />
             </div>
          
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselContent className="md:hidden flex">
          {[banner6,banner5,banner4].map((banner,idx) => (
            <CarouselItem key={idx}>
             <div>
             <img className=" h-[calc(100vh-80px)] w-full bg-cover" src={banner} alt="" />
             </div>
          
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Positioning buttons in bottom-left corner */}
       
  
        <div className="absolute bottom-16 right-20 z-10 ">
 <div className="relative">
 <CarouselPrevious className="bg-black/50 absolute left-2 text-white p-2 rounded-full hover:bg-black/70 " />
 <CarouselNext className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
 </div>
</div>



 
      </Carousel>
    </div>
  )
}

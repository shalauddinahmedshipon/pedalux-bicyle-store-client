import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import banner1 from "../../assets/banner1.avif"
import banner2 from "../../assets/banner2.webp"
import banner3 from "../../assets/banner3.webp"
import banner4 from "../../assets/banner4.jpg"



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
        <CarouselContent>
          {[banner1,banner2,banner3,banner4].map((banner,idx) => (
            <CarouselItem key={idx}>
             <div>
             <img className=" h-[calc(100vh-80px)] w-full" src={banner} alt="" />
             </div>
          
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Positioning buttons in bottom-left corner */}
        <div className="absolute bottom-16 right-20 flex gap-2 z-10">
          <CarouselPrevious className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
          <CarouselNext className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
        </div>
      </Carousel>
    </div>
  )
}

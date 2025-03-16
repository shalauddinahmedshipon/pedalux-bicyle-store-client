
import Autoplay from "embla-carousel-autoplay"
import classNames from "embla-carousel-class-names"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react"
import ReviewCard from "../ReviewCard"
import { users } from "@/lib/utils"

export function CustomerReview() {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
     
    )
  
  return (
    <section className="md:px-10 px-5 mt-24">
 <h6 className="text-rose-500 mb-1">What Our Customers Say</h6>
 <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">Hear from our happy riders!</h2>

<div>
<Carousel
opts={{loop:true}}
  plugins={[plugin.current, classNames()]}
className="w-full px-16 mt-10">
      <CarouselContent className="-ml-1">
        {users.map((user, index) => (
          <CarouselItem key={index} className="pl-5 md:basis-1/2   lg:basis-1/3">
            <Card className="mt-10">
            <ReviewCard user={user}/>
            </Card>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
    </section>
   
  )
}


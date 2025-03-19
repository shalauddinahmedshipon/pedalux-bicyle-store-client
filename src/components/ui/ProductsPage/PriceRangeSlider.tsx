import { useState } from "react";
import { Slider } from "../slider";

type TProps = {
  onChange: (range: { gte: number; lte: number }) => void;
  minPrice?: number;
  maxPrice?: number;
 
};
const PriceRangeSlider = ({onChange,minPrice =0, maxPrice =25000 }:TProps) => {
const [priceRange,setPriceRange]=useState([minPrice,maxPrice]);
const handlePriceRange=(value:number[])=>{
if(value.length===2){
setPriceRange([value[0],value[1]]);
onChange({gte:value[0],lte:value[1]});
}
  }
  return (
    <div >
      <label className=" text-gray-700 ">Price Range: <span className="ml-6"><span className="text-2xl">&#2547;</span>{priceRange[0]}  - <span className="text-2xl">&#2547;</span>{priceRange[1]} tk</span></label>
      <Slider
      className="mt-4 max-w-[250px] "
      defaultValue={[minPrice,maxPrice]}
      max={maxPrice}
      min={minPrice}
      step={10}
      onValueChange={handlePriceRange}
    
    /> 
    </div>
  );
};

export default PriceRangeSlider;
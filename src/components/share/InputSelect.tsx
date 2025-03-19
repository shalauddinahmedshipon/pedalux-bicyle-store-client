import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type TProps ={
  options:{
    label:string;
    value:string
  }[],
  onSelected:(value:string)=>void;
  label:string
}

export function InputSelect({options,onSelected,label}:TProps) {
  const handleSelect=(value:string)=>{
    onSelected(value === "all" ? "" : value)
  }
  return (
    <Select onValueChange={(value)=>handleSelect(value)}>
      <SelectTrigger className="w-[250px]">
        <SelectValue  placeholder={`${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
      
   
          {
            options?.map(option=>(
          <SelectItem key={option.value} value={option?.value}>{option?.label}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

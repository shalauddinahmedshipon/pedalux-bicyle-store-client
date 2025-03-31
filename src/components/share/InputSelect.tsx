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
  setCurrentPage?:(value:number)=>void;
  onSelected:(value:string)=>void;
  label:string
}

export function InputSelect({options,onSelected,label,setCurrentPage}:TProps) {
  const handleSelect=(value:string)=>{
    onSelected(value === "all" ? "" : value);
    if(setCurrentPage){
      setCurrentPage(1);
    }
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

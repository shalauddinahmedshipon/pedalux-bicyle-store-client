import { Checkbox } from "../ui/checkbox";

type TCheckboxProps={
  onSelected: (values: string[]) => void;
  values:string[];
  options:{
    label:string;
    value:string
  }[];
  label:string;
}


const InputCheckbox = ({onSelected,values,options,label}:TCheckboxProps) => {
  const handleCheckboxChange=(value:string)=>{
    const newValues = values.includes(value)
    ? values.filter((model) => model !== value) 
    : [...values, value]; 
  onSelected(newValues); 
  }
  return (
    <div>
       <h2 className="text-lg font-bold mb-2">Filter by {label}</h2>
    {
      options.map((option)=>
        <div  key={option.value} className="flex items-center gap-4 mb-2">
           <Checkbox
 checked={values.includes(option.value)}
 onCheckedChange={()=>handleCheckboxChange(option.value)}
 /> 
  <label className="text-sm">{option.label}</label>
        </div>
       
      )
    }
  
    </div>
  );
};

export default InputCheckbox;
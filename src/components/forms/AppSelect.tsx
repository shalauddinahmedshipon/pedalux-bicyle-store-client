import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type TInputProps ={
  label?:string;
  name:string;
  options: {
    value: string;
    label: string;
  }[];
  disabled?:boolean;
  placeholder?:string;
}


const AppSelect = ({label,name,options,placeholder,disabled}:TInputProps) => {
  const {control}=useFormContext();
  return (
    <FormField
          control={control}
          name={name}
          render={({ field,fieldState:{error} }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
              <Select 
                 onValueChange={(value) => field.onChange(value)}
                 value={field.value} 
                disabled={disabled} >
  <SelectTrigger  className="w-full py-6">
    <SelectValue  placeholder={placeholder} />
  </SelectTrigger>
  <SelectContent>
  {options.map((option, idx) => (
              <SelectItem key={idx} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
              </SelectContent>
              </Select>
              </FormControl>
             
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />
  );
};

export default AppSelect;
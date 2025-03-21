import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type TInputProps ={
  label?:string;
  name:string;
  type:string;
  disabled?:boolean;
  placeholder?:string;
}


const AppInput = ({label,name,type,placeholder,disabled}:TInputProps) => {
  const {control}=useFormContext();
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input disabled={disabled} placeholder={placeholder} {...field} />
              </FormControl>
             
              <FormMessage  />
            </FormItem>
          )}
        />
  );
};

export default AppInput;
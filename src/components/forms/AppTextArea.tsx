import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

type TInputProps ={
  label?:string;
  name:string;
  disabled?:boolean;
  placeholder?:string;
  rows:number
}


const AppTextArea = ({label,name,placeholder,disabled}:TInputProps) => {
  const {control}=useFormContext();
  return (
    <FormField
          control={control}
          name={name}
          render={({ field,fieldState:{error} }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
              <Textarea className="py-6 h-36" {...field} ref={field.ref}  disabled={disabled} placeholder={placeholder}   aria-invalid={error ? "true" : "false"}/>
              </FormControl>         
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />
  );
};

export default AppTextArea;
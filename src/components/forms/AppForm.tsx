import { ReactNode } from "react";
import { useForm, FieldValues, FormProvider, UseFormReturn } from "react-hook-form"
type TFormConfig={
  defaultValues?:Record<string,unknown>;
  resolver?:any;
}
type TFormProps={
  onSubmit:(data:FieldValues,
    methods: UseFormReturn<FieldValues>,
    defaultValues?:Record<string,unknown>)=>Promise<void>;
  children:ReactNode;
}&TFormConfig

const AppForm = ({onSubmit,children,defaultValues={},resolver}:TFormProps) => {
  const formConfig:TFormConfig={};
  if(defaultValues){
    formConfig['defaultValues']=defaultValues
  }
  if(resolver){
    formConfig['resolver']=resolver
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit((data)=>onSubmit(data,methods,defaultValues))}>
    {children}
    </form>
    </FormProvider>
  
  );
};

export default AppForm;
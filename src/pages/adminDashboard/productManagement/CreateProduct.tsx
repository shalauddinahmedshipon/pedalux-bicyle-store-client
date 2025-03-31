import AppForm from "@/components/forms/AppForm";
import AppInput from "@/components/forms/AppInput";
import AppSelect from "@/components/forms/AppSelect";
import AppTextArea from "@/components/forms/AppTextArea";
import { Button } from "@/components/ui/button";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { useCreateProductMutation } from "@/redux/features/products/productApi";
import { productSchema } from "@/schema/productSchema";
import { brandOptions, modelOptions } from "@/utils/filterOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CreateProduct = () => {
  const [createProduct]=useCreateProductMutation();
  const {data:categoryData}=useGetAllCategoryQuery(undefined);
  
  const categoryOptions =[...(categoryData?.data.map((item:any)=>(
    {
      label:item?.name,
      value:item?._id
    }
  ))||[])];

  const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
    console.log(data)
  const id = toast.loading("Creating...")
      try {
   const res=  await createProduct(data).unwrap();
  console.log(res.data);
  toast.success(res.message,{id:id})
   methods.reset();
  
      } catch (error:any) {
        console.log(error)
        toast.error(error.data.message,{id:id})
      }
    
    }

const defaultValues = {
  name: "",
  brand: "",
  model: "", 
  category: "",
  price: "",
  stock: "",
  description: "",
  imageUrl: "",
};

   
  return (
 
  <section className="w-[300px] md:w-[400px] lg:w-[800px] ">
    
   <div className="flex justify-between ml-10 w-full mb-10">
   <div className="flex items-center "><span>Product Management</span><IoIosArrowForward /><span>Create Product</span></div>
   <div >
    <Link to={"/dashboard/admin/manage-products"}><Button variant='outline' ><IoIosArrowBack />Back</Button></Link>
    </div>
   </div>

  <div className="bg-white shadow-lg rounded-lg p-8 w-full ml-10 mb-20">
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-10">
      Create New Product
    </h2>
   
    <AppForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={zodResolver(productSchema)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {/* Product Name */}
        <AppInput
          type="text"
          name="name"
          placeholder="Product Name"
          label="Product Name"
        />

        {/* Image URL */}
        <AppInput
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          label="Image URL"
        />

        {/* Brand */}
        <AppSelect
          name="brand"
          placeholder="Select Brand"
          label="Brand"
          options={brandOptions.slice(1, brandOptions.length)}
        />

        {/* Model */}
        <AppSelect
          name="model"
          placeholder="Select Model"
          label="Model"
          options={modelOptions}
        />

        {/* Category */}
        <AppSelect
          name="category"
          placeholder="Select Category"
          label="Category"
          options={categoryOptions}
        />

        {/* Price */}
        <AppInput
          type="number"
          name="price"
          placeholder="Enter Price"
          label="Price"
        />

        {/* Stock */}
        <AppInput
          type="number"
          name="stock"
          placeholder="Available Stock"
          label="Stock"
        />
      </div>

      {/* Description - Full Width */}
      <div className="mt-4">
        <AppTextArea
          rows={6}
          name="description"
          placeholder="Product Description"
          label="Description"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <Button className="w-full md:w-auto px-6 py-2  rounded-md">
          Create Product
        </Button>
      </div>
    </AppForm>
  </div>
</section>

  );
};

export default CreateProduct;
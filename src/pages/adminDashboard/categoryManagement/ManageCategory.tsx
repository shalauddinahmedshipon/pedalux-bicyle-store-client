import Loader from "@/components/share/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AiOutlineDelete } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner";
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { IoIosAdd } from "react-icons/io";



const ManageCategory = () => {
  const {data:categoryData,isLoading}=useGetAllCategoryQuery(undefined);
  const [deleteAction]=useDeleteCategoryMutation();


const handleDelete=async(id:string)=>{
  toast("Are you sure you want to delete?", {
    action: {
      label: "Confirm",
      onClick: async() => {
        const toastId = toast.loading("Deleting...");
    try {
      const res=await deleteAction(id).unwrap();
      toast.success(res.message,{id:toastId})
    } catch (error:any) {
      toast.error(error.message||"Failed to delete!", { id: toastId, duration: 3000 })
    }

      },
    },
    cancel: {
      label: "Cancel",
      onClick: () => toast.info("Deletion canceled"),
    },
  });
}

 if(isLoading)return <div className="w-full h-full left-[5%] fixed"> <Loader/></div>
  return (
    <div className="w-full">
     <div className=" ml-10 mt-10">
<header className="flex flex-col lg:flex-row items-stretch justify-between gap-5 mb-8 w-full">
  <h3 className="text-2xl font-semibold text-black">Category Management</h3>
    <Button variant={"outline"} className="text-rose-500 border-rose-500"><span><IoIosAdd/></span>Add New Category</Button>
</header>

<Table  className="overflow-auto">
  <TableCaption>A list of category</TableCaption>
  <TableHeader>
    <TableRow >
      <TableHead className="w-[250px]">Category Name</TableHead>
      <TableHead className="w-[250px]">Created At</TableHead>
      <TableHead className="w-[250px] text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {categoryData?.data?.map((category:any) => (
          <TableRow key={category._id}>
            <TableCell className="font-medium">{category.name}</TableCell>
            <TableCell>{new Date(category.createdAt).toLocaleString()}</TableCell>
 
            <TableCell >
              <div className="flex justify-end item-center gap-5">
              <span className="text-3xl text-violet-700 active:scale-95"><CiEdit /></span>
              <span onClick={()=>handleDelete(category._id as string)} className="text-xl text-red-600 active:scale-95"><AiOutlineDelete /></span>
              </div>
         </TableCell>
          </TableRow>
        ))}
  </TableBody>
</Table>

 
     </div>
      

    </div>
  );
};

export default ManageCategory;
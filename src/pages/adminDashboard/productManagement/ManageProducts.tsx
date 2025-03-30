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
import Pagination from "@/components/share/Pagination";
import { useState } from "react";
import { InputSelect } from "@/components/share/InputSelect";
import { toast } from "sonner";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/components/types/Product.types";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [page,setPage]=useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const limit =10
  const {data:productData,isLoading}=useGetAllProductsQuery({page,limit,filters:{

  }});
const [deleteAction]=useDeleteProductMutation();
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
// const handleRoleChange=async(userId:string,role:string)=>{
//   const id=toast.loading("Updating...")
// try {
//   console.log(userId,role)
//   const res =await updateRole({userId,role:role}).unwrap();
// toast.success(res.message,{id})
// setSelectedRoles((prev) => ({ ...prev, [userId]: role }));
// setRefreshKey((prev) => prev + 1);
// } catch (error:any) {
//   toast.error(error.data.message||"failed to update",{id})
// }
// }
 
  return (
    <div className="w-full">
     <div className=" ml-10 mt-10">
<header className="flex flex-col lg:flex-row items-stretch justify-between gap-5 mb-8 w-full">
  <h3 className="text-2xl font-semibold text-black">Product Management</h3>
 <div className="flex items-center gap-5">
  
    {/* filter by brand  */}
    {/* <div >
  <InputSelect label="Filter by Role" options={roleOptions} onSelected={setCurrentRole}/>
  </div> */}
   {/* filter by status  */}
   
 </div>
</header>
{
  isLoading?<div className="w-full h-full left-[5%] fixed"> <Loader/></div>:
  <Table key={refreshKey} className="overflow-auto">
  <TableCaption>A list of products</TableCaption>
  <TableHeader>
    <TableRow >
      <TableHead className="w-[150px]">Photo</TableHead>
      <TableHead className="w-[150px]">Name</TableHead>
      <TableHead className="w-[150px]">Brand</TableHead>
      <TableHead className="w-[150px]">Model</TableHead>    
      <TableHead className="w-[150px]">Category</TableHead>
      <TableHead className="w-[150px]">Available in stock</TableHead>
      <TableHead className="w-[150px]">Price</TableHead>
      <TableHead className="w-[150px]">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {productData?.data?.map((product:IProduct) => (
          <TableRow key={product._id } className="h-32">
            <TableCell >
              <div className="w-32 h-32">
                <img className="w-full h-full bg-cover" src={product.imageUrl} alt={product.name} />
              </div>
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell className="pr-14">
              {product.brand}
            </TableCell>
            <TableCell >
              {product.model}
            </TableCell>
       
            <TableCell >
        {product.category.name}
            </TableCell>
            <TableCell >
        {product.stock}
            </TableCell>
            <TableCell >
        <span className="text-3xl">&#2547;</span>
        {product.price}
            </TableCell>

          
            <TableCell >
             <div className="flex items-center justify-start gap-5">
             <Link to={`/update-product/${product._id}`}>
            <span className="text-3xl text-violet-700 active:scale-95"><CiEdit /></span>
              </Link>
              <span onClick={()=>handleDelete(product._id as string)} className="text-2xl text-red-600 active:scale-95"><AiOutlineDelete /></span>
             </div>
              </TableCell>
          </TableRow>
        ))}
  </TableBody>
</Table>
}


 {/* pagination  */}
 <div className="my-14">
 <Pagination
        currentPage={page} 
        totalPages={productData?.meta?.totalPage} 
        onPageChange={setPage} 
      />
 </div>
     </div>
      

    </div>
  );
};

export default ManageProducts;
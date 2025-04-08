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
import { toast } from "sonner";
import { useDeleteOrderMutation, useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "@/redux/features/order/orderApi";
import { TOrder } from "@/types/Order.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem,  SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputSelect } from "@/components/share/InputSelect";
import { orderStatusOptions } from "@/utils/filterOptions";

const ManageOrders = () => {
  const [page,setPage]=useState(1);
  const [selectedStatus, setSelectedStatus] = useState<{ [key: string]: string }>({});
  const [currentStatus,setCurrentStatus]=useState("");
  const limit =10
  const {data:orderData,isLoading}=useGetAllOrdersQuery({page,limit,filters:{status:currentStatus
  }});
  
const [updateStatus]=useUpdateOrderStatusMutation(); 
const [deleteAction]=useDeleteOrderMutation();

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

const handleStatusChange = async (orderId: string, newStatus: string) => {
  const existingStatus = selectedStatus[orderId] || orderData?.data?.find((order:TOrder) => order._id === orderId)?.status;
  if (existingStatus === newStatus) return;

  const toastId = toast.loading("Updating...");
  try {
    const res = await updateStatus({ orderId, status: newStatus }).unwrap();
    toast.success(res.message, { id: toastId });
    setSelectedStatus((prev) => ({ ...prev, [orderId]: newStatus }));
  } catch (error: any) {
    toast.error(error.data?.message || "Failed to update", { id: toastId });
  }
};
const statusOptions = ["pending", "shipped", "completed", "cancelled"];


 if(isLoading) return <div className="w-full h-full left-[5%] fixed "> <Loader/></div>
  return (
    <div className="w-full">
     <div className=" mx-10 mt-10">
<h3 className="text-2xl font-semibold text-black mb-5">Order Management</h3>
<header className="flex flex-col lg:flex-row items-stretch justify-between gap-5 mb-8 w-full">
   {/* filter by status  */}
   <div >
  <InputSelect setCurrentPage={setPage} label="Filter by Status" options={orderStatusOptions} onSelected={setCurrentStatus}/>
  </div>
</header>
<Table className="overflow-auto">
  <TableCaption>A list of orders</TableCaption>
  <TableHeader>
    <TableRow >
      <TableHead className="w-[170px]">Transaction Id</TableHead>
      <TableHead className="w-[170px]">Order Date</TableHead>
      <TableHead className="w-[170px]">Customer Name</TableHead>
      <TableHead className="w-[150px]">Order Status</TableHead>    
      <TableHead className="w-[150px]">Payment Status</TableHead>    
      <TableHead className="w-[170px]">Contact No.</TableHead>
      <TableHead className="w-[150px]">Payment Method</TableHead>
      <TableHead className="w-[150px]">Total Coast</TableHead>
      <TableHead className="w-[150px]">Update Status</TableHead>
      <TableHead className="w-[150px]">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {orderData?.data?.map((order:TOrder) => (
          <TableRow key={order._id } className="h-12">
            <TableCell className="text-rose-500">
            {order.transaction.id}
            </TableCell>
            <TableCell >{new Date(order.createdAt).toLocaleDateString()}</TableCell>
            <TableCell >
              {order.user.name}
            </TableCell>
            <TableCell >
            <Badge className={cn(
    order.status==='pending' && "bg-orange-50 text-orange-600",
    order.status==='shipped' && "bg-blue-50 text-blue-600",
    order.status==='completed' && "bg-green-50 text-green-600",
    order.status==='cancelled' && "bg-red-50 text-red-600"
  )} variant="outline">{order.status}</Badge>
              
            </TableCell>
            <TableCell >
            <Badge className={cn(
    order.paymentStatus==='pending' && "bg-orange-50 text-orange-600",
    order.paymentStatus==='paid' && "bg-green-50 text-green-600",
    order.paymentStatus==='cancel' && "bg-red-50 text-red-600",
  )} variant="outline">{order.paymentStatus}</Badge>
              
            </TableCell>
       
            <TableCell >
        {order.phoneNumber}
            </TableCell>
            <TableCell className="font-semibold text-blue-400 text-center">
        {order.transaction.method}
            </TableCell>
            <TableCell >
        <span className="text-3xl">&#2547;</span>
        {order.totalPrice}
            </TableCell>
            <TableCell >
           <div className="flex gap-3 items-center justify-center">
           <Select onValueChange={(value) => handleStatusChange(order._id as string, value)}>
  <SelectTrigger size="sm">
    <SelectValue placeholder={selectedStatus[order._id!] ?? order.status ?? "Update Status"} />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {statusOptions.map((status) => (
        <SelectItem key={status} value={status}>
          {status}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>

           </div>
            </TableCell>
          
            <TableCell >
             <div className="flex items-center justify-start gap-5">
            
              <span onClick={()=>handleDelete(order._id as string)} className="text-2xl text-red-600 active:scale-95"><AiOutlineDelete /></span>
             </div>
              </TableCell>
          </TableRow>
        ))}
  </TableBody>
</Table>

 {/* pagination  */}
 <div className="my-14">
 <Pagination
        currentPage={page} 
        totalPages={orderData?.meta?.totalPage} 
        onPageChange={setPage} 
      />
 </div>
     </div>
      

    </div>
  );
};

export default  ManageOrders;
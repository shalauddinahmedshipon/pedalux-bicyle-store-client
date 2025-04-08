import Loader from "@/components/share/Loader";
import { toast } from "sonner";
import {  useCancelOrderMutation, useGetMyOrdersQuery } from "@/redux/features/order/orderApi";
import { TOrder } from "@/types/Order.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyOrders = () => {
const {data:myOrderData,isLoading}=useGetMyOrdersQuery(undefined);
console.log(myOrderData?.data)
const [updateStatus]=useCancelOrderMutation(); 

const handleStatusChange = async (orderId: string, newStatus: string) => {
  const toastId = toast.loading("Updating...");
  try {
    const res = await updateStatus({ orderId, status: newStatus }).unwrap();
    toast.success(res.message, { id: toastId });
  
  } catch (error: any) {
    toast.error(error.data?.message || "Failed to Cancel Order", { id: toastId });
  }
};


 if(isLoading) return <div className="w-full h-full left-[5%] fixed "> <Loader/></div>
  return (
    <div className="w-full">
     <div className=" mx-10 mt-10">
<h3 className="text-2xl font-semibold text-black mb-5">Order History</h3>

<section className="lg:w-4xl w-[300px] md:w-[500px]">
  {
    myOrderData?.data?.map((order:TOrder)=> <div key={order._id} className="w-full border rounded-lg mb-14 shadow-xl">
      {/* header  */}
    <div className="flex flex-col gap-5 lg:flex-row justify-between items-center w-full p-5">
<div className="text-center">
  <p className="text-sm text-gray-500">Order Date</p>
  <p >{new Date(order.createdAt).toLocaleDateString()}</p>
</div>
<div className="text-center">
  <p className="text-sm text-gray-500">Total Amount</p>
  <p >{order.totalPrice}</p>
</div>

<div className="text-center">
  <p className="text-sm text-gray-500">Shipping Address</p>
  <p >{order.shippingAddress.street},{order.shippingAddress.city}</p>
</div>
<div className="text-center">
  <p className="text-sm text-gray-500">#Transaction Id</p>
  <p className="text-blue-400">{order.transaction.id}</p>
</div>
<div className="text-center">
  <p className="text-sm text-gray-500">Payment Status</p>
  <Badge className={cn("px-10",
    order.paymentStatus==='pending' && "bg-orange-50 text-orange-600",
    order.paymentStatus==='paid' && "bg-green-50 text-green-600",
    order.paymentStatus==='cancel' && "bg-red-50 text-red-600",
  )} variant="outline">{order.paymentStatus}</Badge>
</div> 
    </div>
    {/* products  */}
    <div>
{
  order.products?.map(item=>
<div key={item.bicycle._id} className="p-3 m-3 border-b flex flex-col lg:flex-row  justify-between lg:bg-slate-50 items-center gap-3 mb-3">
        <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex  justify-center items-center gap-8">
           <img src={item.bicycle.imageUrl} className="md:w-24 md:h-24 w-24 h-24 " />
         </div>
       <div>
       <p className="font-semibold ml-8">{item.bicycle.name}</p>
       <p className="font-semibold text-sm mt-2 text-gray-500  ml-8">{item.bicycle.brand}</p>
       <p className="font-semibold text-sm   ml-8">{item.bicycle.model}</p>
       </div>
        </div>
          <div className="flex flex-col  lg:items-end">
           
            <span ><span >qty:</span>{item.quantity}</span>
            <span><span className="text-3xl ">&#2547;</span>{item.price}</span>
          </div>

        </div>
)
}
    </div>
  {/* footer  */}
  <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-end lg:items-stretch gap-5  p-5">

  <Button disabled={order.status==='cancelled'} variant={'outline'}><Link to={`/verify-orders?order_id=${order.transaction.id}`}>View Invoice</Link></Button>
  <Button disabled={order.status==='cancelled'} onClick={()=>handleStatusChange(order._id,"cancelled")}>{order.status==='cancelled'?"Cancelled":"Cancel Order"}</Button>
  </div>
  </div>)
  }
 
</section>

 
     </div>
      

    </div>
  );
};

export default MyOrders;
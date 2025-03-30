import AppForm from "@/components/forms/AppForm";
import AppInput from "@/components/forms/AppInput";
import { shippingSchema } from "@/schema/checkoutScheme";
import { Button } from "@/components/ui/button";
import { ICartItem, useCartItems, useTotalPrice } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";


const Checkout = () => {
 const cartItems = useAppSelector(useCartItems);
 const totalPrice = useAppSelector(useTotalPrice);
 const [createOrder]=useCreateOrderMutation();

  const onSubmit=async(data:FieldValues,methods:UseFormReturn<FieldValues>)=>{
  const products =cartItems.map(item=>(
      {
        "bicycle": item._id,
        "quantity": item.quantity, 
        "price": item.price,
      }
    ))
console.log(data)
 const orderData={
  phoneNumber:data.phoneNumber,
  products,
  totalPrice, 
  paymentMethod: "SurjoPay", 
  shippingAddress:data
 }
    const id = toast.loading("please! wait a few second...")
    try {
 const res=  await createOrder(orderData).unwrap();
console.log(res.data);
toast.success(res.message,{id:id})
 methods.reset();
window.location.href=res.data

    } catch (error:any) {
      console.log(error)
      toast.error(error.data.message,{id:id})
    }
  
  }
  
  const defaultValues={phoneNumber:"",street:"",city:"",state:"",zipCode:"",country:""}
 
  return (
    <div className="container mx-auto p-6 mt-10 mb-24">
      <AppForm onSubmit={onSubmit} defaultValues={defaultValues} resolver={zodResolver(shippingSchema)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Customer Information */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
       
          <AppInput
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
        
          />
          <AppInput
            type="text"
            name="street"
            placeholder="Street Address"

          />
          <AppInput
            type="text"
            name="city"
            placeholder="City"
         
          />
          <AppInput
            type="text"
            name="state"
            placeholder="State"
           
          
          />
          <AppInput
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
           
          
          />
          <AppInput
            type="text"
            name="country"
            placeholder="Country"
 
          />
        </div>
        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item:ICartItem) => (
              <div key={item._id} className="flex items-center border-b pb-2">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="font-semibold"><span className="text-xl">&#2547;</span>{item.price}</p>
                </div>
              </div>
            ))}
            <div className="font-bold flex justify-between py-2 text-2xl">
              <p>Total Price:</p>
              <p><span className="text-3xl">&#2547;</span>{totalPrice}</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold mb-5">Payment Method</h2>
            <div className="flex items-center space-x-2 mb-5">
            <div className="flex items-center gap-3">
         
         <img className="w-24" src="/src/assets/surjoPay_logo.png" alt="surjo pay" />
         <p className="font-bold">SurjoPay</p>
        </div>
    </div>
          
            <Button
             type="submit"
              className="w-full"
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
      </AppForm>
    </div>
  );
};

export default Checkout;

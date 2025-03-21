import { IProduct } from "@/components/share/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { useState } from "react";

const Checkout = () => {
  const {data}=useGetAllProductsQuery({});
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e:any) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    console.log("Proceeding to Payment...");
  };

 
  return (
    <div className="container mx-auto p-6 mt-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Customer Information */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
       
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            className="w-full p-2 border mb-5 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-2 border mb-5 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="w-full p-2 border mb-5 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            className="w-full p-2 border mb-5 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="w-full p-2 border mb-5 rounded"
            onChange={handleChange}
          />
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {data?.data?.map((item:IProduct) => (
              <div key={item._id} className="flex items-center border-b pb-2">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p className="text-sm">Qty: {item.stock}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="font-bold flex justify-between py-2 text-2xl">
              <p>Total</p>
              <p><span className="text-3xl">&#2547;</span>240928</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold mb-5">Payment Method</h2>
           <div className="flex items-stretch gap-3">
            <img className="w-24" src="/src/assets/surjoPay_logo.png" alt="surjo pay" />
            <p className="font-bold">SurjoPay</p>
           </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-rose-500 text-white py-2 mt-4 rounded hover:bg-rose-700"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

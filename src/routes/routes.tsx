import ProtectedRoutes from "@/auth/ProtectedRoutes";
import Dashboard from "@/components/layout/dashbaord/Dashboard";
import MainLayout from "@/components/layout/mainLayout/MainLayout";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import ManageAccount from "@/pages/ManageAccount";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import VerifyOrders from "@/pages/VerifyOrders";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element:<MainLayout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/product-details/:id",
      element:<ProductDetails/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/sign-up",
      element:<SignUp/>
    },
    {
      path:"/sign-in",
      element:<SignIn/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/checkout",
      element:<ProtectedRoutes><Checkout/></ProtectedRoutes>
    },
    {
      path:"/verify-orders",
      element:<ProtectedRoutes><VerifyOrders/></ProtectedRoutes>
    },
  ],
},
{
  path:"dashboard",
  element:<Dashboard/>,
  children:[
    {
      index:true,
      element:<ManageAccount/>
    },
  ]
}
]);

export default router;
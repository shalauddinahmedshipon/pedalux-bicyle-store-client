import MainLayout from "@/components/layout/mainLayout/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
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
  ]
}
]);

export default router;
import ProtectedRoutes from "@/auth/ProtectedRoutes";
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";
import MainLayout from "@/components/layout/mainLayout/MainLayout";
import AdminDashboard from "@/pages/adminDashboard/AdminDashboard";
import ManageOrders from "@/pages/adminDashboard/ManageOrders";
import ManageProducts from "@/pages/adminDashboard/ManageProducts";
import ManageUsers from "@/pages/adminDashboard/ManageUsers";
import ProfileSetting from "@/pages/adminDashboard/ProfileSetting";
import About from "@/pages/mainLayout/About";
import Cart from "@/pages/mainLayout/Cart";
import Checkout from "@/pages/mainLayout/Checkout";
import Contact from "@/pages/mainLayout/Contact";
import Home from "@/pages/mainLayout/Home";
import ProductDetails from "@/pages/mainLayout/ProductDetails";
import Products from "@/pages/mainLayout/Products";
import SignIn from "@/pages/mainLayout/SignIn";
import SignUp from "@/pages/mainLayout/SignUp";
import VerifyOrders from "@/pages/mainLayout/VerifyOrders";
import ManageProfile from "@/pages/userDashboard/ManageProfile";
import MyOrders from "@/pages/userDashboard/MyOrders";
import UserDashboard from "@/pages/userDashboard/UserDashboard";
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
  path: "/dashboard",
  element: <ProtectedRoutes><DashboardLayout/></ProtectedRoutes>,
  children: [
     //admin routes 
    { path: "admin", element: <ProtectedRoutes role="admin"><AdminDashboard /></ProtectedRoutes> },
    { path: "admin/manage-users", element: <ProtectedRoutes role="admin"><ManageUsers/></ProtectedRoutes> },
    { path: "admin/manage-products", element: <ProtectedRoutes role="admin"><ManageProducts/></ProtectedRoutes> },
    { path: "admin/manage-orders", element: <ProtectedRoutes role="admin"><ManageOrders/></ProtectedRoutes> },
    { path: "admin/profile-settings", element: <ProtectedRoutes role="admin"><ProfileSetting/></ProtectedRoutes> },
    //user routes
    { path: "customer", element: <ProtectedRoutes role="customer"><UserDashboard /></ProtectedRoutes> },
    { path: "customer/my-orders", element: <ProtectedRoutes role="customer"><MyOrders/></ProtectedRoutes> },
    { path: "customer/manage-profile", element: <ProtectedRoutes role="customer"><ManageProfile/></ProtectedRoutes> },
  ],
},
]);

export default router;
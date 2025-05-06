import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const MainLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
     <main className="container">
    <ScrollRestoration/>
    <FloatingWhatsApp
        phoneNumber="+8801862930107"
        accountName="Peralux"
        avatar="https://res.cloudinary.com/dplg1mhic/image/upload/v1746500923/Black_and_White_Modern_Bicycle_Shop_Logo_3_1_lxcjhq.png"
        allowEsc
        notification
        notificationSound
      />
     <Navbar/>
     <Outlet/>
     </main>
     <Footer/>
    </div>
  );
};

export default MainLayout;
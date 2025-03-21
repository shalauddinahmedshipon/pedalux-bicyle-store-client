import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";


const MainLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center">
     <main className="container">
      <ScrollRestoration/>
     <Navbar/>
     <Outlet/>
     </main>
     <Footer/>
    </div>
  );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
  return (
    <div className="flex justify-center">
     <main className="container">
     <Navbar/>
     <Outlet/>
     </main>
    </div>
  );
};

export default MainLayout;
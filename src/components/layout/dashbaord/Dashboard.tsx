import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>
       <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      <Outlet/>
      </main>
    </SidebarProvider>
    </div>
  );
};

export default Dashboard;
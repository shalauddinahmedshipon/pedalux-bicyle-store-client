import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
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

export default DashboardLayout;
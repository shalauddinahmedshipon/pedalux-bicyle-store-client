import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./AppSidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div >
<ScrollRestoration/>
<SidebarProvider>
      <AppSidebar />
      <main >
      <SidebarTrigger />
      <Outlet/>
      </main>
    </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
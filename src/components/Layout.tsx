
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Navbar />
        <div className="flex-1 ml-64">
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;

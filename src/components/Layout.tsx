
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {!isLandingPage && <Navbar />}
        <div className={`flex-1 ${!isLandingPage ? "ml-64" : ""}`}>
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;

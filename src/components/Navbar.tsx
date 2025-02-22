
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  BarChart2,
  Wallet,
  Users,
  Settings,
  Shield,
  HelpCircle,
  Moon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-card/80 backdrop-blur-xl border-r p-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
          <span className="text-white font-bold">B</span>
        </div>
        <h1 className="text-xl font-bold">Bravyn</h1>
      </div>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-8 left-6 right-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Dark Mode</span>
          <Button variant="ghost" size="icon">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/50">
          <img
            src="https://ui-avatars.com/api/?name=Alex+Costa"
            alt="Alex Costa"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">Alex Costa</p>
            <p className="text-sm text-muted-foreground">Web Developer</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { path: "/analytics", label: "Analytics", icon: BarChart2 },
  { path: "/wallet", label: "My Wallet", icon: Wallet },
  { path: "/accounts", label: "Accounts", icon: Users },
  { path: "/settings", label: "Settings", icon: Settings },
  { path: "/security", label: "Security", icon: Shield },
  { path: "/help", label: "Help Centre", icon: HelpCircle },
];

export default Navbar;


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Search, Bell, ChevronDown } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Welcome Back, Alex 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="search-input pl-10" 
              placeholder="Search for anything..." 
            />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-muted-foreground">Total Income</p>
              <h3 className="text-2xl font-bold mt-1">$632,000</h3>
            </div>
            <span className="text-secondary">+1.29%</span>
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-muted-foreground">Total Outcome</p>
              <h3 className="text-2xl font-bold mt-1">$632,000</h3>
            </div>
            <span className="text-destructive">-1.29%</span>
          </div>
        </div>
        <div className="glass-card p-6">
          <div>
            <p className="text-muted-foreground mb-4">My Card</p>
            <div className="gradient-card p-4 rounded-xl">
              <p className="text-lg mb-6">Card Balance</p>
              <h3 className="text-3xl font-bold mb-4">$15,595.015</h3>
              <div className="flex justify-between items-center">
                <p>4253 5432 3921 3090</p>
                <div className="text-sm">
                  <p>EXP 09/24</p>
                  <p>CVV 341</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline">Manage Cards</Button>
              <Button>Transfer</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              2020 <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Bar dataKey="income" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outcome" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const analyticsData = [
  { name: "Jan", income: 30000, outcome: 25000 },
  { name: "Feb", income: 25000, outcome: 28000 },
  { name: "Mar", income: 35000, outcome: 20000 },
  { name: "Apr", income: 28000, outcome: 30000 },
  { name: "May", income: 32000, outcome: 25000 },
  { name: "Jun", income: 27000, outcome: 29000 },
  { name: "Jul", income: 38000, outcome: 27000 },
  { name: "Aug", income: 25000, outcome: 23000 },
];

export default Dashboard;

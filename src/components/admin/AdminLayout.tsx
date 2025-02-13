import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Users,
  ClipboardList,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminUser, Notification } from "@/lib/types";

const mockUser: AdminUser = {
  id: "1",
  name: "Admin User",
  email: "admin@example.com",
  role: "admin",
  permissions: ["all"],
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "lead",
    title: "Novo Lead",
    message: "João Silva está interessado no BMW Série 3",
    read: false,
    createdAt: new Date().toISOString(),
    link: "/admin/leads/1",
  },
];

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Veículos", href: "/admin/vehicles", icon: Car },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Relatórios", href: "/admin/reports", icon: ClipboardList },
  { name: "Configurações", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 rounded-lg px-4 py-2 text-sm font-medium ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-4 rounded-lg bg-gray-800 p-4">
            <Avatar>
              <AvatarImage src={mockUser.avatar} />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{mockUser.name}</p>
              <p className="text-xs text-gray-400">{mockUser.role}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h2 className="text-lg font-semibold">
            {navigation.find((item) => item.href === location.pathname)?.name ||
              "Dashboard"}
          </h2>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
                {mockNotifications.some((n) => !n.read) && (
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                )}
              </Button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 rounded-lg border bg-white p-4 shadow-lg">
                  <h3 className="mb-4 font-semibold">Notificações</h3>
                  <div className="space-y-4">
                    {mockNotifications.map((notification) => (
                      <Link
                        key={notification.id}
                        to={notification.link || "#"}
                        className="block rounded-lg bg-gray-50 p-3 hover:bg-gray-100"
                      >
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {new Date(
                            notification.createdAt,
                          ).toLocaleDateString()}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

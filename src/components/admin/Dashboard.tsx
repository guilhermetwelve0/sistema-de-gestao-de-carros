import { Card } from "@/components/ui/card";
import { DealershipStats } from "@/lib/types";
import {
  Car,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react";

const mockStats: DealershipStats = {
  totalVehicles: 150,
  availableVehicles: 120,
  reservedVehicles: 20,
  soldVehicles: 10,
  totalLeads: 45,
  activeLeads: 30,
  monthlyStats: [
    {
      month: "2024-01",
      sales: 8,
      revenue: 2400000,
      leads: 25,
    },
    {
      month: "2024-02",
      sales: 12,
      revenue: 3600000,
      leads: 35,
    },
  ],
};

const upcomingTestDrives = [
  {
    id: "1",
    customerName: "João Silva",
    vehicleName: "BMW Série 3",
    date: "2024-03-15T10:00:00",
  },
  {
    id: "2",
    customerName: "Maria Santos",
    vehicleName: "Mercedes C200",
    date: "2024-03-15T14:30:00",
  },
];

const recentLeads = [
  {
    id: "1",
    customerName: "Pedro Costa",
    vehicleName: "Audi A4",
    date: "2024-03-14T15:45:00",
    status: "new",
  },
  {
    id: "2",
    customerName: "Ana Oliveira",
    vehicleName: "BMW X5",
    date: "2024-03-14T11:20:00",
    status: "contacted",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Veículos Disponíveis</p>
              <p className="text-2xl font-bold">
                {mockStats.availableVehicles}
              </p>
              <p className="text-xs text-gray-400">
                Total: {mockStats.totalVehicles}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-green-100 p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Leads Ativos</p>
              <p className="text-2xl font-bold">{mockStats.activeLeads}</p>
              <p className="text-xs text-gray-400">
                Total: {mockStats.totalLeads}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-purple-100 p-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Receita Mensal</p>
              <p className="text-2xl font-bold">
                {mockStats.monthlyStats[1].revenue.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-xs text-green-500">
                <TrendingUp className="mr-1 inline h-3 w-3" />
                +15% vs. mês anterior
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Test Drives and Leads */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 flex items-center text-lg font-semibold">
            <Calendar className="mr-2 h-5 w-5" /> Test Drives Hoje
          </h3>
          <div className="space-y-4">
            {upcomingTestDrives.map((testDrive) => (
              <div
                key={testDrive.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
              >
                <div>
                  <p className="font-medium">{testDrive.customerName}</p>
                  <p className="text-sm text-gray-500">
                    {testDrive.vehicleName}
                  </p>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="mr-2 h-4 w-4" />
                  {new Date(testDrive.date).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 flex items-center text-lg font-semibold">
            <Users className="mr-2 h-5 w-5" /> Leads Recentes
          </h3>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
              >
                <div>
                  <p className="font-medium">{lead.customerName}</p>
                  <p className="text-sm text-gray-500">{lead.vehicleName}</p>
                </div>
                <div>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${lead.status === "new" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                  >
                    {lead.status === "new" ? "Novo" : "Contactado"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Filter } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Relatórios</h2>
          <p className="text-gray-500">Análise de vendas e desempenho</p>
        </div>

        <div className="flex items-center gap-4">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Última Semana</SelectItem>
              <SelectItem value="month">Último Mês</SelectItem>
              <SelectItem value="quarter">Último Trimestre</SelectItem>
              <SelectItem value="year">Último Ano</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filtros
          </Button>

          <Button>
            <Download className="mr-2 h-4 w-4" /> Exportar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="inventory">Inventário</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="financial">Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Vendas por Marca</h3>
              <div className="mt-4">
                {/* Chart component will go here */}
                <div className="h-[200px] rounded-lg bg-gray-100" />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Vendas por Modelo</h3>
              <div className="mt-4">
                {/* Chart component will go here */}
                <div className="h-[200px] rounded-lg bg-gray-100" />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Tendência de Vendas</h3>
              <div className="mt-4">
                {/* Chart component will go here */}
                <div className="h-[200px] rounded-lg bg-gray-100" />
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-6">
            <h3 className="text-lg font-semibold">Desempenho de Vendas</h3>
            <div className="mt-4">
              {/* Chart component will go here */}
              <div className="h-[400px] rounded-lg bg-gray-100" />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

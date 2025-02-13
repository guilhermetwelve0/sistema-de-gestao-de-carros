import { useState } from "react";
import { SalesLead } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Phone, Mail, User } from "lucide-react";

const mockLeads: SalesLead[] = [
  {
    id: "1",
    vehicleId: "1",
    customerName: "João Silva",
    customerEmail: "joao@example.com",
    customerPhone: "+55 11 99999-9999",
    status: "new",
    notes: "Interessado no BMW Série 3 preto",
    createdAt: "2024-03-14T15:30:00",
    updatedAt: "2024-03-14T15:30:00",
    testDrive: {
      scheduled: true,
      date: "2024-03-16T10:00:00",
      status: "pending",
    },
  },
  {
    id: "2",
    vehicleId: "2",
    customerName: "Maria Santos",
    customerEmail: "maria@example.com",
    customerPhone: "+55 11 98888-8888",
    status: "contacted",
    notes: "Aguardando retorno sobre proposta",
    createdAt: "2024-03-13T14:20:00",
    updatedAt: "2024-03-14T09:15:00",
    assignedTo: "1",
  },
];

const statusColors = {
  new: "bg-green-100 text-green-700",
  contacted: "bg-blue-100 text-blue-700",
  "test-drive": "bg-purple-100 text-purple-700",
  negotiating: "bg-yellow-100 text-yellow-700",
  closed: "bg-gray-100 text-gray-700",
  lost: "bg-red-100 text-red-700",
};

const statusLabels = {
  new: "Novo",
  contacted: "Contactado",
  "test-drive": "Test Drive",
  negotiating: "Em Negociação",
  closed: "Fechado",
  lost: "Perdido",
};

export default function LeadsManagement() {
  const [selectedLead, setSelectedLead] = useState<SalesLead | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gerenciar Leads</h2>
          <p className="text-gray-500">Acompanhe e gerencie leads de vendas</p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline">Exportar</Button>
          <Button>Novo Lead</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="new">Novos</TabsTrigger>
          <TabsTrigger value="active">Em Andamento</TabsTrigger>
          <TabsTrigger value="closed">Fechados</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Test Drive</TableHead>
                  <TableHead>Atribuído</TableHead>
                  <TableHead>Última Atualização</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.map((lead) => (
                  <TableRow
                    key={lead.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">{lead.customerName}</p>
                        <p className="text-sm text-gray-500">
                          {lead.customerEmail}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>BMW Série 3</TableCell>
                    <TableCell>
                      <Badge className={statusColors[lead.status]}>
                        {statusLabels[lead.status]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {lead.testDrive?.scheduled ? (
                        <div className="text-sm">
                          <p className="font-medium">
                            {new Date(
                              lead.testDrive.date!,
                            ).toLocaleDateString()}
                          </p>
                          <p className="text-gray-500">
                            {new Date(lead.testDrive.date!).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">
                          Não agendado
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {lead.assignedTo ? (
                        "Vendedor 1"
                      ) : (
                        <span className="text-sm text-gray-500">
                          Não atribuído
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{new Date(lead.updatedAt).toLocaleDateString()}</p>
                        <p className="text-gray-500">
                          {new Date(lead.updatedAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Detalhes do Lead</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
              <TabsTrigger value="test-drive">Test Drive</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nome do Cliente</Label>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>{selectedLead?.customerName}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{selectedLead?.customerEmail}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{selectedLead?.customerPhone}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <Badge
                    className={statusColors[selectedLead?.status || "new"]}
                  >
                    {statusLabels[selectedLead?.status || "new"]}
                  </Badge>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label>Notas</Label>
                  <Textarea
                    value={selectedLead?.notes}
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { useState } from "react";
import { Vehicle } from "@/lib/types";
import { vehicles } from "@/lib/data";
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
import { Plus, Pencil, Trash2, FileImage } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function VehicleManagement() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gerenciar Veículos</h2>
          <p className="text-gray-500">Gerencie o inventário de veículos</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Veículo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Veículo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input placeholder="BMW Série 3" />
                </div>
                <div className="space-y-2">
                  <Label>Marca</Label>
                  <Input placeholder="BMW" />
                </div>
                <div className="space-y-2">
                  <Label>Modelo</Label>
                  <Input placeholder="Série 3" />
                </div>
                <div className="space-y-2">
                  <Label>Ano</Label>
                  <Input placeholder="2024" />
                </div>
                <div className="space-y-2">
                  <Label>Preço</Label>
                  <Input placeholder="280000" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>Quilometragem</Label>
                  <Input placeholder="0" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Imagens</Label>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed"
                    >
                      <FileImage className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Veículo</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Última Atualização</TableHead>
              <TableHead className="w-24">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium">{vehicle.name}</p>
                      <p className="text-sm text-gray-500">
                        {vehicle.year} • {vehicle.mileage} km
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {vehicle.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      vehicle.status === "available" ? "default" : "secondary"
                    }
                  >
                    {vehicle.status === "available"
                      ? "Disponível"
                      : "Reservado"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{vehicle.location?.dealership}</p>
                  <p className="text-xs text-gray-500">
                    {vehicle.location?.address}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">Há 2 dias</p>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Configurações</h2>
        <p className="text-gray-500">Gerencie as configurações do sistema</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">
              Informações da Concessionária
            </h3>
            <div className="mt-4 grid gap-6">
              <div className="grid gap-2">
                <Label>Nome da Concessionária</Label>
                <Input placeholder="Premium Motors" />
              </div>

              <div className="grid gap-2">
                <Label>Endereço</Label>
                <Input placeholder="Av. Brasil, 1500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Telefone</Label>
                  <Input placeholder="(11) 3333-4444" />
                </div>
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input placeholder="contato@premiummotors.com" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Configurações do Sistema</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Modo Manutenção</Label>
                  <p className="text-sm text-gray-500">
                    Ativar modo de manutenção do site
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Notificações por Email</Label>
                  <p className="text-sm text-gray-500">
                    Enviar notificações por email
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Backup Automático</Label>
                  <p className="text-sm text-gray-500">
                    Realizar backup diário dos dados
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Usuários do Sistema</h3>
              <Button>Adicionar Usuário</Button>
            </div>

            <div className="mt-6 space-y-6">
              {[
                {
                  name: "Admin User",
                  email: "admin@example.com",
                  role: "admin",
                  status: "active",
                },
                {
                  name: "Sales Manager",
                  email: "manager@example.com",
                  role: "manager",
                  status: "active",
                },
                {
                  name: "Sales Rep",
                  email: "sales@example.com",
                  role: "sales",
                  status: "inactive",
                },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "secondary"
                      }
                    >
                      {user.status === "active" ? "Ativo" : "Inativo"}
                    </Badge>
                    <Select defaultValue={user.role}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="manager">Gerente</SelectItem>
                        <SelectItem value="sales">Vendedor</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

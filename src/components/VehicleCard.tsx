import { Vehicle } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import ImageGallery from "./ImageGallery";
import FinancingCalculator from "./FinancingCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VehicleCardProps extends Vehicle {}

export default function VehicleCard({
  id,
  image = "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  images = [image],
  name = "BMW Série 3",
  price = 280000,
  year = "2023",
  mileage = "0 km",
  color = "Preto",
  transmission = "Automático",
  fuel = "Gasolina",
  features = [],
  specs,
}: VehicleCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="group relative h-[420px] w-[380px] cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative h-[240px] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <button
            onClick={toggleFavorite}
            className="absolute right-4 top-4 rounded-full bg-white/80 p-2 transition-colors hover:bg-white"
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold">{name}</h3>
          <p className="mb-4 text-2xl font-bold text-blue-600">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Ano: {year}</span>
            <span>Quilometragem: {mileage}</span>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="financing">Financiamento</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="grid gap-6 md:grid-cols-2">
                <ImageGallery images={images} name={name} />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600">
                      {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h3>
                    <p className="text-gray-500">À vista</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Ano:</span>
                      <span>{year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Quilometragem:</span>
                      <span>{mileage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cor:</span>
                      <span>{color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Câmbio:</span>
                      <span>{transmission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Combustível:</span>
                      <span>{fuel}</span>
                    </div>
                  </div>

                  {specs && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Especificações:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gray-50 p-3 text-center">
                          <div className="text-sm text-gray-500">Potência</div>
                          <div className="font-medium">{specs.power}</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 text-center">
                          <div className="text-sm text-gray-500">
                            0-100 km/h
                          </div>
                          <div className="font-medium">
                            {specs.acceleration}
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 text-center">
                          <div className="text-sm text-gray-500">
                            Vel. Máxima
                          </div>
                          <div className="font-medium">{specs.topSpeed}</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3 text-center">
                          <div className="text-sm text-gray-500">Consumo</div>
                          <div className="font-medium">{specs.consumption}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="mb-2 font-medium">Características:</h4>
                    <div className="flex flex-wrap gap-2">
                      {features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Agendar Test Drive
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financing">
              <FinancingCalculator price={price} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

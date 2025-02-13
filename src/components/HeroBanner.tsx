import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <div className="relative h-[600px] w-full bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        alt="Premium car"
        className="h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-5xl font-bold">
          Encontre o Carro dos Seus Sonhos
        </h1>
        <p className="mb-8 text-xl">
          As melhores ofertas de veículos premium em um só lugar
        </p>
        <Button
          size="lg"
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Ver Ofertas
        </Button>
      </div>
    </div>
  );
}

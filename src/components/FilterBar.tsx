import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { FilterState } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between gap-4 bg-white p-4 shadow-md">
      <div className="flex flex-1 flex-wrap items-center gap-4">
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Buscar veículos..."
            className="pl-10"
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        <div className="hidden lg:flex lg:gap-4">
          <Select
            value={filters.brand}
            onValueChange={(value) => onFilterChange({ brand: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.model}
            onValueChange={(value) => onFilterChange({ model: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Modelo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="serie3">Série 3</SelectItem>
              <SelectItem value="serie5">Série 5</SelectItem>
              <SelectItem value="x5">X5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Select
          value={filters.sortBy}
          onValueChange={(value) =>
            onFilterChange({ sortBy: value as FilterState["sortBy"] })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Menor preço</SelectItem>
            <SelectItem value="price-desc">Maior preço</SelectItem>
            <SelectItem value="year-desc">Mais novos</SelectItem>
            <SelectItem value="mileage-asc">Menor km</SelectItem>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Ajuste os filtros para encontrar o veículo ideal
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <Select
                value={filters.brand}
                onValueChange={(value) => onFilterChange({ brand: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.model}
                onValueChange={(value) => onFilterChange({ model: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="serie3">Série 3</SelectItem>
                  <SelectItem value="serie5">Série 5</SelectItem>
                  <SelectItem value="x5">X5</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.year}
                onValueChange={(value) => onFilterChange({ year: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.priceRange}
                onValueChange={(value) => onFilterChange({ priceRange: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Faixa de Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="100-200">R$ 100-200k</SelectItem>
                  <SelectItem value="200-300">R$ 200-300k</SelectItem>
                  <SelectItem value="300+">R$ 300k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

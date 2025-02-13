import VehicleCard from "./VehicleCard";
import { vehicles } from "@/lib/data";
import { FilterState, Vehicle } from "@/lib/types";

interface VehicleGridProps {
  filters: FilterState;
}

export default function VehicleGrid({ filters }: VehicleGridProps) {
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesBrand =
      filters.brand === "all" || vehicle.brand === filters.brand;
    const matchesModel =
      filters.model === "all" || vehicle.model === filters.model;
    const matchesYear = filters.year === "all" || vehicle.year === filters.year;

    const matchesPriceRange =
      filters.priceRange === "all" ||
      (() => {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (filters.priceRange === "300+") return vehicle.price >= 300000;
        return vehicle.price >= min * 1000 && vehicle.price <= max * 1000;
      })();

    const matchesSearch =
      !filters.search ||
      vehicle.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(filters.search.toLowerCase());

    return (
      matchesBrand &&
      matchesModel &&
      matchesYear &&
      matchesPriceRange &&
      matchesSearch
    );
  });

  const sortVehicles = (vehicles: Vehicle[]) => {
    return [...vehicles].sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return parseInt(b.year) - parseInt(a.year);
        case "mileage-asc":
          return parseInt(a.mileage) - parseInt(b.mileage);
        default:
          return 0;
      }
    });
  };

  const sortedVehicles = sortVehicles(filteredVehicles);

  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
      {sortedVehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} {...vehicle} />
      ))}
      {sortedVehicles.length === 0 && (
        <div className="col-span-full text-center text-gray-500">
          Nenhum veículo encontrado com os filtros selecionados.
        </div>
      )}
    </div>
  );
}

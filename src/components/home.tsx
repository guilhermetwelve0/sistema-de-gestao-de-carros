import { useState } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import FilterBar from "./FilterBar";
import VehicleGrid from "./VehicleGrid";
import TestimonialSection from "./TestimonialSection";
import { FilterState } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

function Home() {
  const [filters, setFilters] = useState<FilterState>({
    brand: "all",
    model: "all",
    year: "all",
    priceRange: "all",
    search: "",
    sortBy: "price-asc",
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="fixed right-4 top-4 z-50">
        <Link to="/admin">
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <HeroBanner />
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <VehicleGrid filters={filters} />
      <TestimonialSection />
    </div>
  );
}

export default Home;

export interface Vehicle {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: number;
  year: string;
  mileage: string;
  brand: string;
  model: string;
  color: string;
  transmission: string;
  fuel: string;
  features: string[];
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    consumption: string;
  };
  status: "available" | "reserved" | "sold";
  condition: "new" | "used";
  vin: string;
  lastService?: {
    date: string;
    mileage: string;
    description: string;
  };
  warranty?: {
    valid: boolean;
    expiryDate: string;
    coverage: string[];
  };
  documents: {
    inspection: boolean;
    registration: boolean;
    insurance: boolean;
  };
  location: {
    dealership: string;
    address: string;
    coordinates: [number, number];
  };
  history?: {
    owners: number;
    accidents: number;
    maintenanceRecords: {
      date: string;
      description: string;
      mileage: string;
    }[];
  };
  pricing: {
    listPrice: number;
    discount?: number;
    promotionalPrice?: number;
    leaseOptions?: {
      monthlyPayment: number;
      downPayment: number;
      term: number;
    }[];
  };
}

export interface FilterState {
  brand: string;
  model: string;
  year: string;
  priceRange: string;
  search: string;
  sortBy: "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
  condition?: "new" | "used" | "all";
  status?: "available" | "reserved" | "sold" | "all";
}

export interface FinancingOptions {
  downPayment: number;
  months: number;
  interestRate: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "sales";
  permissions: string[];
  avatar?: string;
}

export interface SalesLead {
  id: string;
  vehicleId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status:
    | "new"
    | "contacted"
    | "test-drive"
    | "negotiating"
    | "closed"
    | "lost";
  notes: string;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  testDrive?: {
    scheduled: boolean;
    date?: string;
    status: "pending" | "completed" | "cancelled";
  };
}

export interface DealershipStats {
  totalVehicles: number;
  availableVehicles: number;
  reservedVehicles: number;
  soldVehicles: number;
  totalLeads: number;
  activeLeads: number;
  monthlyStats: {
    month: string;
    sales: number;
    revenue: number;
    leads: number;
  }[];
}

export interface Notification {
  id: string;
  type: "lead" | "sale" | "service" | "system";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

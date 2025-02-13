import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import VehicleManagement from "./components/admin/VehicleManagement";
import LeadsManagement from "./components/admin/LeadsManagement";
import Reports from "./components/admin/Reports";
import Settings from "./components/admin/Settings";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="vehicles" element={<VehicleManagement />} />
            <Route path="leads" element={<LeadsManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;

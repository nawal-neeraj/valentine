import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import Accepted from "./pages/Accepted";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/accepted"
        element={
          <MainLayout>
            <Accepted />
          </MainLayout>
        }
      />
    </Routes>
  );
}

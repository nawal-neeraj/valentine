import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import Accepted from "./pages/Accepted";
import Entry from "./pages/Entry";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Entry />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
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

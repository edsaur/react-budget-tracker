import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import AppLayout from "../src/ui/AppLayout";
import Dashboard from "./budget-tracker/Dashboard";
import Start from "./budget-tracker/Start";
import BudgetContextProvider from "./context/BudgetContext";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <BudgetContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="start" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </BudgetContextProvider>
  );
}

export default App;

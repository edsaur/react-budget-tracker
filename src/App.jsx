import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import AppLayout from "../src/ui/AppLayout";
import Dashboard from "./budget-tracker/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

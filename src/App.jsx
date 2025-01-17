<<<<<<< HEAD
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
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home";
import Error from './ui/Error';
import AppLayout from "./ui/AppLayout";
import CreateUser from "./features/user/CreateUser";

  // Insert ROUTING here
  const router = createBrowserRouter([{
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/create-user',
        element: <CreateUser/>
      }
    ]
  }]);

export default function App() {

  return (
    <RouterProvider router={router} />      
  )
}
>>>>>>> 174b3a3de5ee87376ddccd0f20d476076a1cec1b

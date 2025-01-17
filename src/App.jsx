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

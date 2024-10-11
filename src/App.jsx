import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"

export default function App() {
  // Insert ROUTING here
  const router = createBrowserRouter([{}]);
  return (
    <RouterProvider router={router} />      
  )
}

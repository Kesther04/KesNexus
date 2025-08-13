import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AllProjects from "./pages/AllProjects"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/projects",
      element: <AllProjects/>
    },
    {
      path: "/projects/:category",
      element: <AllProjects/>
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

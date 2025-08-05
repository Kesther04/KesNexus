import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/projects/dev",
      element: <div>Dev Projects</div>
    },
    {
      path: "/projects/copy",
      element: <div>Copy Projects</div>
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

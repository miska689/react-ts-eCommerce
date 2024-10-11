import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import UserRoutes from "./routes/user.routes.tsx";
import ProductList from "./features/products/components/ProductLIst.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserRoutes/>,
        children: [
            {
                path: 'products',
                element: <ProductList/>
            },
            {
                path: 'profile',
                element: <div>User Profile</div>
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

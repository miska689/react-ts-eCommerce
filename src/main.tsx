import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserRoutes from "@/routes/user.routes.tsx";
import ProductList from "@/features/products/components/ProductLIst.tsx";
import SignUpPage from "@/features/auth/pages/SignUpPage.tsx";

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
    {
        path: '/sign-up',
        element: <SignUpPage />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

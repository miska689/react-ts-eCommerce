import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@/redux/store.ts";
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

// Components
import UserRoutes from "@/routes/user.routes.tsx";
import ProductList from "@/features/products/components/ProductLIst.tsx";
import SignUpPage from "@/features/auth/pages/SignUpPage.tsx";
import SignInPage from "@/features/auth/pages/SignInPage.tsx";
import Toast from "@/components/Toast.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Dashboard from "@/components/Dashboard/Dashboard.tsx";
import AdminRoute from "@/routes/admin.routes.tsx";


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
		path: "/admin",
		element: <AdminRoute/>,
		children: [
			{
				path: '',
				element: <Dashboard/>
			},
		]
	},
	{
		path: '/sign-up',
		element: <SignUpPage/>
	},
	{
		path: '/sign-in',
		element: <SignInPage/>
	}
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}/>
				<Toast/>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Provider>
	</StrictMode>
)
